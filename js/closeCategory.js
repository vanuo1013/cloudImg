function toggle(e) {
  var a = e.parentElement.nextSibling.style.display;
  "block" == a
    ? ((e.parentElement.nextSibling.style.display = "none"),
      (e.parentElement.nextSibling.style.height = "100%"),
      (e.className = e.className.replace("fa-chevron-down", "fa-chevron-left")))
    : ((e.parentElement.nextSibling.style.display = "block"),
      (e.className = e.className.replace("fa-chevron-left", "fa-chevron-down")));
}
for (
  var card_category_list = document.getElementsByClassName(
      "card-category-list child"
    ),
    item = document.getElementsByClassName("card-category-list-item"),
    i = 0;
  i < card_category_list.length;
  i++
)
  (card_category_list[i].style.display = "block"),
    (card_category_list[i].style.transition = "all 1s"),
    (card_category_list[i].previousSibling.firstChild.innerHTML +=
      '<i class="fa fa-chevron-down menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>');
