function DynamicDisplay(mdppSet, DivSet, id) {


    if (mdppSet.length > 1) {
        switch (mdppSet[id].property) {
            case "ls":
                {

                    $.get(appResources,

                        {
                            "command": "commandGetSpecificTypeResources",
                            "ResourceType": mdppSet[id].data
                        },
                        function(data) {
                            //console.log(data);
                            var div_id = '#div' + id;
                            var tmp = data.split('||');

                            tmp.pop();
                            //console.log(tmp);
                            //var content = tmp.split('$$')[2];
                            //data.split('||')[2];
                            //tmp.pop();
                            var tmp_text = "";
                            tmp.forEach(item=>{
                              tmp_text+= item.split("$$")[0]+':'+item.split("$$")[1]+':'+ item.split("$$")[2];
                              tmp_text+= "</br>";
                            })

                            //var content = tmp.split('$$')[2];
                            $(div_id).html(tmp_text);

                        }
                    );
                    break;
                }
                case "default":break;
        }
    }


}

function DivSet2StaticDisplay(mdppSet, DivSet, dp_element) {

    for (var i = 0; i < DivSet.length; i++) {

        switch (mdppSet[i].property) {
            case "markdown_input":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "u2b":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "image":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "image_rotation":
                    {
                        var tmp_html_content = "";
                        tmp_html_content += '<div id="div' + i + '">'
                        tmp_html_content += DivSet[i];
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                        break;
                    }
            case "html":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ref":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ls":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ls_export":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "list":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
        }

    }

}

function mdpp2DivSet(input_content) {

    var DivSet = [];
    [preprocessed_content, parse_result, mdppSet] = html_preprocessing(input_content);
    for (var i = 0; i < mdppSet.length; i++) {
        switch (mdppSet[i].property) {
            case "markdown_input":
                {
                    var html_results = markdown.toHTML(mdppSet[i].data);
                    DivSet.push(html_results);
                    break;
                }
            case "html":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "u2b":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "ref":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "list":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "ls":
                {
                  console.log(mdppSet[i].data);

                    var ls_content = "[system message] syntax: ls [type]  : show all resources with specific type.<br/>"
                    ls_content+= "loading...<br/>"
                    ls_content += mdppSet[i].data;
                    ls_content += "<br/>"
                    DivSet.push(ls_content);
                    break;
                }
            case "ls_export":
                {
                    console.log(mdppSet[i].data);
                    DivSet.push("");
                    break;
                }
            case "image":
                {
                  //console.log('image');
                    //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                    var image_content="<img src=\"https://drive.google.com/uc?export=view&id=";
                    var tmp_length_array = mdppSet[i].data.split("=").length;
                    image_content+= mdppSet[i].data.split("=")[tmp_length_array-1];
                    image_content+="\">";
                    DivSet.push(image_content);
                    break;
                }
                case "image_rotation":
                    {
                      console.log(mdppSet[i].data);
                        //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                        var image_content="<img src=\"https://drive.google.com/uc?export=view&id=";
                        var tmp_length_array = mdppSet[i].data.split(' ')[0].split("=").length;
                        image_content+= mdppSet[i].data.split(' ')[0].split("=")[tmp_length_array-1];
                        image_content+="\">";
                        console.log(image_content);
                        DivSet.push(image_content);
                        break;
                    }
            case "flowchart":
                {
                    var tmp = mdppSet[i].data;
                    var diagram = flowchart.parse(tmp);
                    $('#diagram').html('');
                    diagram.drawSVG('diagram');

                    DivSet.push($('#diagram').html());
                    break;
                }

        }
    }
    return [mdppSet, DivSet];

}

function md2html(input_content) {


    preview = "";
    //content = input.value;
    content = input_content;
    //console.log(content);
    [preprocessed_content, parse_result, mdppSet] = html_preprocessing(content);
    debug = mdppSet;
    for (var i = 0; i < mdppSet.length; i++) {

        switch (mdppSet[i].property) {
            case "markdown_input":
                {
                    //console.log("markdown_input");
                    //					console.log(mdppSet[i].data);
                    var html_results = markdown.toHTML(mdppSet[i].data);
                    preview += html_results;
                    break;
                }
            case "system_cmd":
                {
                    //console.log("system_cmd");
                    break;
                }
            case "html":
                {
                    //console.log("html");
                    //					console.log(mdppSet[i].data);
                    preview += mdppSet[i].data;

                    break;
                }
            case "u2b":
                {
                    preview += mdppSet[i].data;
                    break;
                }
            case "ref":
                {

                    var tag_test = false;
                    $.get(appBlogs,

                        {
                            FileID: 76,
                            "command": "read"
                        },
                        function(data) {
                            preview += data;

                        }
                    );

                    break;
                }
            case "ls":
                {
                    preview += "[system message] syntax: ls [type]  : show all resources with specific type.<br/>"
                    preview += mdppSet[i].data;
                    preview += "<br/>"
                    break;
                }
            case "data2div":
                {
                    preview += mdppSet[i].data;
                    break;

                }
            case "image":
                {
                    preview += mdppSet[i].data;
                    break;
                }
            case "flowchart":
                {
                    console.log(mdppSet[i].data);
                    tmp = mdppSet[i].data;

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
