function save_options() {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	
	localStorage["username"] = user;
	localStorage["password"] = pass;
	
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

function restore_options() {
	var userS = localStorage["username"];
	var passS = localStorage["password"];
	
	if(!userS || !passS) {
		return;
	}
	var user = document.getElementById("user");
	var pass = document.getElementById("pass");
	
	user.value = userS;
	pass.value = passS;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);