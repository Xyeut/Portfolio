export function goToContact() {
	const contact = document.getElementsByClassName("contact")[0];
	if (!contact) return;

	contact.scrollIntoView({ behavior: "smooth" });
}
