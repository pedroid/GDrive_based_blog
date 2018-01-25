
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
	var patt_htmll = new RegExp("^@htmll[ ]*$");
	//user defined markdown
	var patt_end = new RegExp("^}$");
	//
	var patt_u2b = new RegExp("^@u2b{[ ]*$");
	var patt_u2bee = new RegExp("^@u2bee[ ]*$");

	var patt_flowchart = new RegExp("^@flowchart{[ ]*$");
	var patt_flowchard_end = new RegExp("^@flowchart[ ]*$");
	
	var patt_sequence = new RegExp("^@sequence{[ ]*$");

	var patt_script = new RegExp("tag");

	var flag_code = false;
	var flag_u2b = false;
	var flag_flowchart = false;
	var flag_sequence = false;
	var tmp_html_content = "";
	var tmp_u2b_content = "";
	var tmp_flowchart_content = "";
	var tmp_sequence_content = "";
	var tmp_content = "";
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
			continue;
		}

		if(flag_code){
			tmp_html_content += each_content;
			console.log('save code:'+tmp_html_content);
		}else if(flag_u2b){
			tmp_u2b_content += each_content;
			console.log('save u2b code:'+tmp_u2b_content);

		}else if(flag_flowchart){
			tmp_flowchart_content += each_content +'\n';
		}else if(flag_sequence){
			tmp_sequence_content += each_content +'\n';
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
