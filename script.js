// Função para aplicar o modo guardado ao carregar a página
const applySavedMode = () => {
    const savedMode = localStorage.getItem('theme');
    const modeBtn = document.getElementById('mode-toggle');
    
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        if (modeBtn) modeBtn.textContent = '☀';
    }
};

// Dark Mode Toggle com LocalStorage
const modeBtn = document.getElementById('mode-toggle');
if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Guarda a preferência do utilizador
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Atualiza o ícone
        modeBtn.textContent = isDark ? '☀' : '✧';
    });
}

// Executa ao carregar qualquer página
applySavedMode();

// Intersection Observer para animações reveal
const revealCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
};
const observer = new IntersectionObserver(revealCallback, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
