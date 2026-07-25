const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

sections.forEach(section=>{
observer.observe(section);
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};

// Menu link click karne ke baad close
document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove("active");
    };
});
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("loader-hide");
  }, 1500);
};
