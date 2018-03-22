function md2html(input_content) {


      preview = "";
      //content = input.value;
      content = input_content;
      //console.log(content);
      [preprocessed_content, parse_result, StringSet] = html_preprocessing(content);
      debug = StringSet;
      for(var i=0;i<StringSet.length;i++){
      switch(StringSet[i].property){
        case "markdown_input":{
          //console.log("markdown_input");
      //					console.log(StringSet[i].data);
          var html_results = markdown.toHTML(StringSet[i].data);
          preview += html_results;
          break;
        }
        case "system_cmd":{
          //console.log("system_cmd");
          break;
        }
        case "html":{
          //console.log("html");
      //					console.log(StringSet[i].data);
          preview += StringSet[i].data;

          break;
        }
        case "u2b":{
          preview += StringSet[i].data;
          break;
        }
        case "ref":{

          var tag_test = false;
          $.get(appBlogs,

                   {
                       FileID:76,
                       "command":"read"
                   },function (data) {
                     preview += data;
                    
                   });

          break;
        }
        case "ls":{
          preview += "[system message] syntax: ls [type]  : show all resources with specific type.<br/>"
          preview += StringSet[i].data;
          preview += "<br/>"
          break;
        }
        case "data2div":{
          preview += StringSet[i].data;
          break;

        }
		case "image":{
			preview += StringSet[i].data;
			break;
		}
        case "flowchart":{
					console.log(StringSet[i].data);
					tmp = StringSet[i].data;

					var diagram = flowchart.parse(tmp);

          $('#diagram').html('');
					diagram.drawSVG('diagram');

					preview += $('#diagram').html();

					break;
				}

      }
      }
      return preview;
}
var StringNode = function(data, property, description){
    this.data = data;
  	this.property = property;
		this.description = description;
}

