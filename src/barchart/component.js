export default class BarChart extends HTMLElement {
	createdCallback() {
		this.visualization = document.createElement("div");
	}

	attachedCallback() {
		var items = this.querySelectorAll("li");
		var sum = [].reduce.call(items, (memo, node) => memo + node.innerHTML, 0);

		this.visualization.innerHTML = sum;
		this.appendChild(this.visualization);
	}
}
