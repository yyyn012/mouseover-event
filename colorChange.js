let test = document.getElementById("example");
let testList = document.querySelectorAll("#example > li > span");
console.log(testList);

function showTitle(event) {
  if (event.target.dataset.title) {
    const span = document.createElement("span");
    span.textContent = event.target.dataset.title;
    event.target.append(span);
    console.log(event.target.dataset.title);
  }
}

function removeTitle(event) {
  if (event.target.dataset.title) {
    event.target.lastElementChild.remove();
  }
}

test.addEventListener("mouseover", showTitle);
test.addEventListener("mouseout", removeTitle);
