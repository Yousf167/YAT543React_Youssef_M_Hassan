async function getProducts(url) {
      const products = await fetch(url, {
            method: "GET"
      }) 
      return await products.json()
}


const url = "https://fakestoreapi.com/products"


async function renderProducts() {
      const products = await getProducts(url);
      const productsDiv = document.getElementById("products");
      for(const product of products){
            const card = `
                  <div class="col-10 col-lg-3 g-4 p-3 rounded-5 shadow d-flex flex-column align-items-center justify-content-evenly">
                        <img class="mb-4" src="${product.image}" alt=""> 
                        <div class="row">
                              <div class="col-6">
                                    <p>${product.title}</p> 
                              </div>
                              <div class="col-6">
                                    <p>Price: ${product.price}$</p> 
                                    <p>Ratings: ${product.rating.rate} <span class="text-secondary">(${product.rating.count})</span></p> 
                              </div>
                        </div>
                  </div>
                  `
            productsDiv.innerHTML += card;
      }
}


document.addEventListener("DOMContentLoaded", renderProducts)
