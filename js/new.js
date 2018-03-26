
var has_submitted = false;
var uid;
$(document).ready(function(e) {

    //firebase
    var config = {
        apiKey: "AIzaSyAtI63y6oM7PO4p0U2AEMsXrhScPYeC3GA",
        authDomain: "uxapi-74e8b.firebaseapp.com",
        databaseURL: "https://uxapi-74e8b.firebaseio.com",
        projectId: "uxapi-74e8b",
        storageBucket: "",
        messagingSenderId: "1051481601400"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('hi,' + firebaseUser.email);
            uid = firebaseUser.uid;

        } else {
            console.log('not logged in');
            window.location = "login.html";
        }
    });

    //end of firebase


    var converter = new showdown.Converter();
    converter.setOption('tables', true);
    converter.setOption('tasklists', true);


    new Editor($$("text-input"), $$("preview"));

    if (window.location.search) {
        text_argument_set = window.location.search.split("?")[1].split('&');
        arg_set = {};
        text_argument_set.forEach(item => {
            arg_set[item.split('=')[0]] = item.split('=')[1];

        })

        if (arg_set["FileName"]) {
            currFileName = arg_set["FileName"];
            $('#titleInput').val(currFileName);
        }

        if (arg_set["FolderID"]) {
            currFolderID = arg_set["FolderID"];
            $('#folder_selection select').val(currFolderID);
        }

        /*
      var filename_tmp = window.location.search.split("?")[1].split('&')[0].split("=")[1];
      var FolderID = parseInt(window.location.search.split("?")[1].split('&')[1].split("=")[1]);
      $('#folder_selection select').val(FolderID);
      $('#titleInput').val(filename_tmp);
	  */
    }
});
$('#text-input').focus()

var currFileID;

function SendScore() {
    if (!has_submitted) {
        console.log('submit!');
        var mode;
        if ($("#is_publicInput").prop("checked")) {
            mode = "777"
        } else {
            mode = "000"
        }
        //var FolderID = window.location.search.split("?")[1].split('&')[1].split("=")[1];
        var FolderID = parseInt($('#folder_selection select').val());
        console.log(uid);
        //console.log(FolderID);
        $.post(appFiles, {
                "command": "blog_new",
                "filename": document.getElementById("titleInput").value,
                "content": document.getElementById("text-input").value,
                "FolderID": FolderID,
                "is_public": parseInt($('#is_public_id').val()),
                "is_draft": parseInt($('#is_draft_id').val()),
                "uid": uid
            },
            function(data) {
                currFileID = parseInt(data);
                //console.log(data);
                if (currFileID > 0) {
                    $('#feedback').html('done');
                }
                //    document.write("--------------------------");
                //   document.write("Result = "+data);
                //   document.write("--------------------------");
            });
        $('#submit_button').val('update')
        $('#submit_button2').val('update')
        has_submitted = true;
    } else {
        console.log(uid);
        $.post(appFiles, {

                "command": "blog_update",
                "FileID": currFileID,
                "FolderID": parseInt($('#folder_selection select').val()),
                "filename": document.getElementById("titleInput").value,
                "content": document.getElementById("text-input").value,
                "is_public": parseInt($('#is_public_id').val()),
                "is_draft": parseInt($('#is_draft_id').val()),
                "uid": uid
            },
            function(data) {
                if (data == "true") {
                    $('#feedback').html('done')
                }
                //console.log(data);

                //$('#feedback').html(data)
                //    document.write("--------------------------");
                //   document.write("Result = "+data);
                //   document.write("--------------------------");
            });
    }
}

function Editor(input, preview) {
    this.update = function() {
        preview.innerHTML = "";
        content = input.value;
        var html_content = md2html(content);
        [mdppSet, DivSet] = mdpp2DivSet(content);

        DivSet2StaticDisplay(mdppSet, DivSet, $('#preview'));
        for (var i = 0; i < mdppSet.length; i++) {
            DynamicDisplay(mdppSet, DivSet, i);
        }
        //$('#preview').html(html_content);
        var preview_height = $('#preview').height();
        if (preview_height < 500) preview_height = 500;

        $('.AutoHeight').height(preview_height);
    };
    input.editor = this;
    //	$("#text-input").height($("#preview").height());
    //	input.height(preview.height());
    this.update();
}
var $$ = function(id) {
    return document.getElementById(id);
};
