const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset");
const blackButton = document.getElementById("black-btn")

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    document.body.style.backgroundColor = button.getAttribute("data-color");
    document.body.style.color = "black";
  });
});

// reset background color
resetButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});

// Black background color
blackButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

