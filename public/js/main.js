var birdInput = document.getElementById("bird");
var birdInputValue = birdInput.value;
var birdSubmitButton = document.getElementById("bird-submit");

birdSubmitButton.addEventListener("click", function(event) {

    event.preventDefault();
    console.log(birdInputValue);
    console.log(birdInput.value);
    console.log(birdSubmitButton.value);


})