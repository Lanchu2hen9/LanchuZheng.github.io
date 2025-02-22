document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdownMenu = item.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });
});

/*==================== Introduction Buttons ====================*/
const EmailBtn = document.querySelector("#EmailBtn");
const EmailIcon = EmailBtn.querySelector(".EmailIcon2");

document.addEventListener("DOMContentLoaded", (event) => {
  EmailBtn.addEventListener("mouseenter", () => {
    EmailIcon.src =
      "https://img.icons8.com/?size=100&id=69iII3ONUmxP&format=png&color=61b3b3";
  });

  EmailBtn.addEventListener("mouseleave", () => {
    EmailIcon.src =
      "https://img.icons8.com/?size=100&id=69iII3ONUmxP&format=png&color=343D3D";
  });
});

const LinkedInBtn = document.querySelector("#LinkedInBtn");
const LinkedInIcon = LinkedInBtn.querySelector(".LinkedInIcon");

document.addEventListener("DOMContentLoaded", (event) => {
  LinkedInBtn.addEventListener("mouseenter", () => {
    LinkedInIcon.src = "./indeximages/icons8-linkedin-128_Blue.png";
  });

  LinkedInBtn.addEventListener("mouseleave", () => {
    LinkedInIcon.src = "./indeximages/icons8-linkedin-128.png";
  });
});

const PortfolioBtn = document.querySelector("#PortfolioBtn");
const PortfolioIcon = PortfolioBtn.querySelector(".PortfolioIcon");

document.addEventListener("DOMContentLoaded", (event) => {
  PortfolioBtn.addEventListener("mouseenter", () => {
    PortfolioIcon.src = "./indeximages/icons8-folder-128_Blue.png";
  });

  PortfolioBtn.addEventListener("mouseleave", () => {
    PortfolioIcon.src = "./indeximages/icons8-folder-128.png";
  });
});
