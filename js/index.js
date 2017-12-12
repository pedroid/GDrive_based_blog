var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";

$(function(){
	console.log('test');
	prettyPrint();
	$.get(appFiles, {
		"command":"commandGetPublicBlogs"
		
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
			//$('.content-wrapper').prepend("<div>test</div>")
			//console.log(blogs_set[i].split("$$")[4]);
			var grid_item_text= "grid-item-blue";
			$('#LatestArticle').prepend("<div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"description\"><div class=\"item-title\"><a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\">"+files_filename+"</a></div><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div></div></div></div>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")
			
		}
	});
				
		
});
