const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#message-show").classList.remove("hide");

	document.querySelector("h1").innerHTML = message;
}

let linkInput = 0;

document.querySelector("#form").addEventListener("submit", (event) => {
	event.preventDefault();

	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#link-form").classList.remove("hide");

	const input = document.querySelector("#message-input");

	const encrypted = btoa(input.value);

	linkInput = document.querySelector("#link-input");
	linkInput.value = `${window.location}#${encrypted}`;
});

document.querySelector("#form2").addEventListener("submit", (event) => {
	event.preventDefault();

	linkInput.select();

	setTimeout(
		async () =>
			console.log(
				await window.navigator.clipboard.writeText(linkInput.value)
			),
		300
	);
});
