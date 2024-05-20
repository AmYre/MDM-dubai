/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				headerg: "url('/header-g.jpg')",
				header: "url('/header.jpg')",
			},
			backgroundColor: {
				primary: "#E0CDA9",
				secondary: "#C1AB81",
			},
			textColor: {
				primary: "#E0CDA9",
				secondary: "#C1AB81",
				gold: "#C99716",
			},
			dropShadow: {
				shad: "0 0 10px black",
			},
			fontFamily: {
				bodoni: "Libre Bodoni;",
			},
		},
	},
	plugins: [],
};
