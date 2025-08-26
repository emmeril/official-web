document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchCoverage");
  const list = document.getElementById("coverageList");

  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(list.getElementsByTagName("li")).forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(filter) ? "" : "none";
    });
  });
});
