
var TOKENTYPENUMBER = 0;
var TOKENTYPEKEYWORD = 1;
var TOKENTYPEIDENTIFIER = 2;
var TOKENTYPEOPENPAR = 3;
var TOKENTYPEVARIABLE = 4;
var TOKENTYPEASSIGN = 5;
var TOKENTYPEEND = 6;
forfun = 1;

function Compiler (){
	
};

Compiler.prototype.syntax_check = function(command_set){
		//syntax check, suport
		// VAR
		// rule[0]: VAR-NUM: cd 1
		// rule[1]: VAR-ASSIGN-NUM: a=1
		// rule[2]: VAR-VAR: plot a
		// rule[3]: VAR-IDEN-VAR-NUM: rm -r 1
		// rule[4]: VAR: plot

	
	console.log('syntax check');
	curr_node = root;
	for(icommand_set in command_set){
		var command = command_set[icommand_set];
		//console.log(command);
		while(true){
			token_lookup = command[0];
			//console.log(token_lookup);
			//console.log(curr_node);
			if(typeof token_lookup == "undefined"){
				if(typeof curr_node.children[-1] == "undefined"){
					//console.log('debug1');
					return 0;
				}else{
					//console.log('debug2');
					//console.log(curr_node.children[-1].name);
					return curr_node.children[-1].name; 
				}
				break;
			}else{
				token = command.shift();
				//console.log(token);
				curr_node = search_node(token, curr_node);
				if(typeof curr_node == "undefined"){					
					console.log('syntax error');
					return 0;
				}else{
					//console.log(curr_node);
				}
			}
			//var token = command[icommand];
			//console.log(token);
			
			//search_node(token, root);
			/*
			for(ichildren in curr_node.children){
					if(curr_node.children[ichildren]){
						curr_node = curr_node.children[ichildren];
					}
			}
			console.log(curr_node);
			*/
			/*
			if(typeof curr_node.children[token]=="undefined"){
				console.log(token);
				return 0;
			}else{
				curr_node = curr_node.children[token];
				return 1;
			};
			*/
		}
	}
	console.log(curr_node);
	return 1;
}

Compiler.prototype.lexical = function(data){
		console.log('compiler: lexical analyzing');
		var i;
		var number = 0;
		var constants = [];
//		var index_each_word=0;
		var tokens = [];
		var variables = [];
		var the_variable = [];
		for(i =0; i<data.length; i++){
			if(parseInt(data[i])){ //digit
		//		index_each_word = 0;
				while(parseInt(data[i])){		
					number = 10*number + parseInt(data[i]);
					i++;
				}
				i--
				constants.push(number);
				number = 0;
				tokens.push(TOKENTYPENUMBER);
			}else{//alphabet
				//console.log(data[i]);		
				if(data[i]=='+' || data[i] == '-' || data[i]== '*' || data[i]=='/'){
					tokens.push(TOKENTYPEIDENTIFIER);
				}
				if(data[i]=='='){
					tokens.push(TOKENTYPEASSIGN);
				}
				if(data[i]==';'){
					tokens.push(TOKENTYPEEND);
				}
				if(data[i] == '{' || data[i] == '}'){
					tokens.push(TOKENTYPEOPENPAR);
				}
				if(data[i].search(/[a-zA-Z]/)!=-1){
					while(data[i].search(/[a-zA-Z_1-9]/)!=-1){
						the_variable.push(data[i]);
						i++;
						if(i==data.length)break;
					}
					variables.push(the_variable);
					the_variable = [];
					i--;
					tokens.push(TOKENTYPEVARIABLE);
				}
			}
		
		}
		console.log('There are '+ constants.length+' NUM:');
		for( each_constant_id in constants){
			console.log(constants[each_constant_id]);
		}
		console.log('There are '+ variables.length+' VAR:');
		for( each_variable_id in variables){
			console.log(variables[each_variable_id].join(""));
		}
		console.log('Tokens:');
		var token_set = [];
		for( each_token_id in tokens){
			switch(tokens[each_token_id]){
				case TOKENTYPENUMBER:
					console.log('NUM');
					break;
				case TOKENTYPEIDENTIFIER:
					console.log('IDEN');
					break;
				case TOKENTYPEKEYWORD:
					console.log('KEY');
					break;
				case TOKENTYPEOPENPAR:
					console.log('OPER');
					break;
				case TOKENTYPEVARIABLE:
					console.log('VAR');
					break;
				case TOKENTYPEASSIGN:
					console.log('ASSIGN');
					break;
				case TOKENTYPEEND:
					console.log('END');
					break;					
					
			}
		}
		return [tokens,variables,constants] ;
	}


Compiler.prototype.parse = function(data){
	var tokens = data[0];
	var variables = data[1];
	var constants = data[2];
	command_set = [];
	each_command = [];
	for(itoken in tokens){
		if(tokens[itoken] == TOKENTYPEEND){
			command_set.push(each_command);
			each_command = [];
		}else{
			each_command.push(tokens[itoken]);
		}
	}
	if(each_command.length!=0){
		command_set.push(each_command);
	}
	

	
	var result = this.syntax_check(command_set);
	return result;
	
	
	}

function SyntaxTreeNode (node_id, node_name){
	this.id = node_id;
	this.name = node_name;
	this.children = {};
};

SyntaxTreeNode.prototype.insert = function(child_node_id, child_node_name){
	this.children[child_node_id]=(new SyntaxTreeNode(child_node_id, child_node_name));
}

root = new SyntaxTreeNode();
var TOKENTYPENUMBER = 0;
var TOKENTYPEKEYWORD = 1;
var TOKENTYPEIDENTIFIER = 2;
var TOKENTYPEOPENPAR = 3;
var TOKENTYPEVARIABLE = 4;
var TOKENTYPEASSIGN = 5;
var TOKENTYPEEND = 6;
root.insert(TOKENTYPEVARIABLE);
root.children[TOKENTYPEVARIABLE].insert(TOKENTYPENUMBER,"");
root.children[TOKENTYPEVARIABLE].insert(TOKENTYPEASSIGN,"");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEASSIGN].insert(TOKENTYPENUMBER,"");
root.children[TOKENTYPEVARIABLE].insert(TOKENTYPEVARIABLE,"");
root.children[TOKENTYPEVARIABLE].insert(TOKENTYPEIDENTIFIER,"");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEIDENTIFIER].insert(TOKENTYPEVARIABLE,"");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEIDENTIFIER].children[TOKENTYPEVARIABLE].insert(TOKENTYPENUMBER,"");
root.children[TOKENTYPEVARIABLE].insert(-1,"rule4");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPENUMBER].insert(-1,"rule0");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEASSIGN].children[TOKENTYPENUMBER].insert(-1,"rule1");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEVARIABLE].insert(-1,"rule2");
root.children[TOKENTYPEVARIABLE].children[TOKENTYPEIDENTIFIER].children[TOKENTYPEVARIABLE].children[TOKENTYPENUMBER].insert("-1","rule3");

function search_node(node_name, node_root){
	var return_node = null;
	for(children_node in node_root.children){
		if(node_name == children_node){
			return_node = node_root.children[children_node];
			return return_node;
		}
	}
};

