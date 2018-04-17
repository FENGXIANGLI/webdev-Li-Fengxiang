//IIFE
//Immediately Invoked Function Expression
(function () {
  $(init);

  function init() {
    var h1 = $("h1");

    h1.css("color", "red");

    h1.draggable();

    $(".sort-me").sortable().draggable();
  }
})();
