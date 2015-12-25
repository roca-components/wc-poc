define(['../utils'], function(utils) {

  var proto = Object.create(HTMLSelectElement.prototype);

  function update(select, shadow) {

    shadow.innerHTML = '';
    shadow.appendChild( utils.createSome('style', {}, 'li.selected { color: red; }'));
    var ul = utils.createSome("ul");
    shadow.appendChild(ul);

    [].forEach.call(select.getElementsByTagName("option"), function (opt) {
      var item = utils.createSome('li', { class: opt.selected ? "selected" : "" }, opt.innerHTML);
      item.addEventListener("click", function () {
        opt.selected = !opt.selected;
        update(select, shadow);
      });
      ul.appendChild(item);
    });
  }

  proto.createdCallback = function () {

    var select = this;

    var container = utils.createSome("div");
    select.parentNode.insertBefore(container, select);
    container.appendChild(select);

    var shadow = container.createShadowRoot();

    update(select, shadow);


    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        console.log(mutation);
        if (mutation.type === "childList") {
          update(select, shadow);
        }
      });
    });

    var config = { attributes: true, childList: true, characterData: true, subtree: true };

    observer.observe(select, config);
  };

  return document.registerElement('x-multiselect', {
    prototype: proto,
    extends: 'select'
  });

});
