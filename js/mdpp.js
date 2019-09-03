var variable_manager = new VariableManager;
var ui_manager = new UImanager;

function DynamicDisplay(ListMdppObject, ListDiv, id) {


    if (ListMdppObject.length > 1) {
        switch (ListMdppObject[id].property) {
            case "ls": {

                $.get(appResources,

                    {
                        "command": "commandGetSpecificTypeResources",
                        "ResourceType": ListMdppObject[id].data
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
                        //tmp_text += "@ls list<br/>";
                        //tmp_text += "=====<br/>";
                        tmp.forEach(item => {
                            var resource_name = item.split("$$")[3];
                            var resource_id = item.split("$$")[0];
                            var resource_FileID = item.split("$$")[1];
                            var resource_content = item.split("$$")[2];

                            tmp_text += resource_name + ':' + resource_content;
                            tmp_text += "</br>";
                        })
                        //tmp_text += "=====<br/>";

                        //var content = tmp.split('$$')[2];
                        $(div_id).html(tmp_text);

                    }
                );
                break;
            }
            case "list_ref": {
                //console.log('dynamic list_ref');
                $.get(appResources,

                    {
                        "command": "commandGetSpecificResourceByName",
                        "ResourceName": ListMdppObject[id].data
                    },
                    function(data) {
                        //console.log(data);
                        var div_id = '#div' + id;
                        //console.log(div_id);
                        var ls_ref_content = data.split('$$')[1];
                        //console.log(ls_ref_content);
                        var find = '\n';
                        var re = new RegExp(find, 'g');

                        ls_ref_content = ls_ref_content.replace(re, '<br/>');
                        //console.log(ls_ref_content);
                        $(div_id).html(ls_ref_content);

                    }
                );
                break;
                break;
            }
            case "default":
                break;
        }
    }


}
//ListDiv2StaticDisplay(ListMdppObject, ListDiv, $('#preview'));
function ListDiv2StaticDisplay(ListMdppObject, ListDiv, DivToShow) {

    for (var i = 0; i < ListDiv.length; i++) {

        switch (ListMdppObject[i].property) {
            case "markdown_input": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "u2b": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "pdf": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "mp3": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "image": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "jog": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "image_rotation": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "html": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "ref": {
                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "ls": {
                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "ls_export": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "list": {
                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" id="div' + i + '">';
                tmp_html_content += string2html(ListDiv[i]);
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "menu": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">';
                tmp_html_content += string2html(ListDiv[i]);
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "list_ref": {
                //console.log('list_ref');
                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
            case "plot": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];

                //showPlot('2d', [variable_lib[var_x], variable_lib[var_y]], "div"+i);

                var tmp_argument_set = ListMdppObject[i].data.split(" ");
                var var_x_name = tmp_argument_set[1];
                var var_y_name = tmp_argument_set[3];

                var var_x_value = variable_manager.variable_objects[var_x_name];
                var var_y_value = variable_manager.variable_objects[var_y_name];

                if (typeof var_x_value == "undefined" | typeof var_y_value == "undefined") {
                    tmp_html_content += "!!! x undefined or y undefined, please check"
                    tmp_html_content += '</div>'
                    DivToShow.append(tmp_html_content);
                } else {
                    tmp_html_content += '</div>'
                    DivToShow.append(tmp_html_content);
                    //console.log('x:'+var_x_name+',y:'+var_y_name);
                    //showPlot('2d', [[1,2,3], [3,4,5]], "#div"+i);
                    showPlot('2d', [var_x_value, var_y_value], "#div" + i);
                }

                break;
            }
            case "set": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                var var_name = ListMdppObject[i].data.replace(/ +/g, '').split('=')[0];
                var var_value = ListMdppObject[i].data.replace(/ +/g, '').split('=')[1];
                var new_var_x = {
                    'name': var_name,
                    'value': eval(var_value)
                };
                variable_manager.newVariable(new_var_x, display_var);
                break;
            }
            case "print": {
                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" name=' + ListMdppObject[i].data + ' id="div' + i + '">'
                //tmp_html_content += DivSet[i];
                //tmp_html_content += '<br/>===<br/>';
                tmp_html_content += variable_manager.variable_objects[ListMdppObject[i].data];
                //tmp_html_content += '<br/>===<br/>';
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                //var var_name = ListMdppObject[i].data.replace(/ +/g,'').split('=')[0];
                //var var_value = ListMdppObject[i].data.replace(/ +/g,'').split('=')[1];
                //var new_var_x = {'name':var_name, 'value':eval(var_value)};
                //variable_manager.newVariable(new_var_x, display_var);
                break;
            }
            case "whos": {

                var tmp_html_content = "";
                tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                //tmp_html_content += DivSet[i];
                tmp_html_content += variable_manager.listVariables();
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                //var var_name = ListMdppObject[i].data.replace(/ +/g,'').split('=')[0];
                //var var_value = ListMdppObject[i].data.replace(/ +/g,'').split('=')[1];
                //var new_var_x = {'name':var_name, 'value':eval(var_value)};
                //variable_manager.newVariable(new_var_x, display_var);
                break;
            }
            case "ui_slidebar": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += ListDiv[i];
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                let var_name = ListMdppObject[i].data.split(' ')[1];

                ui_manager.newSlidebar('#div' + i, var_name);
                let new_var = {
                    'name': var_name,
                    'value': 50
                };
                variable_manager.newVariable(new_var, display_var);
                break;
            }
            case "marked": {
                var tmp_html_content = "";
                tmp_html_content += '<div id="div' + i + '">'
                tmp_html_content += '</div>'
                DivToShow.append(tmp_html_content);
                break;
            }
        }

    }

}
//input: string input_content
//output: [list_string ListMdppObject, ListDiv];
function mdpp2ListDiv(input_content) {
    variable_manager.clearVariables();
    var ListDiv = [];
    [preprocessed_content, parse_result, ListMdppObject] = html_preprocessing(input_content);
    for (var i = 0; i < ListMdppObject.length; i++) {
        switch (ListMdppObject[i].property) {
            case "markdown_input": {
                var html_results = markdown.toHTML(ListMdppObject[i].data);
                ListDiv.push(html_results);
                break;
            }
            case "html": {
                ListDiv.push(ListMdppObject[i].data);
                break;
            }
            case "u2b": {
                ListDiv.push(ListMdppObject[i].data);
                break;
            }
            case "pdf": {
                var pdf_content = "<embed src= \"";
                pdf_content += ListMdppObject[i].data;
                pdf_content += "\" width= \"100%\" height=\"400\">";
                ListDiv.push(pdf_content);
                break;
            }
            case "ref": {
                ListDiv.push(ListMdppObject[i].data);
                break;
            }
            case "list": {
                ListDiv.push(ListMdppObject[i].data);
                break;
            }
            case "list_ref": {
                ListDiv.push("");
                break;
            }
            case "menu": {
                ListDiv.push(ListMdppObject[i].data);
                break;
            }
            case "ls": {
                //console.log(ListMdppObject[i].data);

                var ls_content = "[system message] syntax: ls [type]  : show all resources with specific type.<br/>"
                ls_content += "loading...<br/>"
                ls_content += ListMdppObject[i].data;
                ls_content += "<br/>"
                ListDiv.push(ls_content);
                break;
            }
            case "ls_export": {
                //console.log(ListMdppObject[i].data);
                ListDiv.push("");
                break;
            }
            case "mp3": {
                //console.log('image');
                //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                //var mp3_content = "<audio controls><source src=\"https://drive.google.com/uc?export=view&id=";
                var mp3_content = "<audio controls><source src=\"";
                //var tmp_length_array = ListMdppObject[i].data.split("=").length;
                mp3_content += ListMdppObject[i].data;
                mp3_content += "\"  type=\"audio/ogg\">";
                mp3_content += "</audio>"
                //mp3_content += "<audio controls><source src=\"https://drive.google.com/uc?export=view&id=";
                var mp3_content = "<audio controls><source src=\"";
                var tmp_length_array = ListMdppObject[i].data.split("=").length;
                //mp3_content += ListMdppObject[i].data.split("=")[tmp_length_array - 1];
                mp3_content += ListMdppObject[i].data;
                mp3_content += "\"  type=\"audio/mpeg\">";
                mp3_content += "</audio>"
                ListDiv.push(mp3_content);
                break;
            }
            case "image": {
                //console.log('image');
                //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                var image_content = "<img class=\"rotation\" src=\"https://drive.google.com/uc?export=view&id=";
                var tmp_length_array = ListMdppObject[i].data.split("=").length;
                image_content += ListMdppObject[i].data.split("=")[tmp_length_array - 1];
                image_content += "\">";
                ListDiv.push(image_content);
                break;
            }
            case "image_rotation": {
                console.log(ListMdppObject[i].data);
                //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";
                var rotation_degrees = ListMdppObject[i].data.split(' ')[1];
                var image_content = "<img class=\"rotation" + rotation_degrees + "\" src=\"https://drive.google.com/uc?export=view&id=";
                var tmp_length_array = ListMdppObject[i].data.split(' ')[0].split("=").length;
                image_content += ListMdppObject[i].data.split(' ')[0].split("=")[tmp_length_array - 1];
                image_content += "\">";

                //console.log(rotation_degrees);
                //console.log(image_content);
                ListDiv.push(image_content);
                break;
            }
            case "flowchart": {
                var tmp = ListMdppObject[i].data;
                var diagram = flowchart.parse(tmp);
                $('#diagram').html('');
                //diagram.drawSVG('diagram');

                ListDiv.push($('#diagram').html());
                break;
            }
            case "plot": {
                var plot_content = "";
                plot_content += "@plot\n"
                plot_content += ListMdppObject[i].data;
                ListDiv.push(plot_content);
                break;
            }
            case "set": {
                var set_content = "";
                set_content += "@set\n"
                set_content += ListMdppObject[i].data;
                ListDiv.push(set_content);
                break;
            }
            case "jog": {
                var jog_content = "";
                jog_content += "@jog\n"
                jog_content += ListMdppObject[i].data;
                ListDiv.push(jog_content);
                break;
            }
            case "print": {
                var print_content = "";
                print_content += "@print\n"
                print_content += ListMdppObject[i].data;
                ListDiv.push(print_content);
                break;
            }
            case "whos": {
                var whos_content = "";
                whos_content += "@whos\n"
                whos_content += ListMdppObject[i].data;
                ListDiv.push(whos_content);
                break;
            }
            case "ui_slidebar": {
                var ui_slidebar_content = "";
                ui_slidebar_content += "@ui_slidebar\n"
                ui_slidebar_content += ListMdppObject[i].data;
                ListDiv.push(ui_slidebar_content);
                break;
            }
            case "marked": {
                var marked_content = "";
                //marked_content+= ListMdppObject[i].data;
                ListDiv.push(marked_content);
                break;
            }
        }
    }
    return [ListMdppObject, ListDiv];

}


function string2html(string_input) {
    var html_output = "";
    html_output += string_input.replace(/\n/g, '<br/>');
    return html_output;
}
