declare global {
	interface Project {
		name: string;
		date: string;
		skills: string[];
		alt: string;
		image: string;
		description: string;
		view?: string;
		code?: string;
	}

	interface Page {
		isScrolling: boolean;
		currentPageID: number;
	}

	interface OverlaySkills {
		showingSkills: boolean;
	}

	interface OverlayProject {
		showingProject: boolean;
		project: Project | undefined;
	}
}

export {};
