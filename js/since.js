let links = document.querySelectorAll(".navLinks ul li");
let links2 = document.querySelectorAll(".navLinks2 ul li");
let links3 = document.querySelectorAll(".navLinks3 ul li");
let nav = document.querySelector("nav");
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});
// Anchor Link Smooth Scroll with Lenis
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(2, -10 * t)
      });
    }
  });
});
// Start RAF
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


document.addEventListener('wheel', function (e) {
    if (e.target.closest('.pop-up')) {
        e.stopPropagation();
    }
}, { passive: false });

document.addEventListener('touchmove', function (e) {
    if (e.target.closest('.pop-up')) {
        e.stopPropagation();
    }
}, { passive: false });


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
        document.querySelector("#Since").classList.add("active");
    },500)
})
let currentScroll = 0;
window.addEventListener("scroll", () => {
        if (window.scrollY > currentScroll && window.scrollY > 5) {
            nav.classList.add("noShow");
        } else {
            nav.classList.remove("noShow");
        }
        currentScroll = window.scrollY;
});