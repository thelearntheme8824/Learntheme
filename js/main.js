// Auto Sliding Banner Logic
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = 3;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        if(index === currentIndex) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-indigo-600');
        } else {
            dot.classList.remove('bg-indigo-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 4000); // Har 4 second me slide change hogi
