let test = document.getElementById("example");

function mouseOver(event) {
  event.target.style.color = "#c2c2c2";
}

function mouseOut(event) {
  event.target.style.color = "#fff";
}

test.addEventListener("mouseover", mouseOver);

test.addEventListener("mouseout", mouseOut);
