const btn = document.querySelector(".mode");

btn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-theme");
  const textMode = document.querySelector(".text_mode");
  const icon = document.querySelector(".icon");
  if (textMode.innerHTML === "DARK") {
    icon.src = "/assets/icon-sun.svg";
    textMode.innerHTML = "LIGHT";
  } else {
    textMode.innerHTML = "DARK";
    icon.src = "/assets/icon-moon.svg";
  }
});
