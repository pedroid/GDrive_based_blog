var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";

$(function(){
	prettyPrint();
	$.get(appFiles, {
		"command":"commandGetUxApps"

	},function(data){
		//console.log(data);
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
			var grid_item_course= "grid-item-red";
			if(files_folderid == 24){
				$('#LatestArticle').prepend("<a target=\"_blank\"href=\"course/course.html?FileID="+files_fileid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_course+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
			}else{
				$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
			}

		}
	});


});
var hh=[];
var pwd = function(input){
	
	hh.push(input);	
	if(hh.length < 5){
		//console.log(hh);
	}else{
		
		console.log(hh);
		if(hh[0]==1 & hh[1]==2 & hh[2]==3 & hh[3] == 4 & hh[4] == 5){
			window.location = "admin.html";
		}
		hh.shift();
	}
}
