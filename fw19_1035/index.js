import { navbar, footer, window } from "./componant/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let arr = document.querySelectorAll(".arr");
arr.forEach((el) => {
  el.addEventListener("mouseover", function () {
    add();
  });
  el.addEventListener("mouseout", function () {
    del();
  });
});
function add() {
  document.querySelector("#window").innerHTML = window();
}
function del() {
  document.querySelector("#window").innerHTML = null;
}
