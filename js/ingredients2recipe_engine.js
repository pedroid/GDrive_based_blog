function Ingredients2RecipeManager(){
	this.variable_objects = {};

}

var weight_ingredient = {};
weight_ingredient.salt = 0.3;
weight_ingredient.ginger = 0.3;
weight_ingredient.pork = 1;

Ingredients2RecipeManager.prototype.IngredientsDistance = (source_ingredient, target_ingredient)=>{
	let distance = {};
	Object.keys(source_ingredient).forEach( (ingredient_name)=>{
		let amount_each_source_ingredient = source_ingredient[ingredient_name];
		let amount_each_target_ingredient = target_ingredient[ingredient_name];
		if(typeof target_ingredient[ingredient_name] == "undefined"){
			//distance+=1;
			distance[ingredient_name] = 1;
		}else{
			if(amount_each_source_ingredient < amount_each_target_ingredient){
				//distance+= weight_ingredient[ingredient_name] * Math.abs(amount_each_source_ingredient-amount_each_target_ingredient)/amount_each_target_ingredient;
				distance[ingredient_name] = weight_ingredient[ingredient_name] * Math.abs(amount_each_source_ingredient-amount_each_target_ingredient)/amount_each_target_ingredient;

			}else{

			}
			delete target_ingredient[ingredient_name]
		}
	})
	Object.keys(target_ingredient).forEach( (ingredient_name)=>{


	});


	return distance;
}

//var display_var = (input)=>console.log(input);

let test = new Ingredients2RecipeManager
let source_ingredient = {
	"ginger":2,
	"salt":1,
	"pork":5
}

let target_ingredient = {
	"ginger":3,
	"salt":3,
	"pork":6
}

let distance = test.IngredientsDistance(source_ingredient, target_ingredient);
//console.log(distance);

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
