/*var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
	if(character.classList != "animate") {
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
	}, 470);
}

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if(name == "Space") {
	  jump();
  }
}, false);

var checkDead = setInterval(function() {
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	if(blockLeft<60 && blockLeft>0 && characterTop>=390) {
		block.style.animation = "none";
		block.style.display = "none";
		window.location.reload();
	}
}, 10)*/
