let links = document.querySelectorAll(".navLinks ul li");
let links2 = document.querySelectorAll(".navLinks2 ul li");
let links3 = document.querySelectorAll(".navLinks3 ul li");
let lenis;
links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach((li) => {
            li.classList.remove("active");
        })
        link.classList.add("active");
    })
});

links2.forEach(function (link) {
    link.addEventListener("click", function () {
        links2.forEach((li) => {
            li.classList.remove("active");
        })
        link.classList.add("active");
    })
});

links3.forEach(function (link) {
    link.addEventListener("click", function () {
        links3.forEach((li) => {
            li.classList.remove("active");
        })
        link.classList.add("active");
    })
});

window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector("#Loading").classList.add("unshow");
        document.querySelector("#Home").classList.add("active");
    },500)
})