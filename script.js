// Alternar Modo Escuro/Claro
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '✧';
});

// Scroll Reveal - Animações Suaves
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
});

// Slider Simples
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
