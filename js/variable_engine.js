function VariableManager(){
	this.variable_objects = {};

}

VariableManager.prototype.newVariable = function(variable_object, callback){
	var new_var_name = variable_object.name;
	var new_var_value = variable_object.value;
	this.variable_objects[new_var_name] = new_var_value;
	callback(variable_object)
}

VariableManager.prototype.updateVariable = function(variable_object, callback){
	var new_var_name = variable_object.name;
	var new_var_value = variable_object.value;
	this.variable_objects[new_var_name] = new_var_value;
	callback(variable_object)
}

VariableManager.prototype.deleteVariable = function(variable_object){
	var var_name = variable_object.name;
	delete this.variable_objects[var_name];
}

VariableManager.prototype.listVariables = function(callback){
	var list_variables = [];
	$.each(this.variable_objects, function(index, value) {
		list_variables.push(index);
	});
	callback(list_variables);

}

VariableManager.prototype.clearVariables = function(){
	this.variable_objects = {};
}

var display_var = (input)=>console.log(input);
/*
var tmp = new VariableManager

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
