function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// PDF DOWNLOAD BUTTON
const viewPDF = document.querySelector("#pdf-btn");
viewPDF.addEventListener("click", () => {
  window.open("downloads/Kevin-Sandoval-Resume.pdf", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  // LinkedIn click
  const linkedinIcon = document.getElementById("linkedin-icon");
  linkedinIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/kevinrsandoval", "_blank");
  });

  // GitHub click
  const githubIcon = document.getElementById("github-icon");
  githubIcon.addEventListener("click", () => {
    window.open("https://github.com/KevinSandoval12", "_blank");
  });
});

// Form button
