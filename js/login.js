(function(){
	// Initialize Firebase
	  var config = {
		apiKey: "AIzaSyAtI63y6oM7PO4p0U2AEMsXrhScPYeC3GA",
		authDomain: "uxapi-74e8b.firebaseapp.com",
		databaseURL: "https://uxapi-74e8b.firebaseio.com",
		projectId: "uxapi-74e8b",
		storageBucket: "",
		messagingSenderId: "1051481601400"
	  };
	  firebase.initializeApp(config);

	  const txtEmail = document.getElementById("txtEmail");
	  const txtPassword = document.getElementById("txtPassword");
	  const btnLogin = document.getElementById('btnLogin');
	  const btnLogout = document.getElementById('btnLogout');

	  btnLogin.addEventListener('click', e=>{
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			//sign in
			const promise = auth.signInWithEmailAndPassword(email,pass);
			promise.catch(e=>console.log(e.message));
	  });
	  btnLogout.addEventListener('click',e=>{
			firebase.auth().signOut();
	  });
	  firebase.auth().onAuthStateChanged(firebaseUser=>{
			if(firebaseUser){
					console.log('hi,'+firebaseUser.email);
					window.location = "admin.html";
					tmp = firebaseUser;
					//console.log('hi,'+firebaseUser.getDisplayName());
			}else{
					console.log('not logged in1');
			}
	  });

}());
