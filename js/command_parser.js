const ERR01 = "size of input arguments should be multiples of 2."
const ERR02 = "argument variable should be followed by argument value."
function CommandParser(){
	this.variable_objects = {};

}

//var display_var = (input)=>console.log(input);

CommandParser.prototype.parseArguments = function(command){
	var command_object = {};
	command = command.replace(/ +/g, ' ');
	var command_set = command.split(' ');
	for(var i = 0;i<command_set.length;i++){
		if(command_set[i][0] == '-'){
			var cmd_name = command_set[i].substring(1,);
			command_object[cmd_name] = command_set[i+1];
		}
	}
	return command_object;
}

CommandParser.prototype.integrityCheck = (command)=>{
	command = command.replace(/ +/g, ' ');
	var command_set = command.split(' ');
	if (command_set.length % 2 != 0){return ERR01+':'+command}

	else{ return "pass"}
}
/*
var command_parser = new CommandParser
var input_command = "-max -min  100  -min  0 -value 50 100"
var result_integrity = command_parser.integrityCheck(input_command);
var output_object;
if(result_integrity == "pass"){
	output_object = command_parser.parseArguments(input_command);
	console.log(output_object);
}else{
	console.log(result_integrity);
}
*/
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
