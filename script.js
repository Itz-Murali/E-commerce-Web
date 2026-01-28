
    
document.addEventListener('DOMContentLoaded', function() {
  
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;
      
       const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.classList.add('dark');
      }
      
      if (themeToggle) {
        themeToggle.addEventListener('click', function() {
          html.classList.toggle('dark');
          localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
      }
    });
    
 
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.classList.add('glass', 'shadow-lg');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('glass', 'shadow-lg');
        header.classList.add('bg-transparent');
      }
    });
 
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    });
    
  // btt btn 
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    

    revealOnScroll();
    
  
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          revealOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    
 
    document.querySelectorAll('.product-card button').forEach(btn => {
      if (btn.querySelector('svg path[d*="4.318"]')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const svg = this.querySelector('svg');
          if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            this.style.background = '';
            this.style.color = '';
            svg.querySelector('path').setAttribute('fill', 'none');
          } else {
            this.classList.add('liked');
            this.style.background = 'hsl(var(--accent))';
            this.style.color = 'white';
            svg.querySelector('path').setAttribute('fill', 'currentColor');
          }
        });
      }
    });
    
    
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
    });

