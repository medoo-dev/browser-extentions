let lis = document.querySelectorAll(".filter");
let sections = document.querySelectorAll(".extension-card");
let checks = document.querySelectorAll("input[type='checkbox']");
let shuffle;

let filteredSections;

lis.forEach((li, i) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    shuffle = li.dataset.type;
    filteredSections = Array.from(sections).filter((sec) => {
      return sec.classList.contains(shuffle);
    });
    shuffle = filteredSections;
    sections.forEach((sec) => {
      sec.style.display = "none";
    });
    shuffle.forEach((sec) => {
      sec.style.display = "flex";
      console.log(sec);
    });
    let error = document.querySelector(".error");
    shuffle.length == 0
      ? (error.style.display = "block")
      : (error.style.display = "none");
  });
});

checks.forEach((check, i) => {
  let section = sections[i];
  section.classList.add("all");
  check.addEventListener("click", (e) => {
    if (check.checked) {
      section.classList.remove("inactive");
      section.classList.add("active");
    } else {
      section.classList.remove("active");
      section.classList.add("inactive");
    }
  });
});

let remove = document.querySelectorAll(".remove-btn");

remove.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
  });
});

let themeToggle = document.getElementById("toggle");

let link = document.querySelector("link[rel='stylesheet'");

themeToggle.addEventListener(
  "click",
  function () {
    let image = themeToggle.children[0];
    let sheme = themeToggle.dataset.sheme;
    if (sheme === "light") {
      image.src = "assets/images/icon-sun.svg";
      link.href = "./css/dark.css";
      themeToggle.dataset.sheme = "dark";
    } else if (sheme === "dark") {
      image.src = "assets/images/icon-moon.svg";
      link.href = "./css/light.css";
      themeToggle.dataset.sheme = "light";
    }
  },
  true
);
