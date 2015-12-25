define([], function () {

  return {

    createSome: function (type, attrs, inner) {
      var elm = document.createElement(type);
      if (attrs) {
        Object.keys(attrs).forEach(function(attr) {
           elm.setAttribute(attr, attrs[attr]);
        });
      }
      if (inner) {
        elm.innerHTML = inner;
      }
      return elm;
    }

  };

});