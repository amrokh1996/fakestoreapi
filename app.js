const div = document.getElementById("product");
let productArray=[];




fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.map(data =>{
      div.innerHTML+= `
      <div class="thumb-wrapper">
      <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
      <div class="img-box">
          <img src="${data.image}" class="img-fluid" alt="">									
      </div>
      <div class="thumb-content">
          <h4>${data.category}</h4>									
          <div class="star-rating">
              <ul class="list-inline">
                  <li class="list-inline-item"><i class="fa fa-star"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
              </ul>
          </div>
          <p class="item-price"><strike>$${data.price}</strike> <b>$${data.price-Math.floor((data.price)*0.1)}</b></p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>						
  </div>`
    })

  })
  .catch(error => {
    console.error(error);
  });

  





 


