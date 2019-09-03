var appFiles = "https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec";
var appBlogs = "https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec";
var ListAllBlog = "https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec";
var appFolders = "https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec";
var appCourses = "https://script.google.com/macros/s/AKfycbwfrQ3eHLKBaOHf_2bQQLURDbbf9lQ9UKaSJYxq-4oHm0-zSdax/exec";
function edit(){
    $(location).attr('href', 'edit.html'+window.location.search);
};

$(document).ready(function(){
$('#diagram').hide();
var course_id = window.location.search.split("?")[1].split("=")[1];
         //console.log(course_id);

           $.get(appBlogs,{
              "command":"read",
              "FileID":course_id,
           },function(data){
             //console.log(data);
             var CourseName = data.split('$$')[0];
             $('.w3-text-teal').html(CourseName);
             var item_set = data.split('$$')[1].split('\n');
             for(i in item_set){
                var item = item_set[i];
                switch(item.split('#').length){
                  case 3://lecture
                    var lecture_name_set = item.split('#')[2];
                    var lecture_name;
                    var lecture_link;
                    var lecture_fileid;
                    //console.log(lecture_name_set);
                    if(lecture_name_set.split('()').length>1){
                      lecture_name_tmp = lecture_name_set.split('(')[0];
                      lecture_name = lecture_name_tmp.substring(1,lecture_name_tmp.length-1);
                      lecture_link = '';
                      lecture_fileid = '';
                    }
                    else if(lecture_name_set.split(')').length>1){
                      lecture_name_tmp = lecture_name_set.split('(')[0];
                      lecture_name = lecture_name_tmp.substring(1,lecture_name_tmp.length-1);
                      lecture_link_tmp = lecture_name_set.split(']')[1];
                      lecture_link = lecture_link_tmp.substring(1,lecture_link_tmp.length-1);
                      lecture_fileid = lecture_link.split('?')[1].split('&')[0].split('=')[1];
                      //console.log(lecture_fildid);
                    }else{
                      lecture_name = lecture_name_set;
                    }
                    //console.log(lecture_link);
                    //$('.col-sm-12').append(lecture2html(lecture_name, lecture_fileid));
                    $('#menu').append(lecture2html_v3(lecture_name, lecture_fileid));
                    break;
                  case 2://section
                    var section_name = item.split('#')[1];
                    //$('.col-sm-12').append(section2html(section_name));
                    $('#menu').append(section2html_v3(section_name));
                    break;
                  default:
                }

             }



           });
           /*
           $.get(appCourses,

               {
                   CourseID:course_id,
                   "command":"commandGetCourseInfo"
               },
             function (data) {
               //console.log("the result is :"+data);

               var CourseInfoSet = data.split('||');
               var CourseName = CourseInfoSet.shift();
               CourseInfoSet.pop();
               var article_set=[];
               for(i in CourseInfoSet){
                 article_set.push({
                  name:CourseInfoSet[i].split('$$')[0],
                  type:CourseInfoSet[i].split('$$')[1],
                })
               }
               console.log(article_set);
               //title = data.split('$$')[0];
               	     $('#courseSidebar h2').html(CourseName);
                     for(i in article_set){
                       switch(article_set[i].type){
                          case "section":
                              $('.col-sm-12').append(section2html(article_set[i].name));
                              break;
                          case "lecture":
                              $('.col-sm-12').append(lecture2html(article_set[i].name));
                              break;
                            }
                     }

  	           //$('#blog_title').html(title);
               //content = data.split('$$')[1];
               //var html_content = md2html(content,html_content);
               //   console.log(html_content);
               //$('#content').html(html_content);
             });
             */
});
var section2html_v3 = function(section_name){
  var content = "";
  content+="<h4 class=\"w3-bar-item\"><b>";
  content+=section_name;
  content+="</b></h4>"
return content;
}
var lecture2html_v3 = function(lecture_name, lecture_id){
  var content = "";
  content+="<a  class=\"w3-bar-item w3-button\" href=\'javascript:load_content(";
  content+=lecture_id;
  content+=")\'>";
  content+=lecture_name;
  content+="</a>"
return content;
}
var section2html_v2 = function(section_name){
  var content = "";
  content+="<li><i><b>";
  content+=section_name;
  content+="</b></i></li>"
return content;
}
var lecture2html_v2 = function(lecture_name, lecture_id){
  var content = "";
  content+="<li><a href=\'javascript:load_content(";
  content+=lecture_id;
  content+=")\'>";
  content+=lecture_name;
  content+="</a></li>"
return content;
}
var section2html = function(section_name){
  var content = "";
  content+="<div class=\'section-title'>\
        <span class=\"section-lock\">\
          <i class=\"fa fa-lock\"></i>&nbsp;\
        </span>";
  content+=section_name;
  content+="    </div>\
";
return content;
}
var lecture2html = function(lecture_name, lecture_id){
  var content = "";
  content+="<ul class=\'section-list\'>\
        <li class=\'section-item incomplete\'>\
          <a href=\'javascript:load_content(";
          content+=lecture_id;
          content+=")\' class='item' data-no-turbolink=\'true\'>\
            <span class=\'status-container\'>\
              <span class=\'status-icon\'>&nbsp;</span>\
            </span>\
            <div class=\'title-container\'>\
              <span class=\'lecture-name\'>";
              content+=lecture_name;
              content+="</span>\
            </div>\
          </a>\
        </li>\
      </ul>\
";
return content;
}

var load_content = function(fileid){

  if(typeof fileid != "undefined"){
	  $('.content').html("loading..");
	  $('#blog_title').html("");
		$.get(appBlogs,

             {
                 FileID:fileid,
                 "command":"read"
             },
           function (data) {
             $('.content').html("");
			   //console.log(data);
             title = data.split('$$')[0];
             content = data.split('$$')[1];
			 var html_content = "<a href=\"../edit.html?FileID="+ fileid +"&a=1\">(edit)</a>";
             //html_content += md2html(content,html_content,0);
             console.log(content);
             [mdppSet, DivSet] = mdpp2ListDiv(content);

						 ListDiv2StaticDisplay(mdppSet, DivSet, $('.content'));
						 for (var i = 0; i < mdppSet.length; i++) {
						 		DynamicDisplay(mdppSet, DivSet, i);
						 }
             $('#blog_title').html(title);
  //           $('.content').html(html_content);
           });
  }
}

var toEdit = function(){
	var course_id = window.location.search.split("?")[1].split("=")[1];
	//window.location.replace("../edit.html?FileID="+course_id);
  window.open("../edit.html?FileID="+course_id);
}
