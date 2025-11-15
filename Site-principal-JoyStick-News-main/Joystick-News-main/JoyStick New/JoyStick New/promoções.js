const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open_btn');
const openBtnIcon = document.getElementById('open_btn_icon');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        openBtnIcon.classList.remove('fa-chevron-left');
        openBtnIcon.classList.add('fa-chevron-right');
    } else {
        openBtnIcon.classList.remove('fa-chevron-right');
        openBtnIcon.classList.add('fa-chevron-left');
    }
});

/*deep*/
class Carrossel {
    constructor(container) {
        this.container = container;
        this.carrossel = container.querySelector('.carrossel');
        this.slides = container.querySelectorAll('.slide');
        this.indicadores = container.querySelectorAll('.indicador');
        this.prevBtn = container.querySelector('.prev-btn');
        this.nextBtn = container.querySelector('.next-btn');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;
        
        this.init();
    }
    
    init() {
        // Mostrar o slide inicial
        this.showSlide(this.currentIndex);
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.indicadores.forEach((indicador, index) => {
            indicador.addEventListener('click', () => this.goToSlide(index));
        });
        
        this.startAutoPlay();
        
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        this.setupTouchEvents();
    }
    
    showSlide(index) {
        // Atualiza a transformação do carrossel
        const translateX = -index * 100;
        this.carrossel.style.transform = `translateX(${translateX}%)`;
        
        // Atualiza indicadores
        this.indicadores.forEach(ind => ind.classList.remove('active'));
        this.indicadores[index].classList.add('active');
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        let nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.showSlide(prevIndex);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    setupTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const minSwipeDistance = 50;
        
        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}

// Inicializar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const carrosselContainer = document.querySelector('.carrossel-container');
    new Carrossel(carrosselContainer);
});