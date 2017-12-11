var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";

$(function(){
	console.log('test');
	prettyPrint();
	$.get(appFiles, {
		"command":"commandGetBlogs"
		
	},function(data){
		//console.log(data);
		var blogs_set = data.split('||');
		blogs_set.pop();
		//console.log(blogs_set);
		test = blogs_set;
		for(i in blogs_set){
			//$('.content-wrapper').prepend("<div>test</div>")
			$('#LatestArticle').prepend("<div class=\"grid-item "+blogs_set[i].split("$$")[3]+"\ grid-item-blue\"><div class=\"description\"><div class=\"item-title\"><a target=\"_blank\"href=\"blog.html?FileID="+blogs_set[i].split("$$")[0]+"&FolderID="+blogs_set[i].split("$$")[1]+"\">"+blogs_set[i].split("$$")[2]+"</a></div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split("$$")[3]+"</div></div></div></div>")
			//$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")
			
		}
	});
				
		
});