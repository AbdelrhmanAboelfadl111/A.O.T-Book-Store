const openCartBtn = document.querySelectorAll("nav .navBtn .cart");
const cartBody = document.querySelector(".pop-up-cart");
const btnsAddToCart = document.querySelectorAll(".butns a .btnb");
const cartContentBodyBox = cartBody.querySelector(".pop-up-box-cart .box");
const btnGoToSearch = document.querySelector("nav .navBtn .search");
const linkGoToSearch = document.querySelector("nav .navLinks ul li:last-child");

btnGoToSearch.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "search.html";
});
linkGoToSearch.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "search.html";
});
window.addEventListener("load", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(item => addItemToCartDOM(item));
    Total();
    check();
});
function openNav(navName) {
    lenis?.stop();
    document.querySelector("."+navName).classList.add("show");
}
function closeNav(navName) {
    lenis?.start();
    document.querySelector("."+navName).classList.remove("show");
}
function stopClose(e) {
    e.stopPropagation();
}
function openCart() {
    
}
btnsAddToCart.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        let parentOfBtn = e.target.closest(".row");
        let productName = parentOfBtn.querySelector(".titleName h2").textContent;
        let productPrise = parentOfBtn.querySelector(".prise .priseNum span").textContent;
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
        
    })
});
function addItemToCartDOM(item) {
    cartContentBodyBox.insertAdjacentHTML("afterbegin", `
        <div class="child w-100 mt-4">
            <div class="imgCon">
                <img src="${item.img}" class="img-fluid">
            </div>
            <div class="itemInfo">
                <div class="itemName">
                    <p class="font1 text-white m-0">${item.name}</p>
                </div>
                <div class="itemPrise mt-1">
                    <p class="font1 color1 m-0">
                        LE<span class="text-white ms-1 me-1 fs-6">${item.prise}</span>
                        <sup class="color1 font1">00</sup>
                    </p>
                </div>
            </div>
            <div class="itemDelet">
                <img src="imgs/nav/wired-outline-185-trash-bin-hover-empty.gif" class="img-fluid">
            </div>
        </div>
    `);
}
cartContentBodyBox.addEventListener("click", function(e) {
    if (e.target.closest(".itemDelet")) {
        const item = e.target.closest(".child");
        deleteItem(item);
    }
});
function deleteItem(item) {
    // هات اسم المنتج من الديف
    const name = item.querySelector(".itemName p").textContent;

    // هات العربية من اللوجال
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // امسح المنتج اللي اسمه زي اللي اتضغط عليه
    cart = cart.filter(product => product.name !== name);

    // خزّن الجديد
    localStorage.setItem("cart", JSON.stringify(cart));

    // امسح العنصر من الـ DOM
    item.remove();

    // حدّث العداد والإجمالي
    check();
    Total();
}
function Total() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach((item) => {
        total += parseInt(item.prise); 
    });
    const totalSpan = cartContentBodyBox.querySelector(".total .priseNum p span");
    if (totalSpan) {
        totalSpan.textContent = total;
    }
}

function check() {
    let countItem = document.querySelector("nav .navBtn .cart span h2");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let counter = 0;
    counter = cart.length;
    countItem.textContent = counter;
}
openCartBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        cartBody.classList.add("show");
    })
})
function checkExist(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.some(item => item.name === productName);
}
const linkGoToLogin = document.querySelector("nav .navBtn div:first-child");
const TogglePass = document?.querySelectorAll("img.pass");
TogglePass.forEach((item) => {
    item.addEventListener("click",() => {
        let currentInput = item.closest(".emailCon").querySelector("input.password");
        if (currentInput.type === "password") {
            currentInput.type = "text";
        } else {
            currentInput.type = "password";
        }
    })
})

linkGoToLogin.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "login.html";
});

const linkToSearch = document.querySelector(".pop-up-nav ul li:last-child");
linkToSearch.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "search.html";
});