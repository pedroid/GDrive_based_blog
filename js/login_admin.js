(function(){


}());
var login = function(){
	window.location = "login.html";
}
var logout = function(){
	firebase.auth().signOut();
}
