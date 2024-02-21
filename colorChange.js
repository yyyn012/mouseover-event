let test = document.getElementById("example");
let testList = document.querySelectorAll("#example > li");

function showTitle(event) {
  if (event.target.dataset.title) {
    const span = document.createElement("span");
    event.target.append(span);
    event.target.style.color = "#ccc";
  }
}

function removeTitle(event) {
  if (event.target.dataset.title) {
    event.target.style.color = "#fff";
  }
}

test.addEventListener("mouseover", showTitle);
test.addEventListener("mouseout", removeTitle);
