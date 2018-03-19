
var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";
var ListAllBlog = "https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec";
var appFolders = "https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec";
var currFileID;
var currFolderID;
var logout = function(){
  firebase.auth().signOut();
}



$(document).ready(function(e) {

	var converter = new showdown.Converter();
	converter.setOption('tables',true);
	converter.setOption('tasklists',true);
      function Editor(input, preview) {
        this.update = function () {
		preview.innerHTML = "";
		content = input.value;
		var html_content = md2html(content);
    
          $('#preview').html(html_content);
		  var preview_height = $('#preview').height();
		  if(preview_height < 500) preview_height = 500;

		  $('.AutoHeight').height(preview_height);
        };
        input.editor = this;
//	$("#text-input").height($("#preview").height());
//	input.height(preview.height());
        this.update();
      }
      var $$ = function (id) { return document.getElementById(id); };
      new Editor($$("text-input"), $$("preview"));

      $('#diagram').hide()
      currFileID = window.location.search.split("?")[1].split('&')[0].split("=")[1];
      currFolderID = window.location.search.split("?")[1].split('&')[1].split("=")[1];

      $('#folder_selection select').val(currFolderID);
      console.log(currFileID);
      $.get(appBlogs,

          {
              FileID:currFileID,
              "command":"read"
          },
        function (data) {
          //console.log("the result is :"+data);
          console.log(data);
          title = data.split('$$')[0];

          content = data.split('$$')[1];
          $('#is_draft_id').val(data.split('$$')[2]);
          $('#is_public_id').val(data.split('$$')[3]);

          /*
          var mode = content.pop();
          if(mode=="777"){
            $('#is_publicInput').attr('checked', true);
          }else if (mode == "000"){
            $('#is_publicInput').attr('checked', false);
          }
          content.shift();

          $('#text-input').val(content.join());
          */
          $('#text-input').val(content);
          $('#text-input')[0].editor.update()
          $('#titleInput').val(title);
        });
      document.getElementById('text-input').focus();

});

    function Delete(){
      console.log(currFileID);
      $.get(appFiles, {

            "command":"commandDeleteFile",
            "FileID":currFileID
          },
        function (data) {
			$(location).attr('href', 'admin.html');
		});

    }
    function View(){
      var search = window.location.search;
      window.open('blog.html'+search, '_blank');
    }
    function SendScore(){
		$('#feedback').html('')
      var currFileID = window.location.search.split("?")[1].split('&')[0].split("=")[1];
      console.log(currFileID);
      var mode;
      if($("#is_publicInput").prop("checked")){
        mode = "777"
      }else{
        mode = "000"
      }

    $.post(appFiles, {

          "command":"blog_update",
          "FileID":currFileID,
          "FolderID": parseInt($('#folder_selection select').val()),
          "filename":  document.getElementById("titleInput").value,
          "content":document.getElementById("text-input").value,
          "is_public":parseInt($('#is_public_id').val()),
          "is_draft":parseInt($('#is_draft_id').val()),
          "uid":uid
        },
        function (data) {
			if(data=="true"){
				$('#feedback').html('done')
			}
    });
    }
