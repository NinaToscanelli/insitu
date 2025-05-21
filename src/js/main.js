var items = document.querySelectorAll(".item");
var radios = document.querySelectorAll("input");

items.forEach(function (item, index) {
  item.addEventListener("click", function () {
    radios[index].checked = true;
  });
});
