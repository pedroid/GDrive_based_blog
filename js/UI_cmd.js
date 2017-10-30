// JavaScript Document
$(document).ready(function(e) {
   /* Todo:
 • Merge this with Node.js, almost done
 • Webpages in a database/more editable version
 • Add cookies to track previous commands? (You can press up and down to browse previous commands this session)
*/

	var currFolderID = 1;
  var currFolder;
   var faviconnumber = 1;
   var blogs_set_under_currDir={};
   var ParentID_set_under_currDir = {};
	var directories_set_under_currDir = {};
	directories_set_under_currDir[1] = "home";
   console.clear();
   var commandlist = [ /*Can be populated with various methods*/
      ["/help", "Show commands"],
      ["/list", "List all pages on the website"],
      ["/nav &lt;location&gt;", "Navigate to location"],
	   ["/gl", "Generate a url for the current page - [^http://koya.io/](This doesn't work in an iframe, try it at *Koya.io*) outputs something like [^http://koya.io/connect](*koya.io/connect*)"],
      ["/clear", "Clear the console"],
      ["/login &lt;username&gt; &lt;password&gt;", "Login to your account - This is not set up and when implemeneted it'll be '/login username' then request password without printing into the cmd prompt"],
      ["/upload", "Upload file, must be logged in."]
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [ /*Can be populated with various methods*/
      ["index", "Welcome to Koya.io", "Simply, this is just a sandbox in which to add to; no real point - a couple of features that I plan to add though:", "URL shortner and open tracker, just enter a URL into the command line and press enter and you will get 2 links - 1 which looks like [http://koya.io/XXXXXX](http://koya.io/XXXXXX) and another [http://koya.io/u/XXXXXX](http://koya.io/u/XXXXXX) : they will both forward but the second will show a preview of the full url so they know where you are going.", "You can also save small messages with `/msg <string <160 chars>` and you will get a url like [http://koya.io/XXXXXX](http://koya.io/XXXXXX)","Pressing Ctrl+v will paste the short text or image and you will get a link.", "There will be accounts but likely given out rather than being able to register them whenever, this is a personal site so idk."],
      ["about", "About Koya.io", "Personal power website for Finn 'Koya' Shackleton.", "Will include some features which too are mainly for personal use: Link shortner, image host, pastebin and any sandbox testing", "The colours have been taken from [https://github.com/Poorchop/darktooth-theme-ports/tree/8c852e8edde8df57d831dc8631493b0565fadbbc/hexchat-darktooth](Poorchop's Darktooth HexChat theme)", "In the process of turning the website into a server sided thing, currently what you can read is in the [http://koya.io/scripts.js](JavaScript file)!"],
	  ["connect", "Connect with Koya",
	  "[mailto:_@koya.io](Email _@koya.io)",
	  "[skype:finn.shackleton](Skype)",
	  "[^http://steamcommunity.com/id/bananabutterscotchmaplepancakes](Steam) < Always available",
	  "[^https://codepen.io/OfficialAntarctica](Codepen)",
	  "[^http://everybodyedits.com/profiles/bbmp](Everybody Edits)"]
   ];
   var pageindex = ["index", "about", "connect"];
   var currentpage = "landing";
   var url = "http://koya.io/"
      /*
         Custom Text Syntax
         Links:
            [URLPATH](NAME) - regular
            [^URLPATH](NAME) - open in new tab

         Styles:
            *TEXT* - bold text
            E! - Text is an error/notification
            A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
      */

   function init() {
      setInterval(time);
      console.clear();
      //console.log(new Date().getTime());
      log("Website", "A! _____ _____ __ __ _____ ");
      log("Website", "A!|  |  |     |  |  |  _  |");
      log("Website", "A!|    -|  |  |_   _|     |");
      log("Website", "A!|__|__|_____| |_| |__|__|");
      log("Website", '[^http://koya.io/](*Koya.io*)');
      log("Website", "");
      log("Website", "E!I'm no longer using this at [^http://koya.io/](*Koya.io*)");
      log("Website", "");
	  urlvars();
      log("Client", "For help say '/help'");
	  $('#test').focus()


    $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

        {
            command:"read",
            ParentID:1
        },
      function (data) {
        //console.log(data);
        document.getElementById('test').focus();
        var tmp = data.split('||');
        tmp.pop();
        console.log(tmp[0].split(":"));
        for(var i=0;i<tmp.length;i++){
            //log("Client", tmp[i]);
            directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
            ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
        }
        //console.log(directories_set_under_currDir);
        log("Client", "get directories under /home/ [done]");

    });

   }

   function urlvars() {
	   var pagelocs = window.location.pathname.replace("/","").split("/");
	   var pageloc = pagelocs[0];
	   //console.log(pageloc);
	   //alert();
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
		}
      	log("Website", "You are currently on page: *" + currentpage + "*");
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
               loadpage($.inArray(pageloc, pageindex));
            } else {
               //Un-note next line to show 404 errors with wrong urls
               //log("Client", "404 - The page '" + pageloc + "' does not exist. To ");
            }
		}
		if(pageloc == "") {
      		log("Server", "What would you like to access?");
		}
   }
   function getParam(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec (window.location.href);
		if (results == null) {
			return "";
		}
		else  {
			return results[1];
		}
	}

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
      }
      /*
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }
      */
