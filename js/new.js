
var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";
var ListAllBlog = "https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec";
var appFolders = "https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec";

  var has_submitted = false;
  var uid;
  $(document).ready(function(e) {

    //firebase
          var config = {
          apiKey: "AIzaSyAtI63y6oM7PO4p0U2AEMsXrhScPYeC3GA",
          authDomain: "uxapi-74e8b.firebaseapp.com",
          databaseURL: "https://uxapi-74e8b.firebaseio.com",
          projectId: "uxapi-74e8b",
          storageBucket: "",
          messagingSenderId: "1051481601400"
          };
          firebase.initializeApp(config);

          firebase.auth().onAuthStateChanged(firebaseUser=>{
            if(firebaseUser){
                console.log('hi,'+firebaseUser.email);
                uid = firebaseUser.uid;

            }else{
                console.log('not logged in');
                window.location = "login.html";
            }
          });

    //end of firebase

    if(window.location.search!=""){
      var filename_tmp = window.location.search.split("?")[1].split('&')[0].split("=")[1];
      var FolderID = parseInt(window.location.search.split("?")[1].split('&')[1].split("=")[1]);
      $('#folder_selection select').val(FolderID);
      $('#titleInput').val(filename_tmp);
    }
  });
  $('#text-input').focus()

var currFileID;
function SendScore(){
  if(!has_submitted){
    console.log('submit!');
    var mode;
    if($("#is_publicInput").prop("checked")){
      mode = "777"
    }else{
      mode = "000"
    }
    //var FolderID = window.location.search.split("?")[1].split('&')[1].split("=")[1];
    var FolderID = parseInt($('#folder_selection select').val());
    //console.log(FolderID);
    $.post(appFiles, {
          "command":"blog_new",
          "filename": document.getElementById("titleInput").value,
          "content": document.getElementById("text-input").value,
          "FolderID": FolderID,
          "is_public":parseInt($('#is_public_id').val()),
          "is_draft":parseInt($('#is_draft_id').val()),
          "uid":uid
        },
        function (data) {
          currFileID = parseInt(data);
          //console.log(data);
          if(currFileID>0){
			$('#feedback').html('done');
		  }
        //    document.write("--------------------------");
        //   document.write("Result = "+data);
        //   document.write("--------------------------");
    });
    $('#submit_button').val('update')
	$('#submit_button2').val('update')
    has_submitted = true;
  }else{
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
          //console.log(data);

          //$('#feedback').html(data)
        //    document.write("--------------------------");
        //   document.write("Result = "+data);
        //   document.write("--------------------------");
    });
  }
    }
