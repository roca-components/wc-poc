import ListCounter from "../list_counter/component";

export default class ListAccountant extends ListCounter {
	calculateResult() {
		return [].reduce.call(this.items, (memo, node) => {
			return memo + parseFloat(node.innerHTML);
		}, 0);
	}
}
