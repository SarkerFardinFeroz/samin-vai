//Smooth Scrolling function
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills");
const educationSection = document.querySelector(".education");
const contactSection = document.querySelector(".contacts");

document.querySelector(".about-link").addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".skills-link").addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".education-link").addEventListener("click", () => {
  educationSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-link").addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-link2").addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
