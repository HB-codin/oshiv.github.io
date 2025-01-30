function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
	$clamp(box, {clamp: 6});
});
