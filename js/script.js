let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    const mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "../css/main.css";
  }
  if (mode === "blue") {
    document.getElementById("theme-style").href = "../css/blue-theme.css";
  }
  if (mode === "orange") {
    document.getElementById("theme-style").href = "../css/orange-theme.css";
  }
  if (mode === "red") {
    document.getElementById("theme-style").href = "../css/red-theme.css";
  }

  localStorage.setItem("theme", mode);
}
