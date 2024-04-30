// locomotive js library used for smooth scrolling
// const scroll = new LocomotiveScroll({
// 	el: document.querySelector(".container"),
// 	smooth: true,
// });

let a = document.querySelector(".fixedbox");

b = document.querySelectorAll(".boxsixth");


b.forEach(function (val) {
	val.addEventListener("mouseleave", function () {
		a.style.display = 'none';
	});

	val.addEventListener("mouseenter", function () {
		a.style.display = 'inline';
		a.style.position='fixed';
		z = val.getAttribute("img-data");
		a.style.backgroundImage = `url(${z})`;
	});
});

let x=document.querySelectorAll(".videobox");
let vid=document.querySelector(".videofix");

x.forEach(function (val) {

val.addEventListener("mouseenter",function() {
	let xx=val.getAttribute("img-data");
    vid.setAttribute("src",xx);
	vid.style.display='inline';
});

val.addEventListener("mouseleave", function () {
		vid.style.display = 'none';
	});
});