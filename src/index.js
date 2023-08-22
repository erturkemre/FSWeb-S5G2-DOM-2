import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const body = document.querySelector("body");
window.addEventListener("load", (e) => {
  body.style.background = "red";
});

const imges = document.querySelectorAll("img");
imges.forEach((s) => {
  s.addEventListener("mouseover", (event) => {
    s.style.filter = "grayscale(100%)";
  });
  s.addEventListener("mouseleave", (event) => {
    s.style.filter = "unset";
  });
});

const input = document.querySelector("input");
input.addEventListener("focus", (e) => {
  input.style.border = "10px solid red";
});

window.addEventListener("blur", (e) => {
  document.querySelector("body").style.background = "lightblue";
});
window.addEventListener("blur", (e) => {
  document.querySelector("body").style.background = "unset";
});

window.addEventListener("resize", (e) => {
  input.value = `${window.innerWidth} x ${window.innerHeight}`;
});

input.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    input.style.border = "10px solid blue";
  }
});
const img2 = document.getElementById("img2");
img2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("Text", e.target.id);
});

const img1 = document.getElementById("img1");
img1.addEventListener("drop", (e) => {
  let data = e.dataTransfer.getData("Text");
  e.target.src = document.getElementById(data).src;
  e.preventDefault();
});
img1.addEventListener("dragover", (e) => {
  e.preventDefault();
});
