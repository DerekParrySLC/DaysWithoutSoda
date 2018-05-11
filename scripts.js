
var instructions = document.getElementById("instructions");
instructions.style.display = "none";

function toggleInstructions() {
	if (instructions.style.display === "none") {
		instructions.style.display = "initial";
	} else {
		instructions.style.display = "none";
	}
}