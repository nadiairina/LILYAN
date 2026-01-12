/**
 * LILYAN - Script de Interatividade e Animações de Luxo
 * Versão Final: Dark Mode + Scroll Reveal + Menu Mobile Corrigido
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTÃO DO MODO ESCURO (DARK MODE) ---
    const modeBtn = document.getElementById('mode-toggle');
    const body = document.body;

    const updateIcon = (isDark) => {
        if (modeBtn) {
            modeBtn.textContent = isDark ? '☀' : '✧';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || body.classList.contains('dark-mode')) {
        body.classList.add('dark-mode');
        updateIcon(true);
    }

    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcon(isDark);
        });
    }


    // --- 2. LÓGICA DO MENU MOBILE (HAMBÚRGUER) ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.getElementById('nav-links');

    if (menuIcon && navLinksContainer) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            
            // Impede o scroll do site quando o menu está aberto
            document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Fechar menu ao clicar num link (importante para navegação interna)
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }


    // --- 3. ANIMAÇÕES DE REVELAÇÃO (SCROLL REVEAL) ---
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

    const elementsToAnimate = document.querySelectorAll(
        '.reveal, .atelier-visual, .info-block, .luxury-form, .hero-content, .map-wrapper, .card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal-init'); 
        revealOnScroll.observe(el);
    });


    // --- 4. EFEITO DE PARALLAX NO HERO ---
    const hero = document.querySelector('.hero-slider');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            hero.style.backgroundPositionY = (scroll * 0.4) + 'px';
        });
    }


    // --- 5. ANIMAÇÃO DE ENTRADA DO MENU (DESKTOP) ---
    const navLinksItems = document.querySelectorAll('.nav-links li');
    navLinksItems.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        link.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100);
    });
});
// Dentro do script.js, na parte do updateIcon:
const updateIcon = (isDark) => {
    if (modeBtn) {
        modeBtn.textContent = isDark ? '☀' : '✧';
        // Opcional: muda a cor da borda do botão quando ativo
        modeBtn.style.borderColor = isDark ? '#fdfcf8' : '#b08d57';
    }
};
