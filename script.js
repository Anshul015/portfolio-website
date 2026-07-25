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
const cards = document.querySelectorAll(".portfolio-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

cards.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
