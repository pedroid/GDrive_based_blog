
var StringNode = function(data, property, description) {
    this.data = data;
    this.property = property;
    this.description = description;
}

var html_preprocessing = function(content) {
    //console.log(content);
    var output = "";
    var parse_result = [];
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

    var patt_sequence = new RegExp("^@sequence{[ ]*$");
    var patt_script = new RegExp("tag");
    var patt_data2div = new RegExp("^@data2div{[ ]*$");
    var patt_ref = new RegExp("^@ref{[ ]*$");
    var patt_list = new RegExp("^@list{[ ]*$");
    var patt_list_ref = new RegExp("^@list[ ]*:[ ]*[a-z0-9A-Z_\\-\\:\\/\\?\\=\\&\\.]*[\\t ]*$");
    //var patt_ls = new RegExp("^@ls{[ ]*$");

    // 1 line syntax
    var patt_ls = new RegExp("^@ls [a-z,0-9,A-Z]*[ ]*$");
    var patt_ls_export = new RegExp("^@ls [a-z,0-9,A-Z]*[ ]+>[ ]+[a-z0-9A-Z\_]*$");
    var patt_image = new RegExp("^@image [a-z0-9A-Z_\\-\\:\\/\\?\\=\\&\\.]*[\\t ]*$");
    var patt_image_rotation = new RegExp("^@image [a-z0-9A-Z_\\-\\:\\/\\?\\=\\&\\.]*[ ]+[-]*[0-9]+[ ]*$");
    var patt_plot = new RegExp("^@plot .");
	var patt_set = new RegExp("^@set .");
	var patt_marked = new RegExp("^@#.");
    // end of 1 line syntax

    var flag_code = false;
    var flag_u2b = false;
    var flag_flowchart = false;
    var flag_sequence = false;
    var flag_image = false;
    var flag_data2div = false;
    var flag_ref = false;
    var flag_ls = false;
    var flag_list = false;
    var flag_list_ref = false;
    var flag_plot = false;
	var flag_set = false;
	var flag_marked = false;

    //n

    var dict_doc_type = {
        'markdown': 0,
        'code': 1,
        'u2b': 2,
        'flowchart': 3,
        'sequence': 4,
        'image': 5,
        'data2div': 6,
        'ref': 7,
        'ls': 8,
        'list': 9,
        'plot':10,
		'set':11,
		'marked':12
    }

    var doc_type = [];
    for (i in dict_doc_type) {
        doc_type[dict_doc_type[i]] = i;
    }

    var patt = [];
    for (var i = 1; i < Object.keys(doc_type).length; i++) {
        patt[i] = new RegExp("^@" + doc_type[i] + "{[ ]*$");;
    }
    patt[0] = new RegExp("^}$"); // end pattern
    //nn


    var tmp_html_content = "";
    var tmp_u2b_content = "";
    var tmp_flowchart_content = "";
    var tmp_sequence_content = "";
    var tmp_image_content = "";
    var tmp_image_rotation_content = "";
    var tmp_data2div_content = "";
    var tmp_content = "";
    var tmp_ref_content = "";
    var tmp_ls_content = "";
    var tmp_list_content = "";
    var tmp_list_ref_content = "";
    var tmp_plot_content = "";
	var tmp_set_content = "";
	var tmp_marked_content = "";
    //n
    var reg_content = [];
    for (var i = 0; i < Object.keys(doc_type).length; i++) {
        tmp_content[i] = "";
    }
    //nn


    var mdppSet = [];
    //parse_result.code.push("");
    //console.log('1:', mdppSet);
    for (id_content_array in content_array) {
        each_content = content_array[id_content_array];
        console.log(each_content);
        if (patt_tag.test(each_content)) {
            var tag_content = each_content.split('!tag')[1];
            console.log('tag_content' + tag_content);
            var tag_content_array = tag_content.split(',');
            console.log('tag_content_array:' + tag_content_array);
            parse_result.tag_content_array = tag_content_array;
            mdppSet.push(StringNode(tag_content_array, "system_cmd", "tag"));
            console.log(mdppSet);
            continue;
        } else if (patt_publish.test(each_content)) {
            parse_result.publish = true;
            var tmp = new StringNode(true, "system_cmd", "publish");
            //console.log(tmp);
            mdppSet.push(tmp);
            //console.log('publish');
            continue;
        } else if (patt_html.test(each_content)) {
            tmp_html_content = "";
            flag_code = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;
        } else if (patt_u2b.test(each_content)) {
            tmp_u2b_content = "";
            flag_u2b = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_flowchart.test(each_content)) {
            tmp_flowchart_content = "";
            flag_flowchart = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_sequence.test(each_content)) {
            tmp_sequence_content = "";
            flag_sequence = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_ref.test(each_content)) {
            tmp_ref_content = "";
            flag_ref = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_list.test(each_content)) {
            tmp_list_content = "";
            flag_list = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_ls.test(each_content)) {
            tmp_ls_content = "";
            //flag_ls = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";

            var tmp = new StringNode(each_content.split(' ')[1], "ls", "");

            mdppSet.push(tmp);
            continue;

        } else if (patt_ls_export.test(each_content)) {
            tmp_ls_export_content = "";
            //flag_ls = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            //console.log(each_content);
            var tmp = new StringNode(each_content.replace(/\s/g, '').substring(3,).split(">")[1], "ls_export", "");
            //console.log(each_content);
            mdppSet.push(tmp);
            continue;

        }else if (patt_list_ref.test(each_content)) {
          //console.log(each_content);
            tmp_list_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            var tmp = new StringNode(each_content.replace(/ /g,'').split(':')[1], "list_ref", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_plot.test(each_content)) {
          //console.log(each_content);
            tmp_plot_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            var tmp = new StringNode(each_content.replace(/ +/g,' ').substring(6,), "plot", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_set.test(each_content)) {
          //console.log(each_content);
            tmp_set_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            var tmp = new StringNode(each_content.replace(/ +/g,' ').substring(5,), "set", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_marked.test(each_content)) {
          //console.log(each_content);
            tmp_marked_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            var tmp = new StringNode(each_content, "marked", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_image.test(each_content)) {
          //console.log(each_content);
            tmp_image_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            var tmp = new StringNode(each_content.split(' ')[1], "image", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_image_rotation.test(each_content)) {
          //console.log(each_content);
            tmp_image_rotation_content = "";
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            //console.log(tmp);
            tmp_content = "";
            var tmp = new StringNode(each_content.split(' ')[1]+' '+each_content.split(' ')[2], "image_rotation", "");
            mdppSet.push(tmp);

            continue;
        } else if (patt_data2div.test(each_content)) {
            tmp_data2div_content = "";
            flag_data2div = true;
            var tmp = new StringNode(tmp_content, "markdown_input", "");
            if (tmp_content != "") {
                mdppSet.push(tmp);
            }
            tmp_content = "";
            continue;

        } else if (patt_end.test(each_content)) {
            if (flag_code == true) {
                parse_result.code.push(tmp_content);
                if (patt_script.test(tmp_html_content)) {
                    console.log('script included');
                } else {
                    var tmp = new StringNode(tmp_html_content, "html", "");
                    mdppSet.push(tmp);
                }
                flag_code = false;
                tmp_content = "";
            }
			if (flag_marked == true) {
                var marked_content = "";
                marked_content += tmp_marked_content;
                var tmp = new StringNode(marked_content, "marked", "");
                mdppSet.push(tmp);
                flag_marked = false;

            }			
			if (flag_set == true) {
                var set_content = "";
                set_content += tmp_set_content;
                var tmp = new StringNode(set_content, "set", "");
                mdppSet.push(tmp);
                flag_set = false;

            }
            if (flag_plot == true) {
                var plot_content = "";
                plot_content += tmp_plot_content;
                var tmp = new StringNode(plot_content, "plot", "");
                mdppSet.push(tmp);
                flag_plot = false;

            }
            if (flag_u2b == true) {
                var forfun = "<iframe width='600' height='450' src='";
                forfun += tmp_u2b_content;
                forfun += "'></iframe>";
                var tmp = new StringNode(forfun, "u2b", "");
                mdppSet.push(tmp);
                flag_u2b = false;

            }
            if (flag_flowchart == true) {
                var flowchart_content = "";
                flowchart_content += tmp_flowchart_content;
                var tmp = new StringNode(flowchart_content, "flowchart", "");
                mdppSet.push(tmp);
                flag_flowchart = false;

            }
            if (flag_sequence == true) {
                var sequence_content = "";
                sequence_content += tmp_sequence_content;
                var tmp = new StringNode(sequence_content, "sequence", "");
                mdppSet.push(tmp);
                flag_sequence = false;

            }
            if (flag_image == true) {
                var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";
                image_content += tmp_image_content;
                image_content += "\"/>"
                var tmp = new StringNode(image_content, "image", "");
                mdppSet.push(tmp);
                flag_image = false;


            }
            if (flag_list_ref == true) {
                var list_ref_content = "";
                list_ref_content += tmp_list_ref_content;
                var tmp = new StringNode(list_ref_content, "list_ref", "");
                mdppSet.push(tmp);
                flag_list_ref = false;


            }
            if (flag_ref == true) {

                var ref_content = "";
                ref_content += tmp_ref_content;

                var tmp = new StringNode(ref_content, "ref", "");
                mdppSet.push(tmp);
                flag_ref = false;


            }
            if (flag_list == true) {

                var list_content = "";
                list_content += tmp_list_content;

                var tmp = new StringNode(list_content, "list", "");
                mdppSet.push(tmp);
                flag_list = false;


            }
            if (flag_ls == true) {
                var ls_content = "";
                ls_content += tmp_ls_content;
                var tmp = new StringNode(ls_content, "ls", "");
                mdppSet.push(tmp);
                flag_ls = false;


            }
			
            if (flag_data2div == true) {
                var data2div_content = "";
                data2div_content += tmp_data2div_content;
                var tmp = new StringNode(data2div_content, "data2div", "");
                mdppSet.push(tmp);
                flag_data2div = false;


            }
            continue;
        }

        if (flag_code) {
            tmp_html_content += each_content;
        } else if (flag_u2b) {
            tmp_u2b_content += each_content;
        } else if (flag_flowchart) {
            tmp_flowchart_content += each_content;
        } else if (flag_sequence) {
            tmp_sequence_content += each_content;
        } else if (flag_image) {
            tmp_image_content += each_content;
        } else if (flag_data2div) {
            tmp_data2div_content += each_content;
        } else if (flag_ref) {
            tmp_ref_content += each_content;
        } else if (flag_list) {
            tmp_list_content += each_content + "\n";
        } else if (flag_ls) {
            tmp_ls_content += each_content;
        } else if (flag_list_ref) {
            tmp_list_ref_content += each_content;
        } else if (flag_plot) {
            tmp_plot_content += each_content;
        } else if (flag_set) {
            tmp_set_content += each_content;
        }  else if (flag_marked) {
            tmp_marked_content += each_content;
        } else {
            output += each_content + '\n';
            tmp_content += each_content + '\n';
            //		console.log(tmp_content);

        }


    }
    if (tmp_content != "") {
        //console.log(tmp_content);
        var tmp = new StringNode(tmp_content, "markdown_input", "");
        mdppSet.push(tmp);
    }
    //	console.log('parse_result.code:'+mdppSet);
    return [output, parse_result, mdppSet]
    //return html_string;
}