var html_preprocessing = function(content){
	//console.log(content);
	var output = "";
	var parse_result=[];
	parse_result.publish = false;
	parse_result.code = [];
	content_array = content.split('\n');
	//console.log(content_array);
  //system_cmd
	var patt_tag = new RegExp("^!tag[ ]*");
	var patt_publish = new RegExp("^!publish[ ]*");
	//html
	var patt_html = new RegExp("^@html{[ ]*$");
	var patt_end = new RegExp("^}$");
	var patt_u2b = new RegExp("^@u2b{[ ]*$");
	var patt_flowchart = new RegExp("^@flowchart{[ ]*$");
	var patt_image = new RegExp("^@image{[ ]*$");
	var patt_sequence = new RegExp("^@sequence{[ ]*$");
	var patt_script = new RegExp("tag");
  var patt_data2div = new RegExp("^@data2div{[ ]*$");
  var patt_ref = new RegExp("^@ref{[ ]*$");
  //var patt_ls = new RegExp("^@ls{[ ]*$");
  var patt_ls = new RegExp("^@ls [a-z,1-9]*$");

	var flag_code = false;
	var flag_u2b = false;
	var flag_flowchart = false;
	var flag_sequence = false;
	var flag_image = false;
  var flag_data2div = false;
  var flag_ref = false;
  var flag_ls = false;

//n

  var dict_doc_type = {
    'markdown':0,
    'code':1,
    'u2b':2,
    'flowchart':3,
    'sequence':4,
    'image':5,
    'data2div':6,
    'ref':7,
    'ls':8
  }

  var doc_type = [];
  for(i in dict_doc_type){
    doc_type[dict_doc_type[i]] = i;
  }

  var patt = [];
  for(var i=1;i<Object.keys(doc_type).length;i++){
      patt[i] = new RegExp("^@" + doc_type[i] +"{[ ]*$");;
  }
  patt[0] = new RegExp("^}$"); // end pattern
//nn


	var tmp_html_content = "";
	var tmp_u2b_content = "";
	var tmp_flowchart_content = "";
	var tmp_sequence_content = "";
	var tmp_image_content = "";
  var tmp_data2div_content = "";
  var tmp_content = "";
  var tmp_ref_content = "";
  var tmp_ls_content="";
//n
  var reg_content = [];
  for(var i=0;i<Object.keys(doc_type).length;i++){
      tmp_content[i] = "";
  }
//nn


  var StringSet = [];
	//parse_result.code.push("");
	//console.log('1:', StringSet);
	for(id_content_array in content_array){
		each_content = content_array[id_content_array];
		//console.log(each_content);
		if(patt_tag.test(each_content)){
			var tag_content = each_content.split('!tag')[1];
			console.log('tag_content'+tag_content);
			var tag_content_array = tag_content.split(',');
			console.log('tag_content_array:'+tag_content_array);
			parse_result.tag_content_array = tag_content_array;
			StringSet.push(StringNode(tag_content_array, "system_cmd", "tag"));
			console.log(StringSet);
			continue;
		}else if(patt_publish.test(each_content)){
			parse_result.publish = true;
			var tmp = new StringNode(true, "system_cmd", "publish");
			//console.log(tmp);
			StringSet.push(tmp);
			//console.log('publish');
			continue;
		}else if(patt_html.test(each_content)){
			tmp_html_content = "";
			flag_code = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;
		}else if(patt_u2b.test(each_content)){
			tmp_u2b_content = "";
			flag_u2b = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;

		}else if(patt_image.test(each_content)){
			tmp_image_content = "";
			flag_image = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;
		}else if(patt_flowchart.test(each_content)){
			tmp_flowchart_content = "";
			flag_flowchart = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;

		}else if(patt_sequence.test(each_content)){
			tmp_sequence_content = "";
			flag_sequence = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;

		}else if(patt_ref.test(each_content)){
			tmp_ref_content = "";
			flag_ref = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;

		}else if(patt_ls.test(each_content)){
			tmp_ls_content = "";
			//flag_ls = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";

      var tmp = new StringNode(each_content.split(' ')[1],"ls","");

      StringSet.push(tmp);
			continue;

		}else if(patt_data2div.test(each_content)){
			tmp_data2div_content = "";
			flag_data2div = true;
			var tmp = new StringNode(tmp_content, "markdown_input", "");
			if(tmp_content!=""){
				StringSet.push(tmp);
			}
			tmp_content = "";
			continue;

		}else if(patt_end.test(each_content)){
			if(flag_code == true){
				parse_result.code.push(tmp_content);
				if(patt_script.test(tmp_html_content)){
					console.log('script included');
				}else{
					var tmp = new StringNode(tmp_html_content, "html", "");
					StringSet.push(tmp);
				}
				flag_code = false;
				tmp_content = "";
			}
			if(flag_u2b == true){
				var forfun = "<iframe width='600' height='450' src='";
				forfun += tmp_u2b_content;
				forfun += "'></iframe>";
				var tmp = new StringNode(forfun, "u2b", "");
				StringSet.push(tmp);
				console.log(forfun);
				flag_u2b = false;

			}
			if(flag_flowchart == true){
				var flowchart_content = "";
				flowchart_content+= tmp_flowchart_content;
				var tmp = new StringNode(flowchart_content, "flowchart", "");
				StringSet.push(tmp);
				flag_flowchart = false;

			}
			if(flag_sequence == true){
				var sequence_content = "";
				sequence_content+= tmp_sequence_content;
				var tmp = new StringNode(sequence_content, "sequence", "");
				StringSet.push(tmp);
				flag_sequence = false;

			}
			if(flag_image == true){
				var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";
				image_content+= tmp_image_content;
				image_content+="\"/>"
				var tmp = new StringNode(image_content, "image", "");
				StringSet.push(tmp);
				flag_image = false;


			}
      if(flag_ref == true){

				var ref_content = "";
				ref_content+= tmp_ref_content;

				var tmp = new StringNode(ref_content, "ref", "");
				StringSet.push(tmp);
				flag_ref = false;


			}
      if(flag_ls == true){
				var ls_content = "";
				ls_content+= tmp_ls_content;
				var tmp = new StringNode(ls_content, "ls", "");
				StringSet.push(tmp);
				flag_ls = false;


			}
      if(flag_data2div == true){
        var data2div_content = "";
				data2div_content+= tmp_data2div_content;
				var tmp = new StringNode(data2div_content, "data2div", "");
				StringSet.push(tmp);
				flag_data2div = false;


			}
			continue;
		}

		if(flag_code){
			tmp_html_content += each_content;
		}else if(flag_u2b){
			tmp_u2b_content += each_content;
		}else if(flag_flowchart){
			tmp_flowchart_content += each_content;
		}else if(flag_sequence){
			tmp_sequence_content += each_content;
		}else if(flag_image){
			tmp_image_content += each_content;
		}else if(flag_data2div){
			tmp_data2div_content += each_content;
		}else if(flag_ref){
			tmp_ref_content += each_content;
		}else if(flag_ls){
			tmp_ls_content += each_content;
		}else{
			output+= each_content + '\n';
			tmp_content += each_content + '\n';
	//		console.log(tmp_content);

		}


	}
	if(tmp_content!=""){
		//console.log(tmp_content);
		var tmp = new StringNode(tmp_content, "markdown_input", "");
		StringSet.push(tmp);
	}
//	console.log('parse_result.code:'+StringSet);
	return [output, parse_result, StringSet]
	//return html_string;
}
