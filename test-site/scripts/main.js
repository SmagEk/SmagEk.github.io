var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/teddy-bears.jpg") {
    myImage.setAttribute("src", "images/teddy2.jpg");
  } else {
    myImage.setAttribute("src", "images/teddy-bears.jpg");
  }
}
  var myButton = document.querySelector("button");
  var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Плюшевые мишки крутые, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Плюшевые мишки крутые, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
