/**
 * LILYAN - Script de Interatividade e Animações de Luxo
 * Versão Final: Dark Mode Corrigido + Animações Smooth Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTÃO DO MODO ESCURO (DARK MODE) ---
    const modeBtn = document.getElementById('mode-toggle');
    const body = document.body;

    // Função para atualizar o ícone do botão
    const updateIcon = (isDark) => {
        if (modeBtn) {
            modeBtn.textContent = isDark ? '☀' : '✧';
        }
    };

    // Aplicar o tema guardado ao carregar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || body.classList.contains('dark-mode')) {
        body.classList.add('dark-mode');
        updateIcon(true);
    }

    // Evento de clique para alternar o modo
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcon(isDark);
        });
    }


    // --- 2. ANIMAÇÕES DE REVELAÇÃO (SCROLL REVEAL) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos para animar (incluindo os teus blocos de texto e imagens)
    const elementsToAnimate = document.querySelectorAll(
        '.reveal, .atelier-visual, .info-block, .luxury-form, .hero-content, .map-wrapper, .card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal-init'); 
        revealOnScroll.observe(el);
    });


    // --- 3. EFEITO DE PARALLAX SUBTIL NO HERO ---
    const hero = document.querySelector('.hero-slider');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            // Move o fundo ligeiramente para dar profundidade
            hero.style.backgroundPositionY = (scroll * 0.4) + 'px';
        });
    }


    // --- 4. ANIMAÇÃO DO MENU (STAGGERED LOAD) ---
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        link.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100);
    });
});
