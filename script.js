// Adicionar comportamento de scroll suave
document.addEventListener('DOMContentLoaded', () => {
    // Animar cards ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todos os cards de link
    document.querySelectorAll('.link-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Adicionar animação de clique
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Criar efeito ripple
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = card.getBoundingClientRect();
            ripple.style.left = e.clientX - rect.left - 10 + 'px';
            ripple.style.top = e.clientY - rect.top - 10 + 'px';
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Adicionar navegação por teclado
    document.querySelectorAll('.link-card, .social-link, .extra-link').forEach(link => {
        link.setAttribute('tabindex', '0');
        link.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });

    // Rastrear analytics (opcional - pode ser substituído com suas analytics)
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const title = card.querySelector('.link-title').textContent;
            console.log(`Projeto clicado: ${title}`);
            // Adicione seu rastreamento de analytics aqui
            // Exemplo: gtag('event', 'click', { 'event_category': 'project_link', 'event_label': title });
        });
    });

    // Adicionar efeito de partículas no hover (decoração opcional)
    const createParticle = (x, y, color) => {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = 'float 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    };

    // Adicionar animação CSS para partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes float {
            to {
                transform: translateY(-100px) translateX(${Math.random() * 40 - 20}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Opcional: Adicionar efeito de partículas no hover do card
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const color = window.getComputedStyle(card.querySelector('.link-icon')).color;
            
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createParticle(
                        rect.left + Math.random() * rect.width,
                        rect.bottom,
                        color
                    );
                }, i * 100);
            }
        });
    });

    // Adicionar cor do tema ao chrome do navegador no mobile
    const metaTheme = document.createElement('meta');
    metaTheme.name = 'theme-color';
    metaTheme.content = '#0f172a';
    document.head.appendChild(metaTheme);

    // Adicionar suporte PWA (opcional)
    if ('serviceWorker' in navigator) {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    console.log('🚀 Linktree carregado com sucesso!');
});

// Adicionar scroll suave para links âncora (se algum for adicionado depois)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
