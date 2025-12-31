// Configuração de Animação de Entrada
ScrollReveal().reveal('.reveal', {
    distance: '80px',
    duration: 2500,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    interval: 150
});

// Toggle Dark/Light Mode
const modeBtn = document.getElementById('mode-toggle');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀' : '✧';
});

// Navbar Transparente ao Scroll
window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.background = "var(--bg)";
        nav.style.padding = "20px 5%";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "30px 5%";
    }
};

// Log de SEO básico
console.log("LILYAN SEO: Website carregado com foco em High-End Jewelry.");
