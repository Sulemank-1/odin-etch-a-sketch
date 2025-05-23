// DOM variables
let container = document.querySelector(".container");
const containerWidth = 500;
let promptButton = document.querySelector(".promptButton");

container.style.width = `${containerWidth}px`;

//Prompt button event listener
promptButton.addEventListener("click", () => {
  container.innerHTML = "";
  let squarePerSide = parseInt(window.prompt("Enter sqaures per side"));
  gridMaker(squarePerSide);
  addHoverEffect();
});

// Grid generator function
function gridMaker(squarePerSide) {
  let n = squarePerSide;
  if (n <= 100) {
    for (let i = 1; i <= n * n; i++) {
      let divs = document.createElement("div");
      divs.setAttribute("class", "squareDiv");
      divs.style.width = `${containerWidth / n - 2}px`;
      divs.style.height = `${containerWidth / n - 2}px`;

      container.appendChild(divs);
    }
  } else {
    window.alert("Square above 100 per side not allowed");
  }
}

//Hover effect function
function addHoverEffect() {
  let squareDiv = document.querySelectorAll(".squareDiv");
  for (let i = 0; i < squareDiv.length; i++) {
    squareDiv[i].addEventListener("mouseenter", () => {
      squareDiv[i].style.backgroundColor = "blue";
      squareDiv[i].style.opacity = "0.5";
      squareDiv[i].style.transition = "all 0.9s";
    });
  }
}
