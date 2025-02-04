const listContainer = document.querySelector(".produktliste");
const mycategory = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));
function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>

        <div class="apparel apparel_onSale">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="bluetee" />
          <p class="overskrift">${product.productdisplayname}</p>
          <p>${product.articletype} | ${product.brandname}</p>
          <p>${product.price}</p>
          <div class="discounted">
            <p>NOW DKK 1560,-</p>
            <p class="percent">-34%</p>
          </div>
          <a href="produkt.html">Read More</a>
        </div>
        <div class="apparel apparel_soldOut">
          <div class="soldout">Sold Out</div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp" alt="bluetee" />

          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>
        <div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>
        <div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>

        <div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>
        <div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>
        <div class="apparel">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="bluetee" />
          <p class="overskrift">Sahara Team India Fanwear Round Neck Jersey</p>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="produkt.html">Read More</a>
        </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

/* const markup = product 
.map {(product) =>} */
