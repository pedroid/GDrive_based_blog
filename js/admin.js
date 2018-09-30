
$(function(){
	$('#diagram').hide();
		// Initialize Firebase
		  var config = {
			apiKey: "AIzaSyAtI63y6oM7PO4p0U2AEMsXrhScPYeC3GA",
			authDomain: "uxapi-74e8b.firebaseapp.com",
			databaseURL: "https://uxapi-74e8b.firebaseio.com",
			projectId: "uxapi-74e8b",
			storageBucket: "",
			messagingSenderId: "1051481601400"
		  };
		  firebase.initializeApp(config);
			console.log(firebase);
		  const btnLogin = document.getElementById('btnLogin');
		  const btnLogout = document.getElementById('btnLogout');



		  firebase.auth().onAuthStateChanged(firebaseUser=>{
				if(firebaseUser){
						console.log('hi,'+firebaseUser.email);
						if(window.location.search){

							text_argument_set = window.location.search.split("?")[1].split('&');
							arg_set = {};
							text_argument_set.forEach(item=>{
								arg_set[item.split('=')[0]] = item.split('=')[1];

							})


							if(arg_set["FileID"]){
								currFileID = parseInt(arg_set["FileID"]);
								load_content(currFileID);

								$('.w3-dropdown-content').append('<a href=\"presentation.html?FileID='+currFileID+'\" class=\"w3-bar-item w3-button\">presentation</a>')
								$('.w3-dropdown-content').append('<a href=\"book.html?FileID='+currFileID+'\" class=\"w3-bar-item w3-button\">book</a>')
							}
							if(arg_set["FolderID"]){
								currFolderID = parseInt(arg_set["FolderID"]);
								load_admin_folder_content(currFolderID);
							}
						}else{
								load(firebaseUser.uid);
						}
						//console.log('hi,'+firebaseUser.getDisplayName());
				}else{
						console.log('not logged in');
						window.location = "login.html";
				}
		  });



});

