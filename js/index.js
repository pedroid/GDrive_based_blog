$(function() {
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
    //console.log(firebase);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            showinfo();
            console.log('hi,' + firebaseUser.email);

            //load(firebaseUser.uid);
            //console.log('hi,'+firebaseUser.getDisplayName());
        } else {
            hideinfo();
            console.log('not logged in');

        }
    });

    if (window.location.search) {
        text_argument_set = window.location.search.split("?")[1].split('&');
        arg_set = {};
        text_argument_set.forEach(item => {
            arg_set[item.split('=')[0]] = item.split('=')[1];

        })


        if (arg_set["FileID"]) {
            currFileID = parseInt(arg_set["FileID"]);
						$('.w3-dropdown-content').append('<a href=\"presentation.html?FileID='+currFileID+'\" class=\"w3-bar-item w3-button\">presentation</a>')
						$('.w3-dropdown-content').append('<a href=\"book.html?FileID='+currFileID+'\" class=\"w3-bar-item w3-button\">book</a>')

            load_content(currFileID);
        }
        if (arg_set["FolderID"]) {
            currFolderID = parseInt(arg_set["FolderID"]);
            load_folder_content(currFolderID);
        }
    } else {

        $.get(appFiles, {
            "command": "commandGetPublicBlogs"

        }, function(data) {
            //console.log(data);
            $('.content').html("");
            var blogs_set = data.split('||');
            //console.log(blogs_set);
            blogs_set.pop();
            //console.log(blogs_set);
            test = blogs_set;
            for (i in blogs_set) {
                var files_fileid = blogs_set[i].split("$$")[0];
                var files_folderid = blogs_set[i].split("$$")[1];
                var files_filename = blogs_set[i].split("$$")[2];
                var folders_name = blogs_set[i].split("$$")[3];
                var files_smallimg = blogs_set[i].split("$$")[4];
                //$('.content-wrapper').prepend("<div>test</div>")
                //console.log(blogs_set[i].split("$$")[4]);
                var grid_item_text = "grid-item-blue";
                $('.posts').prepend(var2content3(files_filename, files_fileid, files_smallimg));

                //$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
                //$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

            }
        });

    } // end of else


});

var showinfo = function() {
    console.log("show info");
    $(".login").css("display", "inline");
}
var hideinfo = function() {
    console.log("hide info");
    $(".login").css("display", "none");
}

var hh = [];
var pwd = function(input) {

    hh.push(input);
    if (hh.length < 5) {
        console.log(hh);
    } else {

        console.log(hh);
        if (hh[0] == 1 & hh[1] == 2 & hh[2] == 3 & hh[3] == 4 & hh[4] == 5) {
            window.location = "admin.html";
        }
        hh.shift();
    }
}
var var2content3 = function(course_name, course_id, course_icon) {
    var tmp_text = "";
    tmp_text += "<div class=\"w3-container w3-margin-bottom\">";
    if(course_icon){
      tmp_text += "<div class=\"w3-row-padding\">";
      tmp_text += "<a href=\"index.html?FileID=";
      tmp_text += course_id;
      //tmp_text+="blog.html?CourseID="+course_id;
      tmp_text += "\"";
      tmp_text += "		class=\"image\">";
      tmp_text += course_name;
      tmp_text += "</a></b></p></div>"

      tmp_text += "<div class=\"w3-row-padding\">"
      tmp_text += "<div class=\"w3-third w3-col\">";
      //var tmp_text = "<div class=\"w3-third w3-container w3-margin-bottom\">";
      tmp_text += "<img src=\"";
      tmp_text += course_icon;
      tmp_text += "\
      \" alt=\"";
      tmp_text += course_name;
      tmp_text += "\" style=\"width:100%\" class=\"w3-hover-opacity\"></div>";

      tmp_text +="<div class=\"w3-twothird w3-col\"><p><b>";
      //tmp_text+="<a href=\"javascript:load_content(";
      tmp_text += "<a href=\"index.html?FileID=";
      tmp_text += course_id;
      //tmp_text+="blog.html?CourseID="+course_id;
      tmp_text += "\"";
      tmp_text += "		class=\"image\">";
      tmp_text += course_name;
      tmp_text += "</a></b></p></div></div>"
    }else{
      tmp_text += "<div class=\"w3-row-padding\">";
      tmp_text += "<a href=\"index.html?FileID=";
      tmp_text += course_id;
      //tmp_text+="blog.html?CourseID="+course_id;
      tmp_text += "\"";
      tmp_text += "		class=\"image\">";
      tmp_text += course_name;
      tmp_text += "</a></b></p></div>"
      tmp_text += "<div class=\"w3-row-padding\">"
      tmp_text +="<div class=\"w3-twothird w3-col\"><p><b>";
      //tmp_text+="<a href=\"javascript:load_content(";
      tmp_text += "<a href=\"index.html?FileID=";
      tmp_text += course_id;
      //tmp_text+="blog.html?CourseID="+course_id;
      tmp_text += "\"";
      tmp_text += "		class=\"image\">";
      tmp_text += course_name;
      tmp_text += "</a></b></p></div></div>"
    }
    tmp_text +="</div>";


    return tmp_text;

}

