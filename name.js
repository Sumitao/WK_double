const name = getNameFromUrl() || "für euch alle";

const nameEle = document.getElementById("name");

function createNameSpans(name) {
  let nameArray = name.split("");
  let htmlString = "";
  nameArray.forEach((letter, index) => {
    htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;
  });
  nameEle.innerHTML = htmlString;
}

createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");
console.log(letterEles);

lightUpName(1);

function lightUpName(n) {
  let length = letterEles.length;
  for (let i = 0; i < length; i++) {
    let ele = letterEles[i];
    ele.className = (n + i) % 2 == 0 ? "green" : "red";
  }

  setTimeout(function () {
    lightUpName(n + 1);
  }, 500);
}

function getNameFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let urlName = urlParams.get("name");
  return urlName;
}
