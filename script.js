document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE ---
    const modeBtn = document.getElementById('mode-toggle');
    const body = document.body;

    const updateIcon = (isDark) => {
        if (modeBtn) {
            modeBtn.textContent = isDark ? '☀' : '✧';
            modeBtn.style.borderColor = isDark ? '#fdfcf8' : '#b08d57';
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

    // --- 2. MENU MOBILE (HAMBÚRGUER) ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.getElementById('nav-links');

    if (menuIcon && navLinksContainer) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            menuIcon.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Fechar ao clicar num link
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- 3. REVEAL ON SCROLL ---
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .card, .info-block').forEach(el => {
        el.classList.add('reveal-init');
        revealOnScroll.observe(el);
    });
});
