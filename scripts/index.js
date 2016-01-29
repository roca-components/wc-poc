import CheckList from "./component";

document.registerElement("check-list", {
	prototype: CheckList.prototype,
	extends: "ul"
});
