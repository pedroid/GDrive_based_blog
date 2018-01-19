var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";

$(function(){
	
	$('#diagram').hide();
	$.get(appFiles, {
		"command":"commandGetPublicBlogs"

	},function(data){
		console.log(data);
		$('.content').html("");
		var blogs_set = data.split('||');
		//console.log(blogs_set);
		blogs_set.pop();
		//console.log(blogs_set);
		test = blogs_set;
		for(i in blogs_set){
			var files_fileid = blogs_set[i].split("$$")[0];
			var files_folderid = blogs_set[i].split("$$")[1];
			var files_filename = blogs_set[i].split("$$")[2];
			var folders_name = blogs_set[i].split("$$")[3];
			var files_smallimg = blogs_set[i].split("$$")[4];
			//$('.content-wrapper').prepend("<div>test</div>")
			//console.log(blogs_set[i].split("$$")[4]);
			var grid_item_text= "grid-item-blue";
			$('.posts').prepend(var2content3(files_filename, files_fileid, files_smallimg));
			//$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

		}
	});


});
var hh=[];
var pwd = function(input){
	
	hh.push(input);	
	if(hh.length < 5){
		console.log(hh);
	}else{
		
		console.log(hh);
		if(hh[0]==1 & hh[1]==2 & hh[2]==3 & hh[3] == 4 & hh[4] == 5){
			window.location = "admin.html";
		}
		hh.shift();
	}
}
var var2content3 = function(course_name, course_id, course_icon){
  var tmp_text = "<div class=\"w3-third w3-container w3-margin-bottom\">";
  tmp_text+="<img src=\"";
  tmp_text+=course_icon;
  tmp_text+="\
   \" alt=\"";
   tmp_text+=course_name;
   tmp_text+="\" style=\"width:100%\" class=\"w3-hover-opacity\">\
	<div class=\"w3-container w3-white\"><p><b>";
	tmp_text+="<a href=\"javascript:load_content(";
	tmp_text+=course_id;
        //tmp_text+="blog.html?CourseID="+course_id;
    tmp_text+=")\"";
	tmp_text+="		class=\"image\">";
	tmp_text+=course_name;
	tmp_text+="</a></b></p></div></div>";
  return tmp_text;
      
}

var load_content = function(fileid){
	$('.posts').html('');
  if(typeof fileid != "undefined"){
	  $('#content').html("loading..");
	  $('#blog_title').html("");
		$.get(appBlogs,

             {
                 FileID:fileid,
                 "command":"read"
             },
           function (data) {
			   //console.log(data);
             title = data.split('$$')[0];
             content = data.split('$$')[1];
			 var html_content = "<a href=\"../edit.html?FileID="+ fileid +"&a=1\">(edit)</a>";
             html_content += md2html(content,html_content,0);
             $('#blog_title').html(title);
             $('.content').html(html_content);
           });
  }
}

var load_folder_content = function(folderid){
	if(typeof folderid != "undefined"){
		$('.posts').html("");
		$('.content').html("");
	$.get(appFiles, {
		"command":"commandGetFolderFiles",
		"FolderID":folderid
	},function(data){
		console.log(data);
		
		var blogs_set = data.split('||');
		//console.log(blogs_set);
		blogs_set.pop();
		//console.log(blogs_set);
		test = blogs_set;
		for(i in blogs_set){
			var files_fileid = blogs_set[i].split("$$")[0];
			var files_folderid = blogs_set[i].split("$$")[1];
			var files_filename = blogs_set[i].split("$$")[2];
			var folders_name = blogs_set[i].split("$$")[3];
			var files_smallimg = blogs_set[i].split("$$")[4];
			//$('.content-wrapper').prepend("<div>test</div>")
			//console.log(blogs_set[i].split("$$")[4]);
			var grid_item_text= "grid-item-blue";
			$('.posts').prepend(var2content3(files_filename, files_fileid, files_smallimg));
			//$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

		}
	});
	}
}