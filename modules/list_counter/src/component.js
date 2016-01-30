export default class ListCounter extends HTMLElement {
	createdCallback() {
		let list = this.querySelector("ul");
		this.items = list.querySelectorAll("li"); // TODO: move into `attachedCallback`?

		this.counter = document.createElement("span");
		this.counter.className = "badge";
		this.appendChild(this.counter); // TODO: move into `attachedCallback`?
	}

	attachedCallback() {
		this.counter.innerHTML = this.calculateResult();
	}

	calculateResult() {
		return this.items.length;
	}
}
