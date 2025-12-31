// Ativar animações ao fazer scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Dark Mode
const modeBtn = document.getElementById('mode-toggle');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀' : '✧';
});

// Forçar ativação da hero no carregamento
window.onload = () => {
    document.querySelector('.hero')?.classList.add('active');
};
