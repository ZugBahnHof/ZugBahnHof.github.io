export type Project = {
	name: string;
	description: string;
	url: string;
} & (
	| {
			icon: string;
			image?: never;
			imageAlt?: never;
	  }
	| {
			icon?: never;
			image: string;
			imageAlt: string;
	  }
);

export const PROJECTS: Project[] = [
	{
		name: "AlekSIS®²",
		description:
			"Participated in the development of the open source school information system.",
		image:
			"https://edugit.org/AlekSIS/official/AlekSIS-Core/-/raw/master/aleksis/core/static/img/aleksis-icon.svg?ref_type=heads&inline=false",
		imageAlt: "AlekSIS® Logo",
		url: "https://aleksis.org",
	},
	{
		name: "color-contrast",
		description:
			"A python library to calculate and modulate color contrasts according to WCAG2.1",
		url: "https://pypi.org/project/color-contrast",
		icon: "line-md:confirm-circle-twotone",
	},
	{
		name: "Vue Draggable Grid",
		description:
			"A library for Vue3 which allows drag&drop functionality in a grid context.",
		url: "https://yarnpkg.com/package?q=vue-draggable-grid&name=vue-draggable-grid",
		icon: "uim:vuejs-alt",
	},
	{
		name: "Color Tool",
		description:
			"Small tool to view and modify colors. Acts as a search engine in your browser.",
		url: "https://color-search.netlify.app",
		icon: "ion:color-filter-sharp",
	},
	{
		name: "Obsidian Wiener Linien Plugin",
		description:
			"Obsidian Plugin to view next trains at your stations in Vienna.",
		url: "https://github.com/ZugBahnHof/obsidian-plugin-wiener-linien",
		icon: "ph:train-duotone",
	},
	{
		name: "Egg Generator",
		description: "Fun side-project which draws eggs on the screen.",
		url: "https://zugbahnhof.github.io/egg-generator/",
		icon: "ph:egg-duotone",
	},
	{
		name: "Counter",
		description: "Big graphic countdown.",
		url: "https://zugbahnhof.github.io/JSCounter/",
		icon: "mdi:counter",
	},
	{
		name: "Vue3-Interactjs",
		description: "A library wrapping interact.js into Vue3 components.",
		url: "https://yarnpkg.com/package?q=vue3-interactjs&name=vue3-interactjs",
		icon: "simple-icons:interactjs",
	},
	{
		name: "Homepage of Héloïse Willand",
		description:
			"WordPress-based homepage of musician and photographer Héloïse Willand.",
		url: "https://heloisewilland.de",
		icon: "heloise",
	},
	{
		name: "Web Gyroscope Demo",
		description:
			"Fluid simulation side-project using the Web Device Motion API.",
		url: "/fluid-sim/",
		icon: "fluent-emoji-high-contrast:water-wave",
	},
	{
		name: "Candidate Guesser",
		description: "Game to guess th political party of European politicians.",
		url: "/candidate-guesser/",
		icon: "mdi:account-check-outline",
	},
];
