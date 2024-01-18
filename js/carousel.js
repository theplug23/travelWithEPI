const imagesLink = [
	"Photo-61.jpg",
	"Photo-62.jpg",
	"Photo-63.jpg",
	"Photo-9.jpg",
	"Photo-10.jpg",
	"Photo-11.jpg",
	"Photo-12.jpg",
	"Photo-13.jpg",
	"Photo-14.jpg",
	"Photo-16.jpg",
	"Photo-18.jpg",
	"Photo-20.jpg",
	"Photo-24.jpg",
	"Photo-25.jpg",
	"Photo-26.jpg",
	"Photo-29.jpg",
	"Photo-31.jpg",
	"Photo-33.jpg",
	"Photo-35.jpg",
	"Photo-36.jpg",
	"Photo-37.jpg",
	"Photo-38.jpg",
	"Photo-39.jpg",
	"Photo-41.jpg",
	"Photo-42.jpg",
	"Photo-43.jpg",
	"Photo-44.jpg",
	"Photo-57.jpg",
	"Photo-58.jpg",
	"Photo-4.jpg",
	"Photo-32.jpg",
	"img-pmal-9.jpg",
	"img-pmal-8.jpg",
	"img-pmal-7.jpg",
	"img-pmal-6.jpg",
	"img-pmal-5.jpg",
	"img-pmal-4.jpg",
	"img-pmal-3.jpg",
	"img-pmal-2.jpg",
	"img-pmal-1.jpg"
]

const divContainer = document.querySelector('.container-carousel');
const divCarousel = document.querySelector('.carousel');

imagesLink.forEach(url => {
    const img = document.createElement('img');
    img.src = `EPIDEAA_IMAGES/${url}`;
    img.classList.add('carousel-item');
    divCarousel.appendChild(img);
});
divContainer.appendChild(divCarousel);

const imagesLoaded = document.querySelectorAll('.carousel-item');

const interval = 3000;

let currentIndex = 0;
let timer = null;

function slideTo(index) {
    if (index < 0 || index >= imagesLoaded.length) {
    return;
    }

    divCarousel.style.transform = `translateX(-${index * 25}%)`;
    currentIndex = index;
}

function slideNext() {
    const nextIndex = currentIndex + 1 >= imagesLoaded.length ? 0 : currentIndex + 1;
    slideTo(nextIndex);
}

function startTimer() {
    timer = setInterval(slideNext, interval);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Démarrer le défilement automatique
startTimer();

// Gérer les événements de survol pour arrêter/démarrer le défilement automatique
divContainer.addEventListener('mouseover', stopTimer);
divContainer.addEventListener('mouseout', startTimer);