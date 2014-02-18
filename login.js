$(document).ready(function () {
	var $username = $("SELECTOR FOR USERNAME");
	var $password = $("SELECTOR FOR PASSWORD");
	var $form = $("SELECTOR FOR FORM");
	var user = "jonathan.janzen";
	var pass = "nicetry";
	$username.val(user);
	$password.val(pass);
	$form.submit();
})