/*
      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }*/
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
	  /*
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
	  */
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
	  /*
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
	  *//**/
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
	var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
	  var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
	  if (temptimestring != timestring) {
		  timestring = temptimestring;
      	$(".editline .time").text(timestring);
	  }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
	    if (e.which == 13 && text == ""){
			output = "";
            log(">", output);
			//$('#input div:last()').remove()
	    }
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);

         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);
         /*Add mod commands*/
         //modcmd(commands[0], text, commands);
         /*Add mod commands*/

      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down

         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "/help":
         case "help":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + " : " + commandlist[i][1];
               //console.log(command[i][0]);
               log("Client", output);
            }
            break;
         case "clear":
            $(".stream").text("");
            break;
         case "/nav":
            if ($.inArray(word[1], pageindex) >= 0) {
               currentpage = word[1];
               log("Website", "You are now in " + currentpage);
               loadpage($.inArray(word[1], pageindex));
            } else {
               log("Client", "'" + word[1] + "' does not exist.");
            }
            break;
		 case "rm":

             if(word.length == 2 & typeof blogs_set_under_currDir[word[1]]== "undefined"){
                 log("Client", "["+ word[1] +"] is not a file or no such file in this directory.");
             }else{
               if(word[1]=="-r" || word[1] == "-rf"){
                if(typeof directories_set_under_currDir[word[2]] == "undefined"){
                  log("Client", "(" + word[2] + ") no such directory in this folder.");
                }else{

                 $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

                     {
                         command:"delete",
                         FolderID:word[2],
                         ParentID:currFolderID,
                     },function (data) {
                             console.log(data);
                             $('.editline').show()
                             document.getElementById('test').focus();
                             var tmp = data.split('||');
                             tmp.pop();
                             directories_set_under_currDir = {};
                             ParentID_set_under_currDir = {};
                             for(var i=0;i<tmp.length;i++){
                                 directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
                                 ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
                             }
                   });
                }


               }else{
                     $.get("https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec", {
                     "number": word[1],
                     "tab":"Files",
                     "command":"delete"
                             },
                             function (data) {

                             });
                }
             }

			break;
		 case "chmod":
            $.get("https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec", {
						"number": word[2],
						"tab":"Files",
						"command":"chmod",
						"argument":word[1]
                    },
                    function (data) {

                    });
			break;
		 case "blog":
			var tmpFolderID=1;
			var tmpOwnerID=1;
			$(location).attr('href', 'blog.html?FileID='+word[1]+'&FolderID='+tmpFolderID+'&OwnerID='+tmpOwnerID);
			break;
		 case "pwd":

			//console.log(directories_set_under_currDir);
