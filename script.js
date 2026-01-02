// Função para aplicar o modo guardado ao carregar a página
const applySavedMode = () => {
    const savedMode = localStorage.getItem('theme');
    const modeBtn = document.getElementById('mode-toggle');
    
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        if (modeBtn) modeBtn.textContent = '☀';
    }
};

const modeBtn = document.getElementById('mode-toggle');

if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Guarda a escolha para a próxima página
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Atualiza o ícone do botão
        modeBtn.textContent = isDark ? '☀' : '✧';
        
        console.log("Modo escuro ativo:", isDark); // Para debug
    });
}

// Verificar ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (modeBtn) modeBtn.textContent = '☀';
    }
});
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
