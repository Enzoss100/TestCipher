document.getElementById("toggleButton").addEventListener("click", function() {
	const tutorialDiv = document.querySelector(".tutorial");
	if (tutorialDiv.style.display === "none" || tutorial.Div.style.display === "") {
		tutorialDiv.style.display = "block";
	}
	else {
		tutorialDiv.style.display = "none";
	}
});
