// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	modules: ["nuxt-icon", "nuxt-swiper"],

	app: {
		head: {
			title: "Xyeut | Portfolio",
			htmlAttrs: { lang: "en" },
			meta: [
				{
					name: "description",
					content:
						"As a skilled software engineer, my area of expertise involves coming up with original solutions and writing effective code.  I bring a thorough approach, a problem-solving mindset, and a passion for creating seamless user experiences to web applications, mobile development, and beyond. Learn how my experience can advance your digital projects.",
				},
				{
					property: "og:title",
					content: "Xyeut Portfolio",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:image",
					content: "https://i.imgur.com/ubA678R.png",
				},
				{
					property: "og:description",
					content:
						"As a skilled software engineer, my area of expertise involves coming up with original solutions and writing effective code.  I bring a thorough approach, a problem-solving mindset, and a passion for creating seamless user experiences to web applications, mobile development, and beyond. Learn how my experience can advance your digital projects.",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "icon", type: "image/x-icon", href: "/xyeut.png" },
			],
		},
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/functions.scss";',
				},
			},
		},
	},
	css: ["@/assets/scss/fonts.scss", "@/assets/scss/default.scss"],
});
