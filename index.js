// detcting button press

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML =  this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
  });
}

// detecting the keyboard pressed

  document.addEventListener("keypress", sound);
  function sound(){
    makeSound(event.key);
    buttonAnimation(event.key);
  }

    function makeSound(key){
      switch (key) {
            case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;


            case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

            case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;

            case "d":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;

            case "j":
            var tom4 = new Audio("sounds/snare.mp3");
            tom4.play();
            break;

            case "k":

            var tom5 = new Audio("sounds/snare.mp3");

            tom5.play();
            break;

            case "l":
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
            break;

    }
    }

// for animating the buttons and asa well as we set a timeout for that button interval

    function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");

      setTimeout(function() {
        activeButton.classList.remove("pressed");
      },200);

    }
