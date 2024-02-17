let test = document.getElementById("example");
let testList = document.querySelector("#example > li");

function mouseOver(event) {
  event.target.style.color = "#c2c2c2";
  const Hello = testList.children[1];
  Hello.innerText = "hello";
}

function mouseOut(event) {
  event.target.style.color = "#fff";
}

test.addEventListener("mouseover", mouseOver);

test.addEventListener("mouseout", mouseOut);
