export function toggleOverlaySkills(overlay: OverlaySkills) {
	overlay.showingSkills = !overlay.showingSkills;

	if (overlay.showingSkills) document.body.classList.add("overlayShown");
	else document.body.classList.remove("overlayShown");
}

export function toggleOverlayProject(project: OverlayProject, data: Project) {
	project.showingProject = !project.showingProject;

	if (project) project.project = data;
	if (project?.showingProject) document.body.classList.add("overlayShown");
	else document.body.classList.remove("overlayShown");
}
