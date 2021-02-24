const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", genrateQuote);

genrateQuote();

// Usinc async await

async function genrateQuote() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};
	const res = await fetch(
		"http://api.quotable.io/random?tags=inspirational",
		config
	);

	const data = await res.json();

	quoteEl.innerHTML = data.content;
	authorEl.innerHTML = "- " + data.author;
}

//Using .then()
// function genrateQuote() {
// 	const config = {
// 		headers: {
// 			Accept: "application/json",
// 		},
// 	};
// 	fetch("http://api.quotable.io/random?tags=inspirational", config)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			quoteEl.innerHTML = data.content;
// 			authorEl.innerHTML = "- " + data.author;
// 		});
// }