var load = function(uid){


	//console.log(uid);
	//prettyPrint();
	$.get(appFiles, {
		"command":"commandGetBlogs",
		"uid":uid

	},function(data){
		console.log(data);
		var blogs_set = data.split('||');
		blogs_set.pop();
		//console.log(blogs_set);
		test = blogs_set;
		for(i in blogs_set){
			var files_fileid = blogs_set[i].split("$$")[0];
			var files_folderid = blogs_set[i].split("$$")[1];
			var files_filename = blogs_set[i].split("$$")[2];
			var folders_name = blogs_set[i].split("$$")[3];
			var files_smallimg = blogs_set[i].split("$$")[4];
			var files_draft = blogs_set[i].split("$$")[5];
			var files_public = blogs_set[i].split("$$")[6];
			//$('.content-wrapper').prepend("<div>test</div>")
			//console.log(blogs_set[i].split("$$")[4]);
			var text_draft = (files_draft=="1")?"(draft)":"";
			var text_public = (files_public=="1")?"":"(private)";
			var grid_item_text;
			if( (files_draft=="0")&(files_public=="1") ) {grid_item_text = "grid-item-dodger";}
			if( (files_draft=="0")&(files_public=="0") ) {grid_item_text = "grid-item-red";}
			if( (files_draft=="1")&(files_public=="1") ) {grid_item_text = "grid-item-sky";}
			if( (files_draft=="1")&(files_public=="0") ) {grid_item_text = "grid-item-safe";}
			$('.posts').prepend(var2content3(files_filename, files_fileid, files_folderid, files_smallimg, files_draft, files_public));
			//$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"<a target=\"_blank\"href=\"edit.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\">"+"(Edit)"+"</a></div></div></div></a>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

		}
		//$('img').height(280);
	});

}
var var2content3 = function(course_name, files_fileid,files_folderid, course_icon, files_draft, files_public){
  //console.log(files_draft+','+files_public);
  var grid_item_text;
	if( (files_draft=="0")&(files_public=="1") ) {grid_item_text = "(publish, public)";}
	if( (files_draft=="0")&(files_public=="0") ) {grid_item_text = "(publish, <font color=\"red\">private</font>)";}
	if( (files_draft=="1")&(files_public=="1") ) {grid_item_text = "(<font color=\"orange\">draft</font>, public)";}
	if( (files_draft=="1")&(files_public=="0") ) {grid_item_text = "(<font color=\"orange\">draft</font>, <font color=\"red\">private</font>)";}
  var tmp_text = "<div class=\"w3-third w3-container w3-margin-bottom\">";
  tmp_text+="<img src=\"";
  tmp_text+=course_icon;
  tmp_text+="\
   \" alt=\"";
   tmp_text+=course_name;
   tmp_text+="\" style=\"width:100%\" class=\"w3-hover-opacity\">\
	<div class=\"w3-container w3-white\"><p><b>";
	//tmp_text+="<a href=\"javascript:load_content(";
	tmp_text+="<a href=\"admin.html?FileID=";
	tmp_text+=files_fileid;
        //tmp_text+="blog.html?CourseID="+course_id;
    tmp_text+="\"";
        tmp_text+="\" class=\"image\">";
	tmp_text+=course_name;
	//tmp_text+="</a><a target=\"_blank\"href=\"edit.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\">"+"(Edit)"+grid_item_text+"</a></b></p></div></div>";
	tmp_text+="</a><a target=\"_blank\"href=\"edit.html?FileID="+files_fileid+"\">"+"(Edit)"+grid_item_text+"</a></b></p></div></div>";
  return tmp_text;

}
var load_content = function(fileid){
	$('.posts').html('');
  if(typeof fileid != "undefined"){
	  $('.content').html("loading..");
	  $('#blog_title').html("");
		$.get(appBlogs,

             {
                 FileID:fileid,
                 "command":"read"
             },
           function (data) {
			   console.log(data);
				 $('.content').html("");
             title = data.split('$$')[0];
             content = data.split('$$')[1];
						 folder_name = data.split('$$')[7];
						 //console.log(folder_name);
						 $('#portfolio ul').append("<li><a href=\"edit.html?FileID="+ fileid +"&a=1\">edit</a></li>")
						 var html_content = "";
			 //var html_content = "<a href=\"../edit.html?FileID="+ fileid +"&a=1\">(edit)</a>";
             //html_content += md2html(content,html_content,0);
						 [mdppSet, DivSet] = mdpp2DivSet(content);

						 DivSet2StaticDisplay(mdppSet, DivSet, $('.content'));
						 for (var i = 0; i < mdppSet.length; i++) {
						 		DynamicDisplay(mdppSet, DivSet, i);
						 }
						 //console.log(html_content);
             $('#blog_title').html(title+' (#'+folder_name+')');
             //$('.content').html(html_content);
						 $('img').width('70%');
           });
  }
}

var load_admin_folder_content = function(folderid){
	if(typeof folderid != "undefined"){
		$('.posts').html("");
		$('.content').html("");
	$.get(appFiles, {
		"command":"commandGetAdminFolderFiles",
		"FolderID":folderid
	},function(data){
		console.log(data);

		var blogs_set = data.split('||');
		//console.log(blogs_set);
		blogs_set.pop();
		//console.log(blogs_set);
		test = blogs_set;
		for(i in blogs_set){
			//console.log(blogs_set[i]);
			var files_fileid = blogs_set[i].split("$$")[0];
			var files_folderid = blogs_set[i].split("$$")[1];
			var files_filename = blogs_set[i].split("$$")[2];
			var folders_name = blogs_set[i].split("$$")[3];
			var files_smallimg = blogs_set[i].split("$$")[4];
			var files_draft = blogs_set[i].split("$$")[5];
			var files_public = blogs_set[i].split("$$")[6];
			//$('.content-wrapper').prepend("<div>test</div>")
			//console.log(blogs_set[i].split("$$")[4]);
			var grid_item_text= "grid-item-blue";
			$('.posts').prepend(var2content3(files_filename, files_fileid,files_folderid, files_smallimg, files_draft, files_public));
			//$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

		}

	});
	}
}
