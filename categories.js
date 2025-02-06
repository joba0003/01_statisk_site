let category_list = document.querySelector(".category_list");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategory);
function showCategory(data) {
  console.log("mine data er:", data);
  const markup = data.map((element) => `<a href="produktliste.html?category=${element.category}">${element.category}</a>`).join("");
  category_list.innerHTML = markup;
}
