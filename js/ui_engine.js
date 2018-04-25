function UImanager(){
	this.variable_objects = {};

}

var display_var = (input)=>{
	console.log(input);
}


var slidebar_on = (input)=>{
	console.log(input.name);
	forfun = input;
	var new_var = {'name':input.name, 'value':[input.value]};
	variable_manager.newVariable(new_var, display_var);
}

UImanager.prototype.newSlidebar = (div, name) =>{
	$(div).html("<div class=\"slidecontainer\"><input type=\"range\" name=\"" + name +"\" onchange=\"slidebar_on(this)\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\"\></div>");

}


//var tmp = new UImanager
/*
var new_var_x = {'name':'var_x', 'value':[1,2,3]};
console.log('new variable');
tmp.newVariable(new_var_x, display_var);
var new_var_y = {'name':'var_y', 'value':[4,5,6]};
tmp.newVariable(new_var_y, display_var);
console.log('list variables');
tmp.listVariables(display_var);
console.log('delete variable');
tmp.deleteVariable(new_var_x);
console.log('list variables');
tmp.newVariable(new_var_y, display_var);
console.log('clear variables');
tmp.clearVariables();
console.log('list variables');
tmp.listVariables(display_var);
//
var  tmp  = "set  a  = [1,2,3]"
tmp.replace(/ +/g,' ')
eval(tmp.substring(4,))
*/
