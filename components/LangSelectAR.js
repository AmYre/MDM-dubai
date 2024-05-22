"use client";

export default function LangSelectAR() {
	const handleLanguageChange = (event) => {
		console.log(event.target.value);
		if (event.target.value == "en") {
			window.location.href = "/";
		} else {
			window.location.href = "/dubai";
		}
	};

	return (
		<select className="w-12 text-black relative left-64" onChange={handleLanguageChange}>
			<option id="lang" value="ar" default>
				AR
			</option>
			<option value="en">EN</option>
		</select>
	);
}
