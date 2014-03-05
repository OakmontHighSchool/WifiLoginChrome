$(document).ready(function () {
	alert("test");
	var $username = $("input[name=user]");
	var $password = $("input[name=pass]");
	var $form = $("form[name=auth]");
	var user = "jacob.mcpeak";
	var pass = "";
	$username.val(user);
	$password.val(pass);
	$form.submit();
})