const books = [
  {
    id: 1,
    title: "SOLDIER",
    categoryId: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "99",
    Image: "imgs/war/Black White Simple Real Soldier Wattpad Book Cover.png",
  },
  {
    id: 2,
    title: "FAITH",
    categoryId: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "199",
    Image: "imgs/war/Brown Bold Action Movie Flyer.png",
  },
  {
    id: 3,
    title: "TOP SECRET",
    categoryId: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "299",
    Image: "imgs/war/Brown Rusty Mystery Novel Book Cover .png",
  },
  {
    id: 4,
    title: "THE CABIN",
    categoryId: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "499",
    Image: "imgs/war/Green & Red Simple Mystery Thriller Story Book Cover.png",
  },
  {
    id: 5,
    title: "THE RED HOUSE",
    categoryId: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "199",
    Image: "imgs/Horror/Red and Black Photo The Red House Book Cover .png",
  },
  {
    id: 6,
    title: "BEHIND THE DARK",
    categoryId: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "399",
    Image: "imgs/Horror/Black Thriller Ebook Cover Document.png",
  },
  {
    id: 7,
    title: "MANOR",
    categoryId: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "99",
    Image:
      "imgs/Horror/Red Black Illustrated Haunted Manor Horror Novel Book Cover.png",
  },
  {
    id: 8,
    title: "THE SILENCE",
    categoryId: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "499",
    Image: "imgs/Horror/Teal and Black The Silence Wattpad Book Cover.png",
  },
  {
    id: 9,
    title: "BOUNTY",
    categoryId: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "799",
    Image: "imgs/history/Brown And Black Rusty Mystery Novel Book Cover.png",
  },
  {
    id: 10,
    title: "WARRIOR",
    categoryId: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "199",
    Image:
      "imgs/history/Beige and Brown Rusty Vintage Style Mystery Novel Book Cover .png",
  },
  {
    id: 11,
    title: "RULER",
    categoryId: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "399",
    Image: "imgs/history/Brown Rusty Mystery Novel Book Cover.png",
  },
  {
    id: 12,
    title: "HUNTER",
    categoryId: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "99",
    Image: "imgs/history/Brown Vintage Style Mystery Novel Book Cover.png",
  },
  {
    id: 13,
    title: "THE SPACE",
    categoryId: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "799",
    Image:
      "imgs/ScienceFiction/Blue and White Cartoon Illustrative Novel Story Book Cover.png",
  },
  {
    id: 14,
    title: "TERRA",
    categoryId: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "199",
    Image:
      "imgs/ScienceFiction/Astronaut Floating in Space Science Fiction Book Cover.png",
  },
  {
    id: 15,
    title: "JOURNE",
    categoryId: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "399",
    Image:
      "imgs/ScienceFiction/Purple and White Modern Journey Wattpad Book Cover.png",
  },
  {
    id: 16,
    title: "WARRIOR",
    categoryId: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "99",
    Image:
      "imgs/ScienceFiction/Red and White Minimalist Warrior Book Wattpad Book Cover.png",
  },
  {
    id: 17,
    title: "TRAMEAL ACEE",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "995",
    Image: "imgs/FANTASY/FANTASY1.jpg",
  },
  {
    id: 18,
    title: "CHFRTTON",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "995",
    Image: "imgs/FANTASY/FANTASY2.png",
  },
  {
    id: 19,
    title: "SYDNEY ASHFORD",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "909",
    Image: "imgs/FANTASY/FANTASY3.png",
  },
  {
    id: 20,
    title: "THE MEDIEVAL SWORD",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "989",
    Image: "imgs/FANTASY/FANTASY4.png",
  },
  {
    id: 21,
    title: "THE WOODLAND",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "919",
    Image: "imgs/FANTASY/FANTASY5.png",
  },
  {
    id: 22,
    title: "RIVER STERLING",
    categoryId: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "986",
    Image: "imgs/FANTASY/FANTASY6.png",
  },
  {
    id: 23,
    title: "Cod Gray",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "986",
    Image: "imgs/MYSTERY/MYSTERY1.png",
  },
  {
    id: 24,
    title: "Thunder ",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "946",
    Image: "imgs/MYSTERY/MYSTERY2.png",
  },
  {
    id: 25,
    title: "Powder Ash",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "96",
    Image: "imgs/MYSTERY/MYSTERY3.png",
  },
  {
    id: 26,
    title: "Kelp ",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "980",
    Image: "imgs/MYSTERY/MYSTERY4.png",
  },
  {
    id: 27,
    title: "Heavy Metal",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "966",
    Image: "imgs/MYSTERY/MYSTERY5.png",
  },
  {
    id: 28,
    title: "RIVER STERLING",
    categoryId: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "986",
    Image: "imgs/MYSTERY/MYSTERY6.png",
  },
  {
    id: 29,
    title: "Shark",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "986",
    Image: "imgs/THRILLER/THRILLER1.png",
  },
  {
    id: 30,
    title: "THE PROCESS",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "976",
    Image: "imgs/THRILLER/THRILLER2.png",
  },
  {
    id: 31,
    title: "THE HOUSE OF DEATH",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "186",
    Image: "imgs/THRILLER/THRILLER3.png",
  },
  {
    id: 32,
    title: "THE DEATH",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "856",
    Image: "imgs/THRILLER/THRILLER4.png",
  },
  {
    id: 33,
    title: "ART OF BALANCE",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "986",
    Image: "imgs/THRILLER/THRILLER5.png",
  },
  {
    id: 34,
    title: "BLIND OF DEATH",
    categoryId: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1806",
    Image: "imgs/THRILLER/THRILLER6.png",
  },
  {
    id: 35,
    title: "THE IEGACY FALCON",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1871",
    Image: "imgs/adventory/adventory1.png",
  },
  {
    id: 36,
    title: "THE IEGACY FALCON 2",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1846",
    Image: "imgs/adventory/adventory2.png",
  },
  {
    id: 37,
    title: "THE BVRIİNG RAIN",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1826",
    Image: "imgs/adventory/adventory3.png",
  },
  {
    id: 38,
    title: "THE WARRIOR GAMES",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1806",
    Image: "imgs/adventory/adventory4.png",
  },
  {
    id: 39,
    title: "The Striped Stripper",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1846",
    Image: "imgs/adventory/adventory5.png",
  },
  {
    id: 40,
    title: "THE COASTAL WINDS",
    categoryId: 14,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: "1876",
    Image: "imgs/adventory/adventory6.png",
  },
];