//			log("Client", directories_set_under_currDir[currFolderID]+'/');
      if(currFolderID == 1){
          log("Client", "/home/");
      }else{
            $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

                {
                    command:"getFolderName",
                    FolderID:currFolderID
                },function (data) {
                  log("Client", data);

              });
  }
			break;
     case "mkdir":
     if(typeof word[1] == "undefined"){
      log("Client", "usage: mkdir directory");
     }else{
     $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

         {
             command:"write",
             ParentID:currFolderID,
             FolderName:word[1]
         },function (data) {
           console.log(data);
           $('.editline').show()
           document.getElementById('test').focus();
           var tmp = data.split('||');
           tmp.pop();
           directories_set_under_currDir = {};
           ParentID_set_under_currDir = {};
           for(var i=0;i<tmp.length;i++){
               //log("Client", tmp[i]);
               directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
               ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
           }
           //console.log(directories_set_under_currDir);
           //log("Client", "get directories under /home/ [done]");

       });


   }
     break;
     case "cd":
      $('.editline').hide()
      if(typeof word[1] == "undefined"){
        currFolderID = 1;
        currFolder = "home";
      }else if (word[1] == "~"){
        currFolderID = 1;
        currFolder = "home";
        $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

            {
                command:"read",
                ParentID:currFolderID
            },
          function (data) {
            console.log(data);
            $('.editline').show()
            document.getElementById('test').focus();
            var tmp = data.split('||');
            tmp.pop();

            directories_set_under_currDir = {};
            ParentID_set_under_currDir = {};
            for(var i=0;i<tmp.length;i++){
                //log("Client", tmp[i]);
                directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
                ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
            }
            console.log(directories_set_under_currDir);
            //log("Client", "get directories under /home/ [done]");

        });
        blogs_set_under_currDir = {};
        $.get("https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec",

					{
							tab:"Files",
							FolderID:currFolderID
					},
				function (data) {
					$('.editline').show()
					document.getElementById('test').focus();
					var tmp = data.split('||');
					tmp.pop();

          //console.log(directories_set_under_currDir);
          if(typeof word[1] == "undefined"){

            for(var i=0;i<Object.keys(directories_set_under_currDir).length;i++){
                log("Client", '('+ Object.keys(directories_set_under_currDir)[i] +') '+directories_set_under_currDir[Object.keys(directories_set_under_currDir)[i]]+'/');

             }
          }

          for(var i=0;i<tmp.length;i++){
              var FileID = tmp[i].split(':')[0];
              var Authen = tmp[i].split(':')[1];
              var Filename = tmp[i].split(':')[2];
              blogs_set_under_currDir[FileID] = Filename;
              //log("Client", '['+FileID+'] '+Authen+' '+Filename);
          }
					//console.log("the result is :"+data);
					//$('#GDrive_content').html(data);
				});
      }else if(word[1] == ".." || word[1] == "../"){
        console.log('before:'+currFolderID);
        if(currFolderID == 1){

        }else{
          currFolderID = ParentID_set_under_currDir[currFolderID];
          console.log(currFolderID);
        }
        console.log(ParentID_set_under_currDir);
        console.log('after:'+currFolderID);
        $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

            {
                command:"read",
                ParentID:currFolderID
            },
          function (data) {
            console.log(data);
            $('.editline').show()
            document.getElementById('test').focus();
            var tmp = data.split('||');
            tmp.pop();
            directories_set_under_currDir = {};
            for(var i=0;i<tmp.length;i++){
                //log("Client", tmp[i]);
                directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
                ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
            }
            console.log(directories_set_under_currDir);
            //log("Client", "get directories under /home/ [done]");

        });
      }else{
        console.log(directories_set_under_currDir);
        if(typeof directories_set_under_currDir[word[1]]== "undefined"){
          log("Client", "no such directory in this folder");
          $('.editline').show()
        }else{
            currFolderID = word[1];
            console.log(currFolderID);

            $.get("https://script.google.com/macros/s/AKfycbyH1kJBvD1jZ4HaHNUnZm-nQKvDkH_RLv_8JNbd9aL5Rxh3FBg/exec",

                {
                    command:"read",
                    ParentID:currFolderID
                },
              function (data) {
                console.log(data);
                $('.editline').show()
                document.getElementById('test').focus();
                var tmp = data.split('||');
                tmp.pop();
                directories_set_under_currDir = {};
                for(var i=0;i<tmp.length;i++){
                    //log("Client", tmp[i]);
                    directories_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[1];
                    ParentID_set_under_currDir[tmp[i].split(":")[0]] = tmp[i].split(":")[2];
                }
                console.log(directories_set_under_currDir);
                //log("Client", "get directories under /home/ [done]");

                });
          }
      }
      break;
		 case "ls":
         case "/list":

				$('.editline').hide()
				//console.log(word[1]);
				var FileIDInput;
				if(typeof word[1] == "undefined"){
					FileIDInput = currFolderID;
				}else{
					FileIDInput = word[1];
				}
        //console.log(directories_set_under_currDir);
				$.get("https://script.google.com/macros/s/AKfycbyKzP6PVt8N7Z0lWbxzUk-DS2z2wtz4xRZGKpRRkOKLmsLWiUPK/exec",

					{
							tab:"Files",
							FolderID:FileIDInput
					},
				function (data) {
					$('.editline').show()
					document.getElementById('test').focus();
					var tmp = data.split('||');
					tmp.pop();

          //console.log(directories_set_under_currDir);
          if(typeof word[1] == "undefined"){

            for(var i=0;i<Object.keys(directories_set_under_currDir).length;i++){
                log("Client", '('+ Object.keys(directories_set_under_currDir)[i] +') '+directories_set_under_currDir[Object.keys(directories_set_under_currDir)[i]]+'/');

             }
          }
          blogs_set_under_currDir = {};
          for(var i=0;i<tmp.length;i++){
              var FileID = tmp[i].split(':')[0];
              var Authen = tmp[i].split(':')[1];
              var Filename = tmp[i].split(':')[2];
              blogs_set_under_currDir[FileID] = Filename;
              log("Client", '['+FileID+'] '+Authen+' '+Filename);
          }
					//console.log("the result is :"+data);
					//$('#GDrive_content').html(data);
				});

            break;
		 case "cat":
					$('.editline').hide()
					$.get("https://script.google.com/macros/s/AKfycbwlmoiBY_Ip2lt5QICMmOhOnX_dCrAo4_YMsOLk3hmx5M-kihAT/exec",

							{
									FileID:word[1],
									"command":"read",
							},
						function (data) {
							console.log("the result is :"+data);
							$('.editline').show()
							document.getElementById('test').focus();
							title = data.split(':')[0];

							content = data.split(':');
							//var mode = content.pop();
							content.shift();
							console.log(content.join());
							log("Client", content.join());
							//$('#text-input').val(content.join());
							//$('#text-input')[0].editor.update()
							//$('#titleInput').val(title);
						});
			break;
		 case "edit":
			console.log(word[1]);
			var tmpFolderID=1;
			var tmpOwnerID=1;
      console.log(blogs_set_under_currDir);
      if(typeof blogs_set_under_currDir[word[1]]== "undefined"){
          log("Client", "["+ word[1] +"] is not a file or no such file.");
      }else{
			     $(location).attr('href', 'edit.html?FileID='+word[1]+'&FolderID='+tmpFolderID+'&OwnerID='+tmpOwnerID);
      }
      break;
		case "touch":
    console.log("folderID:"+currFolderID);
			$.get("https://script.google.com/macros/s/AKfycby8FMMIJQkm0lAqUzyP_epJiw1dP3JMZ8VdiTGHckpfEVpecs-N/exec", {
							"filename": word[1],
              "FolderID":currFolderID,
              "command":"new"

						},
						function (data) {
							$('#feedback').html(data)
						}
				);
				$('#submit_button').val('update')
			break;
		case "test":

		break;
		case "new":
			//console.log(word[1]);
			var tmpFolderID=1;
			var tmpOwnerID=1;
			$(location).attr('href', 'new.html?FileName='+word[1]+'&FolderID='+tmpFolderID+'&OwnerID='+tmpOwnerID);
			break;
         case "/login":
            if (word.length >= 3) {
               log("Client", "Attempting to login to " + word[1] + " with " + Array(word[2].length + 1).join("â€¢"));
               loginreturn = false;
               //log("Client", "ER1");
               setTimeout(loginemptyreturn, 20000);
            } else {
               log("Client", "Not enough arguments to log in, you need a USERNAME and a PASSWORD.");
            }
            break;
         default:
            output = "Unrecognised command '" + word[0] + "'.";
            log("Client", output);
      }
   }

   function loadpage(i) {
      $.each(pages[i], function(id, content) {
         if (content != pageindex[i]) {
            log("Website", content);
         }
      });
   }
   var loginreturn = false;

   function loginemptyreturn() {
      //log("Client", "ER2");
      if (!loginreturn) {
         log("Client", "E![LOGIN] No Return Recieved");
      }
   }
   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});
