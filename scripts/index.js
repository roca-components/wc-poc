import CheckList from "./component";

export default CheckList;

document.registerElement("check-list", {
	prototype: CheckList.prototype,
	extends: "ul"
});
