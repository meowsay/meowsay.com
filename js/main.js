// Main JavaScript file for Meowsay Games website - Gamified Version
class MeowsayGamesWebsite {
    constructor() {
        this.games = [];
        this.currentSection = 'home';
        this.isMenuOpen = false;
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    async init() {
        // Initialize core systems
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupNavigation();
        this.setupParticleSystem();
        this.setupMouseFollower();
        this.setupCounterAnimations();
        this.setupSoundToggle();
        this.setupPageTransitions();
        
        // Load games
        await this.loadGames();
        this.setupAnimations();
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
                this.playSound('click');
            });
        }

        // Smooth scrolling for navigation links with sound
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                this.playSound('click');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Add hover effects to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.playSound('hover');
            });
        });
    }

    // Mobile Menu
    toggleMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            this.isMenuOpen = !this.isMenuOpen;
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    }

    closeMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            this.isMenuOpen = false;
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        const progressBar = document.getElementById('navProgressBar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class to navbar
            if (currentScrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }

            // Update progress bar
            this.updateProgressBar(progressBar);

            // Update active navigation link
            this.updateActiveNavLink();

            // Animate elements on scroll
            this.animateOnScroll();

            lastScrollY = currentScrollY;
        });
    }

    updateProgressBar(progressBar) {
        if (!progressBar) return;
        
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
    }

    // Navigation
    setupNavigation() {
        // Set up smooth scrolling and active states
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        this.currentSection = currentSection;
    }

    scrollToSection(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            this.closeMobileMenu();
        }
    }

    // Games Loading
    async loadGames() {
        const loadingElement = document.getElementById('gamesLoading');
        const gamesGrid = document.getElementById('games-grid');
        
        try {
            if (loadingElement) loadingElement.style.display = 'block';
            if (gamesGrid) gamesGrid.style.display = 'none';
            
            const response = await fetch('./config/games.json');
            const data = await response.json();
            this.games = data.games || [];
            
            this.renderGames();
            
            if (loadingElement) loadingElement.style.display = 'none';
            if (gamesGrid) gamesGrid.style.display = 'grid';
            
        } catch (error) {
            console.error('Error loading games:', error);
            if (loadingElement) {
                loadingElement.innerHTML = '<p>Failed to load games. Please try again later.</p>';
            }
        }
    }

    renderGames() {
        const gamesGrid = document.getElementById('games-grid');
        const noResults = document.getElementById('noResults');
        
        if (!gamesGrid) return;
        
        const gamesToRender = this.games;        if (gamesToRender.length === 0) {
            gamesGrid.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        
        if (noResults) noResults.style.display = 'none';
        gamesGrid.style.display = 'grid';
        
        gamesGrid.innerHTML = gamesToRender.map(game => this.createGameCard(game)).join('');
        
        // Add hover effects to game cards
        this.setupGameCardEffects();
        
        // Animate cards in
        this.animateCardsIn();
    }











    animateCardsIn() {
        const cards = document.querySelectorAll('.game-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    createGameCard(game) {
        const statusBadge = this.getStatusBadge(game.status);
        const platforms = game.platforms?.join(', ') || '';
        const links = this.createGameLinks(game.links || {});
        const formattedDate = game.releaseDate ? new Date(game.releaseDate).toLocaleDateString() : '';
        
        return `
            <div class="game-card" data-game-id="${game.id}" data-status="${game.status}">
                <div class="game-image-container">
                    <img src="${game.image}" alt="${game.title}" class="game-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDM1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgNzBDMTg2LjA0NiA3MDE5NS4wNDYgODBJTEM4NCA4MFYxMjBIMTA4VjEwNEgxMzJWODBIMTU2VjEwNEgxODBWMTIwSDIwNFY4MEgyMjhWMTA0SDI1MlYxMjBIMjc2VjgwSDMwMFYxMjBIMzI0VjE0MEgzMDBWMTIwSDI3NlYxNDBIMjUyVjEyMEgyMjhWMTQwSDIwNFYxMjBIMTgwVjE0MEgxNTZWMTIwSDEzMlYxNDBIMTA4VjEyMEg4NFYxNDBINjBWMTIwSDM2VjEwMEg2MFY4MEg4NFY2MEgxMDhWODBIMTMyVjYwSDE1NlY4MEgxODBWNjBIMjA0VjgwSDIyOFY2MEgyNTJWODBIMjc2VjYwSDMwMFY4MEgzMjRWMTAwSDMwMFY4MEgyNzZWMTAwSDI1MlY4MEgyMjhWMTAwSDIwNFY4MEgxODBWMTAwSDE1NlY4MEgxMzJWMTAwSDEwOFY4MEg4NFYxMDBINjBWODBIMzZWMTAwSDEyVjgwSDM2VjEwMEg2MFY4MEg4NFYxMDBIMTA4VjgwSDEzMlYxMDBIMTU2VjgwSDE4MFYxMDBIMjA0VjgwSDIyOFYxMDBIMjUyVjgwSDI3NlYxMDBIMzAwVjgwSDMyNFYxMDBIMzAwVjEyMEgyNzZWMTAwSDI1MlYxMjBIMjI4VjEwMEgyMDRWMTIwSDE4MFYxMDBIMTU2VjEyMEgxMzJWMTAwSDEwOFYxMjBIODRWMTAwSDYwVjEyMEgzNlYxMDBIMTJWMTIwSDM2VjE0MEg2MFYxMjBIODRWMTQwSDEwOFYxMjBIMTMyVjE0MEgxNTZWMTIwSDE4MFYxNDBIMjA0VjEyMEgyMjhWMTQwSDI1MlYxMjBIMjc2VjE0MEgzMDBWMTIwSDMyNFYxNDBIMzAwVjE2MEgyNzZWMTQwSDI1MlYxNjBIMjI4VjE0MEgyMDRWMTYwSDE4MFYxNDBIMTU2VjE2MEgxMzJWMTQwSDEwOFYxNjBIODRWMTQwSDYwVjE2MEgzNlYxNDBIMTJWMTYwSDM2VjE4MEg2MFYxNjBIODRWMTgwSDEwOFYxNjBIMTMyVjE4MEgxNTZWMTYwSDE4MFYxODBIMjA0VjE2MEgyMjhWMTgwSDI1MlYxNjBIMjc2VjE4MEgzMDBWMTYwSDMyNFYxODBIMzAwVjIwMEgyNzZWMTgwSDI1MlYyMDBIMjI4VjE4MEgyMDRWMjAwSDE4MFYxODBIMTU2VjIwMEgxMzJWMTgwSDEwOFYyMDBIODRWMTgwSDYwVjIwMEgzNlYxODBIMTJWMjAwSDM2SDYwSDg0SDEwOEgxMzJIMTU2SDE4MEgyMDRIMjI4SDI1MkgyNzZIMzAwSDMyNFYxODBIMzAwVjE2MEgyNzZWMTgwSDI1MlYxNjBIMjI4VjE4MEgyMDRWMTYwSDE4MFYxODBIMTU2VjE2MEgxMzJWMTgwSDEwOFYxNjBIODRWMTgwSDYwVjE2MEgzNlYxODBIMTJWMTYwSDM2VjE0MEg2MFYxNjBIODRWMTQwSDEwOFYxNjBIMTMyVjE0MEgxNTZWMTYwSDE4MFYxNDBIMjA0VjE2MEgyMjhWMTQwSDI1MlYxNjBIMjc2VjE0MEgzMDBWMTYwSDMyNFYxNDBIMzAwVjEyMEgyNzZWMTQwSDI1MlYxMjBIMjI4VjE0MEgyMDRWMTIwSDE4MFYxNDBIMTU2VjEyMEgxMzJWMTQwSDEwOFYxMjBIODRWMTQwSDYwVjEyMEgzNlYxNDBIMTJWMTIwSDM2VjEwMEg2MFYxMjBIODRWMTAwSDEwOFYxMjBIMTMyVjEwMEgxNTZWMTIwSDE4MFYxMDBIMjA0VjEyMEgyMjhWMTAwSDI1MlYxMjBIMjc2VjEwMEgzMDBWMTIwSDMyNFYxMDBIMzAwVjgwSDI3NlYxMDBIMjUyVjgwSDIyOFYxMDBIMjA0VjgwSDE4MFYxMDBIMTU2VjgwSDEzMlYxMDBIMTA4VjgwSDg0VjEwMEg2MFY4MEgzNlYxMDBIMTJWODBIMzZWNjBINjBWODBIODRWNjBIMTA4VjgwSDEzMlY2MEgxNTZWODBIMTgwVjYwSDIwNFY4MEgyMjhWNjBIMjUyVjgwSDI3NlY2MEgzMDBWODBIMzI0VjYwSDMwMFY0MEgyNzZWNjBIMjUyVjQwSDIyOFY2MEgyMDRWNDBIMTgwVjYwSDE1NlY0MEgxMzJWNjBIMTA4VjQwSDg0VjYwSDYwVjQwSDM2VjYwSDEyVjQwSDM2VjIwSDYwVjQwSDg0VjIwSDEwOFY0MEgxMzJWMjBIMTU2VjQwSDE4MFYyMEgyMDRWNDBIMjI4VjIwSDI1MlY0MEgyNzZWMjBIMzAwVjQwSDMyNFYyMEgzMDBWMEgyNzZWMjBIMjUyVjBIMjI4VjIwSDIwNFYwSDE4MFYyMEgxNTZWMEgxMzJWMjBIMTA4VjBIODRWMjBINjBWMEgzNlYyMEgxMlYwSDM2SDYwSDg0SDEwOEgxMzJIMTU2SDE4MEgyMDRIMjI4SDI1MkgyNzZIMzAwSDMyNFYyMEgzMDBWNDBIMjc2VjIwSDI1MlY0MEgyMjhWMjBIMjA0VjQwSDE4MFYyMEgxNTZWNDBIMTMyVjIwSDEwOFY0MEg4NFYyMEg2MFY0MEgzNlYyMEgxMlY0MEgzNlY2MEg2MFY0MEg4NFY2MEgxMDhWNDBIMTMyVjYwSDE1NlY0MEgxODBWNjBIMjA0VjQwSDIyOFY2MEgyNTJWNDBIMjc2VjYwSDMwMFY0MEgzMjRWNjBIMzAwVjgwSDI3NlY2MEgyNTJWODBIMjI4VjYwSDIwNFY4MEgxODBWNjBIMTU2VjgwSDEzMlY2MEgxMDhWODBIODRWNjBINjBWODBIMzZWNjBIMTJWODBIMzZWMTAwSDYwVjgwSDg0VjEwMEgxMDhWODBIMTMyVjEwMEgxNTZWODBIMTgwVjEwMEgyMDRWODBIMjI4VjEwMEgyNTJWODBIMjc2VjEwMEgzMDBWODBIMzI0VjEwMEgzMDBWMTIwSDI3NlYxMDBIMjUyVjEyMEgyMjhWMTAwSDIwNFYxMjBIMTgwVjEwMEgxNTZWMTIwSDEzMlYxMDBIMTA4VjEyMEg4NFYxMDBINjBWMTIwSDM2VjEwMEgxMlYxMjBIMzZWMTQwSDYwVjEyMEg4NFYxNDBIMTA4VjEyMEgxMzJWMTQwSDE1NlYxMjBIMTgwVjE0MEgyMDRWMTIwSDIyOFYxNDBIMjUyVjEyMEgyNzZWMTQwSDMwMFYxMjBIMzI0VjE0MEgzMDBWMTYwSDI3NlYxNDBIMjUyVjE2MEgyMjhWMTQwSDIwNFYxNjBIMTgwVjE0MEgxNTZWMTYwSDEzMlYxNDBIMTA4VjE2MEg4NFYxNDBINjBWMTYwSDM2VjE0MEgxMlYxNjBIMzZWMTgwSDYwVjE2MEg4NFYxODBIMTA4VjE2MEgxMzJWMTgwSDE1NlYxNjBIMTgwVjE4MEgyMDRWMTYwSDIyOFYxODBIMjUyVjE2MEgyNzZWMTgwSDMwMFYxNjBIMzI0VjE4MEgzMDBWMjAwSDI3NkgyNTJIMjI4SDIwNEgxODBIMTU2SDEzMkgxMDhIODRINjBIMzZIMTJaIiBmaWxsPSIjOENBM0FGIi8+CjwvZz4KPC9zdmc+'">
                    ${statusBadge}
                </div>
                <div class="game-content">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-tags">
                        ${game.tags?.map(tag => `<span class="game-tag">${tag}</span>`).join('') || ''}
                    </div>
                    <div class="game-meta">
                        <span class="game-platforms">📱 ${platforms}</span>
                        ${formattedDate ? `<span class="game-date">📅 ${formattedDate}</span>` : ''}
                    </div>
                </div>
                ${links && links.trim() ? `<div class="game-links">${links}</div>` : ''}
            </div>
        `;
    }

    getStatusBadge(status) {
        const statusMap = {
            'released': { text: 'Released', class: 'status-released' },
            'beta': { text: 'Beta', class: 'status-beta' },
            'alpha': { text: 'Alpha', class: 'status-alpha' },
            'coming-soon': { text: 'Coming Soon', class: 'status-coming-soon' },
            'in-development': { text: 'In Development', class: 'status-in-development' }
        };

        const statusInfo = statusMap[status] || { text: status, class: 'status-default' };
        return `<div class="game-status ${statusInfo.class}">${statusInfo.text}</div>`;
    }

    createGameLinks(links) {
        const linkButtons = [];
        
        // 链接类型映射表
        const linkTypeMap = {
            // 标准化的key
            'website': { icon: '🌐', text: 'Web', class: 'btn-secondary' },
            'appstore': { icon: '📱', text: 'App Store', class: 'btn-secondary' },
            'googleplay': { icon: '🤖', text: 'Google Play', class: 'btn-secondary' },
            'steam': { icon: '🎮', text: 'Steam', class: 'btn-secondary' },
            'github': { icon: '💻', text: 'GitHub', class: 'btn-secondary' },
            'demo': { icon: '🎯', text: 'Demo', class: 'btn-secondary' },
            'download': { icon: '📥', text: 'Download', class: 'btn-secondary' },
            'trailer': { icon: '🎬', text: 'Trailer', class: 'btn-secondary' },
            'discord': { icon: '💬', text: 'Discord', class: 'btn-secondary' },
            'twitter': { icon: '🐦', text: 'Twitter', class: 'btn-secondary' },
            // 变体key
            'web': { icon: '🌐', text: 'Web', class: 'btn-secondary' },
            'app store': { icon: '📱', text: 'App Store', class: 'btn-secondary' },
            'google play': { icon: '🤖', text: 'Google Play', class: 'btn-secondary' },
            'itchio': { icon: '🎮', text: 'itch.io', class: 'btn-secondary' },
            'youtube': { icon: '📺', text: 'YouTube', class: 'btn-secondary' }
        };
        
        // 遍历所有链接
        Object.entries(links).forEach(([key, url]) => {
            // 跳过空链接
            if (!url || url.trim() === '') return;
            
            // 标准化key（转小写，移除空格和特殊字符）
            const normalizedKey = key.toLowerCase().replace(/[\s-_]/g, '');
            
            // 查找匹配的链接类型
            const linkInfo = linkTypeMap[normalizedKey];
            
            if (linkInfo) {
                // 使用预定义的链接信息
                linkButtons.push(`<a href="${url}" class="game-link ${linkInfo.class}" target="_blank" rel="noopener">${linkInfo.icon} ${linkInfo.text}</a>`);
            } else {
                // 使用原始key作为显示文本
                const displayText = key.charAt(0).toUpperCase() + key.slice(1);
                const icon = this.getDefaultIcon(key);
                linkButtons.push(`<a href="${url}" class="game-link btn-secondary" target="_blank" rel="noopener">${icon} ${displayText}</a>`);
            }
        });
        
        return linkButtons.join('');
    }
    
    getDefaultIcon(key) {
        // 根据key的内容猜测合适的图标
        const lowerKey = key.toLowerCase();
        if (lowerKey.includes('store') || lowerKey.includes('app')) return '📱';
        if (lowerKey.includes('web') || lowerKey.includes('site')) return '🌐';
        if (lowerKey.includes('play') || lowerKey.includes('google')) return '🤖';
        if (lowerKey.includes('steam') || lowerKey.includes('game')) return '🎮';
        if (lowerKey.includes('git') || lowerKey.includes('code')) return '💻';
        if (lowerKey.includes('video') || lowerKey.includes('trailer')) return '🎬';
        if (lowerKey.includes('social') || lowerKey.includes('chat')) return '💬';
        return '🔗'; // 默认图标
    }

    setupGameCardEffects() {
        const gameCards = document.querySelectorAll('.game-card');
        
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) rotateX(5deg)';
                this.playSound('hover');
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0)';
            });
            
            // Add click ripple effect
            card.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                card.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Animations
    setupAnimations() {
        // Set up intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.game-card, .about-card, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    animateOnScroll() {
        // Add parallax effects
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    // Gaming Features
    setupParticleSystem() {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = this.getRandomColor();
            }
            
            getRandomColor() {
                const colors = ['#7c3aed', '#00f3ff', '#10b981', '#ec4899', '#fbbf24'];
                return colors[Math.floor(Math.random() * colors.length)];
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
            
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            this.particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    setupMouseFollower() {
        const follower = document.getElementById('mouseFollower');
        if (!follower) return;
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });
        
        // Hide follower when mouse leaves window
        document.addEventListener('mouseleave', () => {
            follower.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            follower.style.opacity = '0.7';
        });
        
        // Add click effect
        document.addEventListener('click', (e) => {
            follower.style.transform = 'scale(1.5)';
            setTimeout(() => {
                follower.style.transform = 'scale(1)';
            }, 200);
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number, .achievement-number');
        
        const animateCounter = (counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            const isPercentage = counter.textContent.includes('%');
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    
                    let displayValue;
                    if (target >= 1000) {
                        displayValue = Math.floor(current).toLocaleString();
                    } else if (target < 10) {
                        displayValue = current.toFixed(1);
                    } else {
                        displayValue = Math.floor(current);
                    }
                    
                    counter.textContent = isPercentage ? displayValue + '%' : displayValue;
                    
                    requestAnimationFrame(updateCounter);
                } else {
                    let displayValue;
                    if (target >= 1000) {
                        displayValue = target.toLocaleString();
                    } else if (target < 10) {
                        displayValue = target.toFixed(1);
                    } else {
                        displayValue = target;
                    }
                    
                    counter.textContent = isPercentage ? displayValue + '%' : displayValue;
                }
            };
            
            updateCounter();
        };
        
        // Intersection Observer to trigger animations when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    observer.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
        
        // Animate XP bar
        this.setupXPBarAnimation();
        // Animate skill bars
        this.setupSkillBarAnimations();
    }

    setupXPBarAnimation() {
        const xpFill = document.querySelector('.xp-fill');
        if (!xpFill) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(xpFill);
    }

    setupSkillBarAnimations() {
        const skillFills = document.querySelectorAll('.skill-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skill = entry.target.getAttribute('data-skill');
                    setTimeout(() => {
                        entry.target.style.width = skill + '%';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        skillFills.forEach(fill => {
            fill.style.width = '0%';
            observer.observe(fill);
        });
        
        // Setup contact interactions
        this.setupContactInteractions();
    }

    setupContactInteractions() {
        // Social orbs interactions
        this.setupSocialOrbs();
        
        // Email click effects
        this.setupEmailEffects();
        
        // Contact option hover effects
        this.setupContactOptionEffects();
    }



    setupSocialOrbs() {
        const socialOrbs = document.querySelectorAll('.social-orb');
        
        socialOrbs.forEach(orb => {
            orb.addEventListener('click', () => {
                const social = orb.getAttribute('data-social');
                this.playSound('click');
                
                // Add pulse effect
                orb.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    orb.style.animation = 'float 3s ease-in-out infinite';
                }, 500);
                
                // Simulate social media navigation
                console.log(`Opening ${social} page...`);
            });
            
            orb.addEventListener('mouseenter', () => {
                this.playSound('hover');
            });
        });
    }

    setupEmailEffects() {
        const emailButtons = document.querySelectorAll('a[href^="mailto:"]');
        
        emailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.playSound('click');
                this.showEmailSuccess();
            });
        });
    }

    setupContactOptionEffects() {
        const contactOptions = document.querySelectorAll('.contact-option');
        
        contactOptions.forEach(option => {
            option.addEventListener('mouseenter', () => {
                this.playSound('hover');
                
                // Add glow effect
                option.style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.3)';
            });
            
            option.addEventListener('mouseleave', () => {
                option.style.boxShadow = '';
            });
            
            option.addEventListener('click', () => {
                this.playSound('click');
                
                // Add click ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                
                const rect = option.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                option.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    showEmailSuccess() {
        const successElement = document.getElementById('emailSuccess');
        if (!successElement) return;
        
        successElement.classList.add('show');
        
        // Add random positions to particles
        const particles = successElement.querySelectorAll('.particle');
        particles.forEach(particle => {
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 200;
            particle.style.setProperty('--random-x', randomX + 'px');
            particle.style.setProperty('--random-y', randomY + 'px');
        });
        
        setTimeout(() => {
            successElement.classList.remove('show');
        }, 3000);
    }

    // Enhanced Gaming Sound System
    playSound(soundName) {
        // Check if sound is enabled (could be a user preference)
        if (!this.soundEnabled) return;
        
        console.log(`Playing sound: ${soundName}`);
        
        // Web Audio API for different sound effects
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            if (soundName === 'click') {
                this.createClickSound(audioContext);
            } else if (soundName === 'hover') {
                this.createHoverSound(audioContext);
            } else if (soundName === 'success') {
                this.createSuccessSound(audioContext);
            } else if (soundName === 'notification') {
                this.createNotificationSound(audioContext);
            }
        } catch (error) {
            // Silently fail if audio context is not available
        }
    }

    createClickSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    createHoverSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    }

    createSuccessSound(audioContext) {
        // Create a success chord
        const frequencies = [523, 659, 784]; // C, E, G
        
        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime + index * 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5 + index * 0.1);
            
            oscillator.start(audioContext.currentTime + index * 0.1);
            oscillator.stop(audioContext.currentTime + 0.5 + index * 0.1);
        });
    }

    createNotificationSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }



    // Sound Toggle System
    setupSoundToggle() {
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        
        // Create sound toggle button
        const soundToggle = document.createElement('button');
        soundToggle.id = 'soundToggle';
        soundToggle.className = 'sound-toggle';
        soundToggle.innerHTML = this.soundEnabled ? '🔊' : '🔇';
        soundToggle.title = this.soundEnabled ? 'Disable Sound' : 'Enable Sound';
        
        soundToggle.addEventListener('click', () => {
            this.soundEnabled = !this.soundEnabled;
            localStorage.setItem('soundEnabled', this.soundEnabled);
            soundToggle.innerHTML = this.soundEnabled ? '🔊' : '🔇';
            soundToggle.title = this.soundEnabled ? 'Disable Sound' : 'Enable Sound';
            
            if (this.soundEnabled) {
                this.playSound('notification');
            }
        });
        
        document.body.appendChild(soundToggle);
    }

    // Page Transition Effects
    setupPageTransitions() {
        // Add smooth transitions between sections
        let isTransitioning = false;
        
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && !isTransitioning) {
                e.preventDefault();
                isTransitioning = true;
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToSection(targetId);
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 300);
                }
            }
        });
    }

    // Analytics
    trackEvent(eventName, eventData = {}) {
        // Add analytics tracking here
        console.log('Event tracked:', eventName, eventData);
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, eventData);
        // }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.meowsayGames = new MeowsayGamesWebsite();
});