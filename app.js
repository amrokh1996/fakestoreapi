const div = document.getElementById("product");
let productArray=[];

productData()



async function productData(){
await fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let product = new Product(data[i]);
      productArray.push(product);
    }
    
  })
  .catch(error => {
    console.error(error);
  });


  productArray.map(product =>{
    div.innerHTML+= `
    <div class="thumb-wrapper">
    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
    <div class="img-box">
        <img src="${product.image}" class="img-fluid" alt="">									
    </div>
    <div class="thumb-content">
        <h4>${product.category}</h4>									
        <div class="star-rating">
            <ul class="list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            </ul>
        </div>
        <p class="item-price"><strike>$${product.price}</strike> <b>$${product.price-Math.floor((product.price)*0.1)}</b></p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>						
</div>`
  })

}

class Product{
  constructor(data){
    this.category = data.category,
    this.image = data.image,
    this.price = data.price,
    this.description = data.description
  }
}





  





 


