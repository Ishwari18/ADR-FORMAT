// third sectin layut hver stuff
const third = document.getElementById("third");
const navbar = document.getElementById("navbar");
const a = document.getElementById("a");
const ahead = document.getElementById("ahead");
const avid = a.firstElementChild;
const b = document.getElementById("b");
const bvid = b.firstElementChild;
const bhead = document.getElementById("bhead");
const c = document.getElementById("c");
const cvid = c.firstElementChild;
const chead = document.getElementById("chead");


a.onmouseover = function () {
  third.classList.add("red");
  this.play();
  ahead.classList.add("fntscaleup");
  bvid.classList.add("fade");
};
a.onmouseout = function () {
  third.classList.remove("red");
  this.pause();
  this.currentTime = 0;
  ahead.classList.remove("fntscaleup");
};
b.onmouseover = function () {
  third.classList.add("blue");
  this.play();
  bhead.classList.add("fntscaleup");
};
b.onmouseout = function () {
  third.classList.remove("blue");
  this.pause();
  this.currentTime = 0;
  bhead.classList.remove("fntscaleup");
};
c.onmouseover = function () {
  third.classList.add("green");
  this.play();
  chead.classList.add("fntscaleup");
};
c.onmouseout = function () {
  third.classList.remove("green");
  this.pause();
  this.currentTime = 0;
  chead.classList.remove("fntscaleup");
};

