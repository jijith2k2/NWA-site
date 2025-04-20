// Horizontal Scrolling for News Section
document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.media-scroller');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    scrollLeftBtn.addEventListener('click', () => {
        scroller.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        scroller.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    // Drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scroller.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
    });
    
    scroller.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    scroller.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    scroller.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 2;
        scroller.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    scroller.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
    }, {passive: false});
    
    scroller.addEventListener('touchend', () => {
        isDown = false;
    }, {passive: true});
    
    scroller.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scroller.offsetLeft;
        const walk = (x - startX) * 2;
        scroller.scrollLeft = scrollLeft - walk;
    }, {passive: false});
});