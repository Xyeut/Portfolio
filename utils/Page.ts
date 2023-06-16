export function setPageSelected(page: string) {
	const previouslySelected = document.getElementsByClassName("page--selected")[0];
	const currentlySelected = document.getElementsByClassName(`${page}--indicator`)[0];

	if (!previouslySelected || !currentlySelected) return;

	previouslySelected.classList.remove("page--selected");
	currentlySelected.classList.add("page--selected");
}

function togglePageIndicator(page: Page, scrolling: boolean) {
	page.isScrolling = scrolling;
}

export function scrollHandler(page: Page) {
	let scrollTimer = -1;
	const indicators = ["xyeut", "knowledge", "projects", "contact"];

	window.addEventListener("scroll", (e) => {
		togglePageIndicator(page, true);

		const currentPage = indicators[page.currentPageID - 1];
		const element = document.getElementsByClassName(currentPage)[0] as HTMLElement;

		if (window.scrollY + window.innerHeight / 2 >= element?.offsetTop) {
			const nextIndicator = indicators[indicators.indexOf(currentPage) + 1];
			page.currentPageID = indicators.indexOf(nextIndicator) + 1;

			setPageSelected(currentPage);
		} else {
			let previousIndicator = indicators[indicators.indexOf(currentPage) - 1];
			if (!previousIndicator) previousIndicator = "contact";
			page.currentPageID = indicators.indexOf(previousIndicator) + 1;

			setPageSelected(previousIndicator);
		}

		if (scrollTimer !== -1) clearTimeout(scrollTimer);
		scrollTimer = window.setTimeout(() => togglePageIndicator(page, false), 500);
	});

	for (let i = 0; i < 13; i++) {
		const background = document.querySelector(".background");
		const square = document.createElement("div");
		if (!background) continue;

		square.classList.add("square", `square-${i + 1}`);
		background.appendChild(square);
	}
}
