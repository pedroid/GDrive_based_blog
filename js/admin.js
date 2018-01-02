var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogAuthen = "https://script.google.com/macros/s/AKfycby1kO-bI-2KeFM2XKHVRZwsS9cUjoJyklfOsGwP-h3S4c_sZUg/exec";
$(function(){
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

		  const btnLogin = document.getElementById('btnLogin');
		  const btnLogout = document.getElementById('btnLogout');


		  firebase.auth().onAuthStateChanged(firebaseUser=>{
				if(firebaseUser){
						console.log('hi,'+firebaseUser.email);

						load(firebaseUser.uid);
						//console.log('hi,'+firebaseUser.getDisplayName());
				}else{
						console.log('not logged in');
						window.location = "login.html";
				}
		  });

});

var load = function(uid){
	//console.log('test');
	prettyPrint();
	$.get(appFiles, {
		"command":"commandGetBlogs",
		"uid":uid

	},function(data){
		//console.log(data);
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
			$('#LatestArticle').prepend("<div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"description\"><div class=\"item-title\"><a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\">"+files_filename+text_draft+text_public+"</a><a target=\"_blank\"href=\"edit.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\">"+"(Edit)"+"</a></div><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div></div></div></div>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

		}
	});

}
