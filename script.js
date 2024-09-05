const cube = document.getElementById("cube");

let clicked = false;
let xPos = 0;
let yPos = 0;
let lastXPos = 0;
let lastYPos = 0;

let currentRotateX = 0;
let currentRotateY = 0;

window.addEventListener("mousemove", (e) => {
	if (!clicked) {
		lastXPos = e.x;
		lastYPos = e.y;
		return;
	}
	xPos = e.x - lastXPos;
	yPos = e.y - lastYPos;

	const rotateX = ((currentRotateX + yPos) / window.innerHeight) * -1;
	const rotateY = (currentRotateY + xPos) / window.innerWidth;

	cube.style.transform = `rotateX(${rotateX}turn) rotateY(${rotateY}turn)`;
});

window.addEventListener("mousedown", () => {
	clicked = true;
});

window.addEventListener("mouseup", (e) => {
	clicked = false;
	currentRotateX = currentRotateX + yPos;
	currentRotateY = currentRotateY + xPos;
});
