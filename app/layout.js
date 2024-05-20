import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "INDEX - Marc Maison Antiques",
	description: "The Marc Maison Gallery will be present at INDEX, the largest and most prestigious trade fairs for interior design and design in the Middle East",
	image: "/logo.png",
	url: "https://marc-maison-antiques.ae/",
	type: "website",
	locale: "en_US",
	site_name: "INDEX - Marc Maison Antiques",
	twitter_image: "/logo.png",
	twitter_image_alt: "Marc Maison Logo",
	twitter_title: "INDEX - Marc Maison Antiques",
	twitter_description: "The Marc Maison Gallery will be present at the largest and most prestigious trade fairs for interior design and design in the Middle East",
	og_title: "INDEX - Marc Maison Antiques",
	og_description: "The Marc Maison Gallery will be present at the largest and most prestigious trade fairs for interior design and design in the Middle East",
	og_image: "/logo.png",
	og_image_alt: "Marc Maison Logo",
	og_url: "https://marc-maison-antiques.ae/",
	og_type: "website",
	og_locale: "en_US",
	og_site_name: "INDEX - Marc Maison Antiques",
	og_author: "Marc Maison",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
