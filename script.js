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

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        backToTop.style.display="block";
    }
    else{
        backToTop.style.display="none";
    }

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
});
