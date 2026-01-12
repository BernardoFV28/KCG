document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    // 2. Animação ao rolar (Scroll Reveal)
    const observerOptions = {
        threshold: 0.2 // A animação dispara quando 20% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const targetDate = new Date("Apr 19, 2026 00:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "É HOJE!";
        }
    }, 1000);

});