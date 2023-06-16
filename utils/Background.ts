export function backgroundAnimations() {
	const background = document.querySelector(".background--animation");

	for (let i = 1; i <= 12; i++) {
		const square = document.createElement("div");

		square.classList.add("square");
		if (i > 1) square.classList.add(`square-${i}`);

		background?.appendChild(square);
		continue;
	}
	return;
}
