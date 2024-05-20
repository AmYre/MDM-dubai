"use client";

export default function LangSelect() {
	const handleLanguageChange = (event) => {
		console.log(event.target.value);
		if (event.target.value == "en") {
			window.location.href = "/";
		} else {
			window.location.href = "/dubai";
		}
	};

	return (
		<select className="w-12 text-black" onChange={handleLanguageChange}>
			<option id="lang" value="en">
				EN
			</option>
			<option value="ar">AR</option>
		</select>
	);
}
