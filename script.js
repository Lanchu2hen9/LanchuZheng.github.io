document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdownMenu = item.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });
});
