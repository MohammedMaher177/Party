let textArea = document.querySelector("textarea");
let sendMessage = document.querySelector("#sendMessage");
sendMessage.addEventListener("click", (e) => {
  e.preventDefault();
});
textArea.addEventListener("keyup", () => {
  let outLineChar = document.querySelector("#outLineChar");
  let char = 100 - textArea.value.length;
  outLineChar.innerHTML = char;
});
$(document).ready(function () {
  $(".loading").fadeOut(1000);
});

$("#open").click((e) => {
  let offestEle = $(e.target).offset().left;
  if (offestEle > 100) {
    $("nav").animate({ translate: "-100%" }, 1000, function () {
      document.querySelector("#open").innerHTML = "☰ open";
    });
  } else {
    $("nav").animate({ translate: "0%" }, 1000, function () {
      document.querySelector("#open").innerHTML = "☰ close";
    });
  }
});
$("#closeNav").click((e) => {
  $("nav").animate({ translate: "-100%" }, 1000);
});
let sec = 500;
$("#singerOne").click(() => {
  $("#pOne").slideToggle(sec);
  $("#pTwo").slideUp(sec);
  $("#pThree").slideUp(sec);
  $("#pFour").slideUp(sec);
});
$("#singerTwo").click(() => {
  $("#pTwo").slideToggle(sec);
  $("#pOne").slideUp(sec);
  $("#pThree").slideUp(sec);
  $("#pFour").slideUp(sec);
});
$("#singerThree").click(() => {
  $("#pThree").slideToggle(sec);
  $("#pOne").slideUp(sec);
  $("#pTwo").slideUp(sec);
  $("#pFour").slideUp(sec);
});
$("#singerFour").click(() => {
  $("#pFour").slideToggle(sec);
  $("#pOne").slideUp(sec);
  $("#pTwo").slideUp(sec);
  $("#pThree").slideUp(sec);
});

function getTimeOut() {
  let deadline = new Date("Apr 10, 2023 15:37:25").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#Dayes").innerHTML = days;
    document.querySelector("#Hours").innerHTML = hours;
    document.querySelector("#Minutes").innerHTML = minutes;
    document.querySelector("#Seconds").innerHTML = seconds;
  }, 1000);
}
getTimeOut();
