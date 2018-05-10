
var saveToPhone = document.getElementById("save-to-phone");

var toggle = true;

function displayInstructions() {
	if (toggle) {
		saveToPhone.innerHTML = document.getElementById("instructions").innerHTML;
		toggle = false;
	} else {
		saveToPhone.innerHTML = "<code>save to phone</code>";
		toggle = true;
	}
}
