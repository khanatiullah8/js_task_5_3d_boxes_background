var control = document.querySelector(".control");
var squareBox = document.querySelector(".square-box");

for (var i = 1; i <= 15; i++) {
  squareBox.innerHTML += '<span class="square-tile">tile</span>';
}

var squareTile = document.querySelectorAll(".square-tile");

// add "background position values" to "squareTile object";
function bgPosition(x, y, b) {
  var a = 0;
  for (var i = x; i < y; i++) {
    squareTile[i].style.backgroundPosition = a + "% " + b + "%";
    a += 33.33;
  }
}

// "loop" to call "bgPosition() function" 4 times
(function () {
  var x = 0, y = 4, b = 0;
  for (var z = 1; z <= 4; z++) {
    bgPosition(x, y, b);
    x += 4;
    y += 4;
    b += 33.33;
  }
})();

// click event on control button
control.addEventListener("click", function () {
  control.classList.add("control-active");

  setTimeout(function () {
    control.classList.remove("control-active");
  }, 100);

  for (var tile of squareTile) {
    tile.classList.toggle("square-tile-active");
  }

  squareBox.classList.toggle("square-box-active");
});