let params = new URLSearchParams(window.location.search);
let categoryId = parseInt(params.get("category"));
let filteredBooks = books.filter((book) => book.categoryId == categoryId);
let currentCategory = categories.find((cat) => cat.id === categoryId);

let navText = document.querySelector(".navLogo h2");
if (navText) { 
  navText.textContent = `
  A.O.T & ${currentCategory?.name}
`;
}
let booksContainer = document.querySelector(".home .container .row");
filteredBooks.forEach((book) => {
  booksContainer.innerHTML += `
        <div class="col-md-3 column">
                    <div class="item w-100">
                        <a href="book.html?id=${book.id}">
                            <div class="box box2"style="background-image: url('${book.Image}')">
                                <div class="shape w-100 h-100">
                                    <img src="imgs/wired-outline-49-plus-circle-hover-swirl.gif" >
                                </div>
                                <div class="bodyText w-100">
                                    <h2 class="font1 color1">${book.title}</h2>
                                    <p class="font1 mb-2">${book.desc}</p>
                                    <p class="font1 mb-2"><span class="priseUnit">LE</span> ${book.price} <sup
                                            class="font1 color1">$</sup></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
    `;
});

let links = document?.querySelectorAll(".navLinks ul li");
let links2 = document.querySelectorAll(".navLinks2 ul li");
let links3 = document.querySelectorAll(".navLinks3 ul li");
let nav = document.querySelector("nav");
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});
// Anchor Link Smooth Scroll with Lenis
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(2, -10 * t),
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

document.addEventListener(
  "wheel",
  function (e) {
    if (e.target.closest(".pop-up")) {
      e.stopPropagation();
    }
  },
  { passive: false },
);

document.addEventListener(
  "touchmove",
  function (e) {
    if (e.target.closest(".pop-up")) {
      e.stopPropagation();
    }
  },
  { passive: false },
);

links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach((li) => {
      li.classList.remove("active");
    });
    link.classList.add("active");
  });
});

links2.forEach(function (link) {
  link.addEventListener("click", function () {
    links2.forEach((li) => {
      li.classList.remove("active");
    });
    link.classList.add("active");
  });
});

links3.forEach(function (link) {
  link.addEventListener("click", function () {
    links3.forEach((li) => {
      li.classList.remove("active");
    });
    link.classList.add("active");
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#Loading").classList.add("unshow");
    document?.querySelector("#Horror")?.classList.add("active");
  }, 500);
});
let currentScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > currentScroll && window.scrollY > 5) {
    nav.classList.add("noShow");
  } else {
    nav.classList.remove("noShow");
  }
  currentScroll = window.scrollY;
});
