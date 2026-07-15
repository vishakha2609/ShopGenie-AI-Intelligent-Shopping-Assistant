// ================= NAVBAR SCROLL EFFECT =================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});

// ================= BUY NOW BUTTON =================
const buyButtons = document.querySelectorAll(".product-card button");
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for choosing ShopEase! Your product has been selected.");
    });
});

// ================= SCROLL REVEAL ANIMATION =================

const sections = document.querySelectorAll(
    ".category-card, .product-card, .about-container div"
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},
{
     threshold:0.2
});
sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// ================= SCROLL TO TOP BUTTON =================
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }
});

topButton.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});