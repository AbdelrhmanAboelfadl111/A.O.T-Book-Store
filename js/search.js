window.addEventListener("load", function () {
  search();
});

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

function search() {
  input?.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    results.innerHTML = ""; // نفضي النتائج أولاً
    if (query === "") {
      document.querySelector(".resCon").classList.add("d-none");
      return;
    }
    document.querySelector(".resCon").classList.remove("d-none");
    books.forEach((book) => {
      if (book.title.toLowerCase().includes(query)) {
        const a = document.createElement("a");
        a.href = `book.html?id=${book.id}`;
        a.textContent = book.title;
        results.appendChild(a);
      }
    });
  });
}
search();
