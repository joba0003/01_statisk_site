let productListContainer = document.querySelector(".container_product");
const productId = new URLSearchParams(window.location.search).get("id");
/* let productId = 1165;
let container_product = document.querySelector(".container_product");
 */
fetch(`https://kea-alt-del.dk/t7/api/products/${productListContainer.id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const markup = data
      .map(
        `
<div class="bluetee">
<img
  src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
  alt="bluetee"
/>
</div>
<div class="text">
<h1>Product Information</h1>
<h2>Model name</h2>
<p>${data.brandname} - ${data.productdisplayname}</p>
<h2>Color</h2>
<p>${data.basecolor}</p>
<h2>Inventory number</h2>
<p>${data.id}</p>
</div>
<div class="box_1">
<h1 class="overskrift_product">
${data.brandname} - ${data.productdisplayname}</h1>
<p> ${data.brandname} | ${data.articletype}</p>
<div class="box_buy">
  <p>Choose a size</p>
  <select id="mySelect" size="1">
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
  </select>
   <h2>Price</h2>
<p>${data.price}</p>
</div>
</div> `
      )
      .join("");
    productListContainer.innerHTML = markup;
  });

/* class=`saleLabel ${data.soldout && "soldout"}` */
/* class = `bluetee ${data.discount ? "onSale" : ""}` */
