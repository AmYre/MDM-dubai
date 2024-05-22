import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import locales from "../locales";
import LangSelectAR from "@/components/LangSelectAR";

export default function Dubai() {
	let lang = "ar";
	return (
		<>
			<Head>
				<title>{locales["title"][lang]}</title>
				<meta name="description" content={locales["description"][lang]} />
			</Head>

			<main className="flex min-h-screen flex-col">
				<header className="h-[512] flex flex-col bg-header bg-cover bg-no-repeat text-white z-[0]">
					<LangSelectAR />
					<a href="https://hospitality-interiordesignshow.com/newfront/exhibitor/galerie-marc-maison" target="_blank" rel="noopener noreferrer">
						<div className="relative flex justify-between p-8">
							<h1 className="text-7xl font-bold drop-shadow-shad">INDEX</h1>
							<Image src="/losange.png" className="w-[150px] md:w-[250px] absolute left-[40vw] top-[45px] z-[-1]" alt="DUBAI WORLD TRADE CENTRE" width={512} height={512} priority />
							<Link href="https://www.marcmaison.com/">
								<Image src="/logo.png" className="max-w-[100px] md:max-w-[150px]" alt="Marc Maison Logo" width={512} height={512} priority />
							</Link>
						</div>
						<div className="text-center text-2xl font-bold drop-shadow-shad">4 - 6 JUNE 2024 | 10:00 : 18:00 DAILY</div>
						<div className="text-center text-2xl font-bold drop-shadow-shad mt-8 mb-8">DUBAI WORLD TRADE CENTRE</div>
					</a>
				</header>
				<section className="w-full flex justify-center">
					<div className="max-w-[1280px]">
						<h2 className="relative left-[100px] font-bodoni text-2xl w-24 text-gold mt-4">
							<hr className="bar"></hr>
							Marc <span className="font-bold">MAISON</span> <span className="italic">Antiques</span>
						</h2>
						<div className="flex justify-center mt-8">
							<Link href="https://www.marcmaison.com/" className="bg-primary text-2xl px-4 py-2 hover:text-white hover:text-bold hover:scale-105 transition-all duration-300">
								{locales["discover"][lang]}
							</Link>
							<div className="absolute right-0 w-[50vw] border-t-[3px] border-t-[#E0CDA9]"></div>
						</div>
						<div className="flex flex-col gap-6 mt-8 text-center">
							<div className="flex flex-wrap justify-center items-center gap-6">
								<Link href="https://www.marcmaison.com/antique-lightings-lamps-chandelier" className="glass text-2xl text-right">
									<Image src="/light.png" className="" alt="antique-lightings-lamps-chandelier" width={250} height={250} />
									<p className="text-center">{locales["light"][lang]}</p>
								</Link>
								<Link href="https://www.marcmaison.com/Fireplace-Mantels" className="glass text-2xl text-right">
									<Image src="/fire.png" className="" alt="Fireplace-Mantels" width={250} height={250} />
									<p className="text-center">{locales["fire"][lang]}</p>
								</Link>
								<Link href="https://www.marcmaison.com/objets-d-art-19th-century-paintings-and-furniture" className="glass text-2xl text-right">
									<Image src="/mantels.png" className="" alt="objets-d-art-19th-century-paintings-and-furniture" width={250} height={250} />
									<p className="text-center">{locales["mantels"][lang]}</p>
								</Link>
							</div>
							<div className="flex flex-wrap justify-center items-center gap-6">
								<Link href="https://www.marcmaison.com/19th-century-french-furniture" className="glass text-2xl text-right">
									<Image src="/furn.png" className="" alt="19th-century-french-furniture" width={250} height={250} />
									<p className="text-center">{locales["furn"][lang]}</p>
								</Link>
								<Link href="https://marcmaison.art/" className="relative bg-black py-2 rounded-sm md:top-[-35px] hover:scale-110 transition-all duration-300">
									<Image src="/art.png" className="" alt="MarcMaison.Art website" width={250} height={250} />
									<p className="text-white text-center">{locales["art"][lang]}</p>
								</Link>
								<Link href="https://www.marcmaison.com/Architectural-Exterior" className="glass text-2xl text-right">
									<Image src="/ext.png" className="" alt="Architectural Exterior" width={250} height={250} />
									<p className="text-center">{locales["ext"][lang]}</p>
								</Link>
							</div>
							<div className="flex flex-wrap justify-center items-center gap-6">
								<Link href="https://www.marcmaison.com/Fireplace-Accessories" className="glass text-2xl text-right">
									<Image src="/access.png" className="" alt="Fireplace Accessories" width={250} height={250} />
									<p className="text-center">{locales["access"][lang]}</p>
								</Link>
								<Link href="https://www.marcmaison.com/visite-virtuelle" className="glass text-2xl text-right">
									<Image src="/tour.png" className="" alt="visite virtuelle" width={250} height={250} />
									<p className="text-center">{locales["tour"][lang]}</p>
								</Link>
								<Link href="https://www.marcmaison.com/Interior-Decoration" className="glass text-2xl text-right">
									<Image src="/int.png" className="" alt="Interior Decoration" width={250} height={250} />
									<p className="text-center">{locales["int"][lang]}</p>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<footer className="w-full font-bodoni flex flex-col mt-8 ">
					<div className="w-full bg-primary py-1 flex justify-center">
						<div className="clamp flex flex-row justify-between p-4">
							<div>
								<p>{locales["contact"][lang]}</p>
								<p>{locales["phone"][lang]}</p>
								<p>{locales["numero"][lang]}</p>
								<p>{locales["mail"][lang]}</p>
								<Link href="https://marc-maison.fr/contact/" className="text-gold">
									{locales["use"][lang]}
								</Link>
							</div>
							<div className="text-right">
								<p>{locales["info1"][lang]}</p>
								<p>{locales["info2"][lang]}</p>
								<p>{locales["info3"][lang]}</p>
								<p>Dubai UAE</p>
							</div>
						</div>
					</div>
					<div className="w-full bg-secondary py-1 flex justify-center">
						<div className="clamp flex flex-row justify-between px-4">
							<p>Copyright © 2007-2024 Galerie Marc Maison</p>
							<p>
								<Link href="https://www.marcmaison.com/company/privacypolicies">Privacy policies</Link> -
								<Link href="https://www.marcmaison.com/company/salesconditions"> Sales conditions</Link> - <Link href="https://marc-maison.fr/contact/">Contact</Link>
							</p>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
