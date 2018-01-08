var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";
var ListAllBlog = "https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec";
var appFolders = "https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec";
function edit(){
    $(location).attr('href', 'edit.html'+window.location.search);
};


$(document).ready(function(){
$('#diagram').hide();
$('#content').html("loading...");
var number_tmp = window.location.search.split("?")[1].split('&')[0].split("=")[1];
        // console.log(number_tmp);
         $.get(appBlogs,

             {
                 FileID:number_tmp,
                 "command":"read"
             },
           function (data) {
          //   console.log("the result is :"+data);
             title = data.split('$$')[0];
             content = data.split('$$')[1];
             var html_content = md2html(content);
          //   console.log(html_content);
             $('#blog_title').html(title);
             $('#content').html(html_content);
           });
});
