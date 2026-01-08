/**
 * LILYAN - Script de Interatividade e Animações de Luxo
 * Focado em: Performance, Fluidez e Minimalismo
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONFIGURAÇÃO DO OBSERVADOR DE REVELAÇÃO (Scroll Reveal)
    // Esta técnica é mais moderna e eficiente que o scroll tradicional
    const observerOptions = {
        threshold: 0.15, // Inicia a animação quando 15% do elemento está visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara a animação CSS
                entry.target.classList.add('active');
                // Para de observar o elemento após a animação para poupar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ter animação de entrada
    // Inclui classes do index, atelier e contactos
    const elementsToAnimate = document.querySelectorAll(
        '.reveal, .atelier-visual, .info-block, .luxury-form, .hero-content, .map-wrapper'
    );
    
    elementsToAnimate.forEach(el => {
        // Prepara o estado inicial (invisível/deslocado) via CSS
        el.classList.add('reveal-init'); 
        revealOnScroll.observe(el);
    });

    // 2. EFEITO DE PARALLAX SUAVE NO HERO
    // Cria uma sensação de profundidade ao fazer scroll na imagem das flores
    const heroSection = document.querySelector('.hero-slider');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.pageYOffset;
            // Move o fundo mais devagar que o scroll (0.3x) para um efeito chique
            heroSection.style.backgroundPositionY = `${-(scrollValue * 0.3)}px`;
        });
    }

    // 3. GESTÃO DO MODO ESCURO (Dark Mode)
    // Mantém a funcionalidade de alternância se o botão existir no HTML
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Opcional: Guardar preferência do utilizador
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // 4. ANIMAÇÃO DE ENTRADA DO MENU (Staggered Load)
    // Faz com que os links do menu apareçam um a um
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        link.style.transition = `all 0.6s ease forwards ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100);
    });
});
