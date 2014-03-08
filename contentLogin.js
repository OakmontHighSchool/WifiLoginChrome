$(document).ready(function () {
	if(!localStorage["username"] || !localStorage["password"]) {
		alert("Test");
		var $username = $("input[name=user]");
		var $password = $("input[name=pass]");
		var $form = $("form[name=auth]");
		var user = localStorage["username"];
		var pass = localStorage["password"];
		$username.val(user);
		$password.val(pass);
		$form.submit();
	} else {
		alert("Please define your login and password at the options page for the extension to enable auto login.");
	}
})