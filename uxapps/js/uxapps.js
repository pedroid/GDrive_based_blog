var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";
var ListAllBlog = "https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec";
var appFolders = "https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec";
var appCourses = "https://script.google.com/macros/s/AKfycbwfrQ3eHLKBaOHf_2bQQLURDbbf9lQ9UKaSJYxq-4oHm0-zSdax/exec";
function edit(){
    $(location).attr('href', 'edit.html'+window.location.search);
};

$(document).ready(function(){

           $.get(appFiles,

               {
                   "command":"commandGetUXAPPCourses"
               },
             function (data) {
               console.log(data);
               var courses_text = data;
               var courses_set = courses_text.split('||');
               courses_set.pop();
               for(course_id in courses_set){
                 var course = courses_set[course_id];
                 console.log(course);
                 var course_id = course.split('$$')[0];
                var course_name = course.split('$$')[1];
                 var course_icon = course.split('$$')[2];
                 console.log(course_icon);

                 $('.posts').append(var2content3(course_name, course_id, course_icon));
               }
           }
             );

});
var var2content3 = function(course_name, course_id, course_icon){
  var tmp_text = "<div class=\"w3-third w3-container w3-margin-bottom\">";
  tmp_text+="\
	<div class=\"w3-container w3-white\"><p><b>";
	tmp_text+="<a href=\"";
        tmp_text+="course.html?CourseID="+course_id;
        tmp_text+="\" class=\"image\">";
	tmp_text+=course_name;
	tmp_text+="</a></b></p></div></div>";
  return tmp_text;
      
}
var var2content2 = function(course_name, course_id, course_icon){
  var tmp_text = "\
      <article>\
        <a href=\"";
        tmp_text+="course.html?CourseID="+course_id;
        tmp_text+="\" class=\"image\"><img src=\"a";
        tmp_text+= course_icon;
        tmp_text+="\"  /></a>\
        <h3>";
        tmp_text+=course_name;
        tmp_text+="</h3>\
        <ul class=\"actions\">\
          <li><a href=\"#\" class=\"button\">More</a></li>\
        </ul>\
      </article>";
  return tmp_text;
}
var var2content = function(course_name, course_id, course_icon){
	var tmp_text = "<div class=\'col-xs-12 col-sm-6 col-md-4\'>\
	<a href=\"";
			tmp_text+="course.html?CourseID="+course_id;
			tmp_text+="\" data-role=\"course-box-link\ \" target=\"__blank\">\
	<div class=\'course-listing\' >\
		<div class=\'row\'>\
			\
				<div class=\'col-lg-12\'>\
					<div class=\'course-box-image-container\'>\
						<img class=\'course-box-image\' src=\'";
						tmp_text+=course_icon;
						tmp_text+="\' role=\"presentation\">\
					</div>\
					<div class=\'course-listing-title\'>";
					tmp_text+=course_name
					tmp_text+="</div>\
					<div class=\'col-xs-12 hidden\'>\
						<div class=\'progressbar\'>\
						<div class=\'progressbar-fill\'></div>\
					</div>\
          </div>\
          <div class=\'course-listing-subtitle\'>";


          tmp_text+="</div>\
        </div>\
      \
    </div>\
    <div class=\'course-listing-extra-info col-xs-12\'>\
      <div class=\'pull-left\'>\
        <div class=\'small course-author-name\'>\
          \
        </div>\
        \
      </div>\
      \
\
    </div></div></a></div>\
";
return tmp_text;
}