var load_content = function(fileid) {
    $('.posts').html('');
    if (typeof fileid != "undefined") {
        $('.content').html("loading..");
        $('#blog_title').html("");
        $.get(appBlogs,

            {
                FileID: fileid,
                "command": "read"
            },
            function(data) {
                //console.log(data);
								$('.content').html("");
                title = data.split('$$')[0];
                content = data.split('$$')[1];
                var html_content = "<a class=\"login\" target=\"__blank\" href=\"edit.html?FileID=" + fileid + "&a=1\">(edit)</a>";
                //html_content += md2html(content,html_content,0);

                [mdppSet, DivSet] = mdpp2DivSet(content);

                DivSet2StaticDisplay(mdppSet, DivSet, $('.content'));
                for (var i = 0; i < mdppSet.length; i++) {
                    DynamicDisplay(mdppSet, DivSet, i);
                }

                $('#blog_title').html(title);
                //$('.content').html(html_content);
                console.log('test');
								$('img').width('70%');
            }

        );
    }
}

var load_folder_content = function(folderid) {
    if (typeof folderid != "undefined") {
        $('.posts').html("");
        $('.content').html("");
        $.get(appFiles, {
            "command": "commandGetFolderFiles",
            "FolderID": folderid
        }, function(data) {
            console.log(data);

            var blogs_set = data.split('||');
            //console.log(blogs_set);
            blogs_set.pop();
            //console.log(blogs_set);
            test = blogs_set;
            for (i in blogs_set) {
                var files_fileid = blogs_set[i].split("$$")[0];
                var files_folderid = blogs_set[i].split("$$")[1];
                var files_filename = blogs_set[i].split("$$")[2];
                var folders_name = blogs_set[i].split("$$")[3];
                var files_smallimg = blogs_set[i].split("$$")[4];
                //$('.content-wrapper').prepend("<div>test</div>")
                //console.log(blogs_set[i].split("$$")[4]);
                var grid_item_text = "grid-item-blue";
                $('.posts').prepend(var2content3(files_filename, files_fileid, files_smallimg));
                //$('#LatestArticle').prepend("<a target=\"_blank\"href=\"blog.html?FileID="+files_fileid+"&FolderID="+files_folderid+"\"><div class=\"grid-item "+folders_name+"\ "+grid_item_text+"\"><div class=\"thumb-title\"><img src=\""+files_smallimg+"\"/></div><div class=\"description\"><div class=\"item-tags\"><div class=\"tag\">"+folders_name+"</div></div><div class=\"item-title\">"+files_filename+"</div></div></div></a>")
                //$('.content-wrapper').prepend("<div class=\"grid-item teaching_plan\"><div class=\"description\"><div class=\"item-title\"><a href="">"+blogs_set[i].split('$$')[0]+"</div><div class=\"item-tags\"><div class=\"tag\">"+blogs_set[i].split('$$')[1]+"</div></div></div></div>")

            }
        });
    }
}
