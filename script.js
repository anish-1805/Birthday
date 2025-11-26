// ===== GLOBAL VARIABLES =====
let currentImageIndex = 0;
const galleryImages = [
    { src: 'images/gallery1.jpg', caption: 'Beautiful Memory 1' },
    { src: 'images/gallery2.jpg', caption: 'Beautiful Memory 2' },
    { src: 'images/gallery3.jpg', caption: 'Beautiful Memory 3' },
    { src: 'images/gallery4.jpg', caption: 'Beautiful Memory 4' },
    { src: 'images/gallery5.jpg', caption: 'Beautiful Memory 5' },
    { src: 'images/gallery6.jpg', caption: 'Beautiful Memory 6' }
];

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', () => {
    // Activate landing page
    setTimeout(() => {
        document.querySelector('.landing-page').classList.add('active');
    }, 100);
});

// ===== START JOURNEY FUNCTION =====
function startJourney() {
    const landing = document.getElementById('landing');
    const story = document.getElementById('story');
    
    // Fade out landing page
    landing.style.opacity = '0';
    landing.style.transform = 'translateY(-50px)';
    
    setTimeout(() => {
        landing.style.display = 'none';
        story.classList.add('active');
        story.style.opacity = '0';
        
        // Fade in story section
        setTimeout(() => {
            story.style.opacity = '1';
            initScrollAnimations();
        }, 100);
    }, 1000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const chapters = document.querySelectorAll('.story-chapter');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    chapters.forEach(chapter => {
        observer.observe(chapter);
    });
}

// ===== GALLERY MODAL FUNCTIONS =====
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = galleryImages[index].src;
    modalCaption.textContent = galleryImages[index].caption;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop around if at the end or beginning
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Fade out
    modalImg.style.opacity = '0';
    
    setTimeout(() => {
        modalImg.src = galleryImages[currentImageIndex].src;
        modalCaption.textContent = galleryImages[currentImageIndex].caption;
        
        // Fade in
        modalImg.style.opacity = '1';
    }, 300);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal');
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
    
    // Navigate with arrow keys
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Close modal on background click
document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
        closeModal();
    }
});

// ===== WISHES OVERLAY FUNCTIONS =====
function showWishes() {
    const wishesOverlay = document.getElementById('wishesOverlay');
    wishesOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset candles if they were blown before
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => {
        flame.classList.remove('blown');
    });
}

function closeWishes() {
    const wishesOverlay = document.getElementById('wishesOverlay');
    wishesOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const blowBtn = document.querySelector('.blow-candles-btn');
    
    // Blow out candles one by one
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('blown');
        }, index * 200);
    });
    
    // Show celebration message after all candles are blown
    setTimeout(() => {
        blowBtn.innerHTML = '<i class="fas fa-check-circle"></i> Wish Made! 🎉';
        blowBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        // Create confetti effect
        createConfetti();
        
        // Show "wait there's more" message after confetti
        setTimeout(() => {
            showWaitMessage();
        }, 2000);
    }, flames.length * 200 + 500);
}

// Show "Wait, there's more!" message
function showWaitMessage() {
    const waitOverlay = document.getElementById('waitOverlay');
    waitOverlay.classList.add('active');
    
    // Auto-show video after 3 seconds
    setTimeout(() => {
        waitOverlay.classList.remove('active');
        setTimeout(() => {
            showVideoMessage();
        }, 500);
    }, 3000);
}

