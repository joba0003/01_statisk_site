const listContainer = document.querySelector(".produktliste");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));
function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="apparel">
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
      alt="bluetee"
    />
    <p class="overskrift">${product.productdisplayname}</p>
    <p>${product.articletype} | ${product.brandname}</p>
    <p>${product.price}</p>
    <a href="produkt.html">Read More</a>
  </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
