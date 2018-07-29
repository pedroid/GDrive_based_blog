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
  tmp_text+="<img src=\"data:image/jpeg;base64,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\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">"
  
  tmp_text+="\
	<div class=\"w3-container w3-white\"><p><b>";
	tmp_text+="<a href=\"";
        tmp_text+="course.html?CourseID="+course_id;
        tmp_text+="\" class=\"image\">";
	tmp_text+=course_name;
	tmp_text+="</a></b></p>";
	tmp_text+="<p>";
	tmp_text+=course_name;
	tmp_text+="</p>";
	tmp_text+="</div></div>";
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
