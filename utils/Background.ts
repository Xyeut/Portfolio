export function backgroundAnimations() {
	const background = document.querySelector(".background--animation");

	for (let i = 1; i <= 12; i++) {
		const square = document.createElement("div");

		square.classList.add("square");
		square.classList.add(`square-${i}`);

		background?.appendChild(square);
		continue;
	}
	return;
}