// ===== HEARTS RAIN EFFECT =====
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffb6d9', '#ffe4f1', '#ffd700'];
    const heartsCount = 50;
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        const size = Math.random() * 15 + 20; // Random size between 20-35px
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Create heart shape using CSS
        heart.className = 'falling-heart';
        heart.style.position = 'fixed';
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.zIndex = '10000';
        heart.style.pointerEvents = 'none';
        
        // Heart shape CSS
        heart.style.backgroundColor = color;
        heart.style.transform = 'rotate(-45deg)';
        
        // Create the two circles for heart shape
        heart.style.setProperty('--heart-color', color);
        
        // Add pseudo-element styles via a style tag (since we can't use ::before/::after inline)
        const styleId = 'heart-style-' + i;
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .falling-heart-${i}::before,
                .falling-heart-${i}::after {
                    content: '';
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${color};
                    border-radius: 50%;
                }
                .falling-heart-${i}::before {
                    top: ${-size/2}px;
                    left: 0;
                }
                .falling-heart-${i}::after {
                    top: 0;
                    left: ${size/2}px;
                }
            `;
            document.head.appendChild(style);
        }
        
        heart.classList.add('falling-heart-' + i);
        document.body.appendChild(heart);
        
        // Animate hearts falling with swaying motion
        const duration = Math.random() * 3 + 3; // 3-6 seconds
        const sway = Math.random() * 100 - 50; // Sway left or right
        const rotation = Math.random() * 360 - 180;
        
        heart.animate([
            { 
                transform: `translateY(0) translateX(0) rotate(-45deg)`,
                opacity: 0.9
            },
            { 
                transform: `translateY(${window.innerHeight / 2}px) translateX(${sway / 2}px) rotate(${rotation / 2 - 45}deg)`,
                opacity: 0.9
            },
            { 
                transform: `translateY(${window.innerHeight + 50}px) translateX(${sway}px) rotate(${rotation - 45}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove heart and style after animation
        setTimeout(() => {
            heart.remove();
            const styleEl = document.getElementById(styleId);
            if (styleEl) styleEl.remove();
        }, duration * 1000);
    }
}

// ===== MUSIC FUNCTIONS =====
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicPlaying = false;
    } else {
        bgMusic.play().catch(e => {
            console.log('Audio playback failed:', e);
        });
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlaying = true;
    }
}

// ===== SMOOTH SCROLLING =====
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

// ===== PREVENT IMAGE DRAG =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== VIDEO MESSAGE FUNCTIONS =====
function showVideoMessage() {
    const videoOverlay = document.getElementById('videoOverlay');
    const video = document.getElementById('birthdayVideo');
    
    videoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto-play video when shown
    video.play().catch(e => {
        console.log('Video autoplay prevented:', e);
    });
}

function closeVideo() {
    const videoOverlay = document.getElementById('videoOverlay');
    const video = document.getElementById('birthdayVideo');
    
    videoOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Pause video when closed
    video.pause();
}

// Close video on escape key
document.addEventListener('keydown', (e) => {
    const videoOverlay = document.getElementById('videoOverlay');
    if (e.key === 'Escape' && videoOverlay.classList.contains('active')) {
        closeVideo();
    }
});

// Close video on background click
document.getElementById('videoOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'videoOverlay') {
        closeVideo();
    }
});

// ===== CHAPTER CAROUSEL FUNCTIONS =====
window.changeChapterImage = function(chapterNum, direction) {
    console.log('Changing image, chapter:', chapterNum, 'direction:', direction);
    
    const carousel = document.querySelector(`.chapter-carousel[data-chapter="${chapterNum}"]`);
    if (!carousel) {
        console.error('Carousel not found for chapter:', chapterNum);
        return;
    }
    
    const img = carousel.querySelector('.carousel-single-image');
    const dots = carousel.querySelectorAll('.dot');
    const images = JSON.parse(carousel.getAttribute('data-images'));
    
    // Get current index
    let currentIndex = parseInt(carousel.getAttribute('data-current'));
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    console.log('Changing from index', currentIndex, 'to', newIndex);
    console.log('New image:', images[newIndex]);
    
    // Update image src
    img.src = images[newIndex];
    
    // Update dots
    dots[currentIndex].classList.remove('active');
    dots[newIndex].classList.add('active');
    
    // Save current index
    carousel.setAttribute('data-current', newIndex);
}

window.setChapterImage = function(chapterNum, index) {
    console.log('Setting image, chapter:', chapterNum, 'index:', index);
    
    const carousel = document.querySelector(`.chapter-carousel[data-chapter="${chapterNum}"]`);
    if (!carousel) {
        console.error('Carousel not found for chapter:', chapterNum);
        return;
    }
    
    const img = carousel.querySelector('.carousel-single-image');
    const dots = carousel.querySelectorAll('.dot');
    const images = JSON.parse(carousel.getAttribute('data-images'));
    
    // Update image src
    img.src = images[index];
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    // Save current index
    carousel.setAttribute('data-current', index);
}

// ===== CONSOLE MESSAGE =====
console.log('%c💖 Made with Love 💖', 'color: #ff69b4; font-size: 20px; font-weight: bold;');
console.log('%cHappy Birthday to the most special person! 🎂', 'color: #ff1493; font-size: 16px;');
