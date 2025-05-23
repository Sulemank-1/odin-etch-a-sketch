let container = document.querySelector(".container");
let containerWidth = 500;
let squarePerSide = 0;

container.style.width = `${containerWidth}px`;

function gridMaker(squarePerSide) {
  if (squarePerSide <= 100) {
    let n = squarePerSide;
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

squarePerSide = window.prompt("Enter sqaures per side");

gridMaker(squarePerSide);
