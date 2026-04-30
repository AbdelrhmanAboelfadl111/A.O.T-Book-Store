params = new URLSearchParams(window.location.search);
let bookId = parseInt(params.get("id"));
let book = books.find((b) => b.id == bookId);
currentCategory = categories.find((cat) => cat.id === book.categoryId);


navText = document.querySelector(".navLogo h2");
let relatedContentTitle = document.querySelector(".titleHead h2");
if (relatedContentTitle) { 
    relatedContentTitle.innerHTML = `
    
        A.O.T <span class="font2">&</span> ${currentCategory?.name}
    
    `;
}
if (navText) {
  navText.textContent = `
  A.O.T & ${book?.title}
`;
}

let Content = document.querySelector("header .container .row");
let relatedContent = document.querySelector(".relatedBooks .slideTrack");
let relatedBooks = books.filter(
  (b) => b.categoryId === book.categoryId && b.id != book.id,
);
Content.innerHTML = `
     <div class="col-md-6 column co1">
                    <div class="item w-100 h-100">
                        <div class="box imgCon">
                            <img src="${book.Image}" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 column col2">
                    <div class="item w-100 h-100 d-flex flex-column justify-content-center">
                        <div class="titleName w-100">
                            <h2 class="color1 font1 m-0">${book.title}</h2>
                        </div>
                        <div class="rate">
                            <div class="rateName">
                                <p class="font1 text-white m-0 me-2">Rate :</p>
                            </div>
                            <div class="rateStar">
                                <img src="imgs/star_12483780.png">
                                <img src="imgs/star_12483780.png">
                                <img src="imgs/star_12483780.png">
                                <img src="imgs/star_12483780.png">
                            </div>
                        </div>
                        <div class="prise w-100">
                            <div class="priseText">
                                <p class="font1 text-white m-0">Prise :</p>
                            </div>
                            <div class="priseNum ">
                                <p class="font1 color1 m-0 ms-2 me-2">LE</p><span class="text-white me-1">${book.price}</span> <sup
                                    class="color1 font1">00</sup>
                            </div>
                        </div>
                        <div class="butns">
                            <a>
                                <button class="btnb">
                                    <img src="imgs/shopping-cart.gif" class="mb-1 me-1 position-relative z-3">
                                    <p class="font1 m-0 me-2 fs-6">Add To Cart</p>
                                </button>
                            </a>
                        </div>
                        <div class="dis">
                            <p class="font1 text-white m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repudiandae molestiae,
                                harum corporis dicta asperiores consequatur, natus tempora voluptates doloribus totam
                                cupiditate illum
                                aspernatur qui autem ratione odit? Corporis, architecto aliquam.</p>
                        </div>
                    </div>
                </div>

`;

relatedBooks.forEach((item) => {
  relatedContent.innerHTML += `
    
        <a href="book.html?id=${item.id}">
            <div class="shape">
                <img src="imgs/wired-outline-49-plus-circle-hover-swirl.gif">
            </div>
            <img src="${item.Image}" class="img-fluid">
        </a>

    `;
});

// Add to Cart Button Handler
const addToCartBtn = document.querySelector(".butns a .btnb");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let parentOfBtn = document.querySelector("header .container .row");
    let productName = parentOfBtn.querySelector(".titleName h2").textContent;
    let productPrise = parentOfBtn.querySelector(
      ".prise .priseNum span",
    ).textContent;
    let productImg = parentOfBtn.querySelector(".co1 .box img").src;

    if (checkExist(productName)) {
      alert("هذا المنتج مضاف بالفعل في السلة");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = {
      img: productImg,
      name: productName,
      prise: productPrise,
    };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    addItemToCartDOM(product);
    check();
    Total();
    alert("تم إضافة المنتج للسلة بنجاح");
  });
}
