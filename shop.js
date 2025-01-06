var xhr = new XMLHttpRequest();

xhr.open("GET", "./shop.json", true);

var parent = document.getElementById("productContainer");
var firstbutton = document.getElementById("firstDesign");
var secondbutton = document.getElementById("secondDesign");

console.log(parent);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.response;
        console.log(data);
        var dataAfterParse = JSON.parse(data);
        console.log(dataAfterParse);
              
        for (let i of dataAfterParse) {
            
            var div = document.createElement("div");
            div.classList.add("product");
            
            div.innerHTML = `
            <div class="imageHover" >
            <img src="${i.image_path}" alt="" >
                    <div class="hoverContent" >
                      <div class="icons">
                                
        <a href="#"><button ><i class="fa-regular fa-heart"></i></button></a>
        <a href="./details.html?id=${i.id}">
             <button ><i class="fa-regular fa-eye"></i></button></a></div>
              <div class="addCard" >
                <!-- for you febe -->
             <a href="#">
            <p >
              <i class="fa-solid fa-cart-shopping"></i> add to card</p>
            </a>
              </div>
              </div>
           </div>
        </a>
                  <div class="underImage">
                 <a href="#">  
                   <p>${i.name}</p>
                  </a>
                    <span class="before">26.56%</span><span class="after">${i.price}$</span>
                  </div>
            `;
            parent.appendChild(div);
        }

      
        firstbutton.addEventListener("click", function () {
            this.style = "background-color: transparent; border: 1px solid black;";
            secondbutton.style = "none";

            parent.innerHTML = ""; 
            for (let i of dataAfterParse) {
                var div = document.createElement("div");
                div.classList.add("product");
              

                div.innerHTML = `
                <div class="imageHover" >
                <img src="${i.image_path}" alt="" >
                        <div class="hoverContent" >
                        <div class="icons">
                                
                        <a href="#"><button ><i class="fa-regular fa-heart"></i></button></a>
                        <a href="./details.html?id=${i.id}">
                             <button ><i class="fa-regular fa-eye"></i></button></a></div>
                  <div class="addCard" >
                    <!-- for you febe -->
                 <a href="#">
                <p >
                  <i class="fa-solid fa-cart-shopping"></i> add to card</p>
                </a>
                  </div>
                  </div>
               </div>
            </a>
                      <div class="underImage">
                     <a href="#">  
                       <p>${i.name}</p>
                      </a>
                        <span class="before">26.56%</span><span class="after">${i.price}$</span>
                      </div>
                `;
                parent.appendChild(div);
            }
        });

        secondbutton.addEventListener("click", function () {
            this.style = "background-color: transparent; border: 1px solid black;";
            firstbutton.style = "none";

            parent.innerHTML = ""; 
            for (let i of dataAfterParse) {
                var div = document.createElement("div");
                div.classList.add("anotherDesginContainer");
                div.innerHTML = `
                 

                <div class="leftSide">
              
                <a href="./details.html?id=${i.id}">  <img src="${i.image_path}" alt=""></a>
            </div>
                    <div class="rightSide">
                        <p class="title">${i.name}</p>
                        <span class="before">234.474$</span>
                        <span class="after">${i.price}$</span>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="description">
                            <p>${i.description}</p>
                        </div>
                        
      <div class="buttons" >

      <button title="add to card" ><i class="fa-solid fa-cart-shopping"></i></button>
 
      <button title="wishlist" ><i class="fa-regular fa-heart"></i></button>
 
      <button title="compare" ><i class="fa-solid fa-shuffle"></i></button>
 
    </div>
                    </div>
                `;
                parent.appendChild(div);
            }
        });
    }
};

xhr.send();
