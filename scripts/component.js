export default class CheckList extends HTMLUListElement {
	createdCallback() {
		// create status line -- TODO: use templating -- TODO: move into `attachedCallback`?
		let status = document.createElement("p");
		this.counter = document.createElement("span");
		this.counter.className = "badge";
		this.insertBefore(this.counter, this.firstChild); // XXX: invalid; needs separate wrapper

		this.update = this.update.bind(this);

		// monitor content changes
		let observer = new MutationObserver(this.update);
		observer.observe(this, { childList: true });
	}

	attachedCallback() {
		this.update();
		this.addEventListener("change", this.update);
	}

	detachedCallback() {
		this.removeEventListener("change", this.update); // XXX: should not be necessary!?
	}

	update() {
		let items = this.querySelectorAll("li input[type=checkbox]");
		let total = items.length;
		let checked = [].filter.call(items, node => node.checked).length;
		this.counter.textContent = `${checked} / ${total}`;
	}
}
