// Animation simple quand la page charge
document.addEventListener("DOMContentLoaded", function(){

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease";

        observer.observe(section);

    });

});

// Toggle menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});

// Lightbox pour projets
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.btn-small').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const imgSrc = btn.getAttribute('data-target');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click',()=>{
    lightbox.style.display = 'none';
});

// fermer en cliquant en dehors de l'image
lightbox.addEventListener('click', e=>{
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});