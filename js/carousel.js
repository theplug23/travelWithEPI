const imagesLink = [
	"EPIDEAA_IMAGES/Photo-61.jpg",
	"EPIDEAA_IMAGES/Photo-62.jpg",
	"EPIDEAA_IMAGES/Photo-63.jpg",
	"EPIDEAA_IMAGES/Photo-9.jpg",
	"EPIDEAA_IMAGES/Photo-10.jpg",
	"EPIDEAA_IMAGES/Photo-11.jpg",
	"EPIDEAA_IMAGES/Photo-12.jpg",
	"EPIDEAA_IMAGES/Photo-13.jpg",
	"EPIDEAA_IMAGES/Photo-14.jpg",
	"EPIDEAA_IMAGES/Photo-16.jpg",
	"EPIDEAA_IMAGES/Photo-18.jpg",
	"EPIDEAA_IMAGES/Photo-20.jpg",
	"EPIDEAA_IMAGES/Photo-24.jpg",
	"EPIDEAA_IMAGES/Photo-25.jpg",
	"EPIDEAA_IMAGES/Photo-26.jpg",
	"EPIDEAA_IMAGES/Photo-28.jpg",
	"EPIDEAA_IMAGES/Photo-29.jpg",
	"EPIDEAA_IMAGES/Photo-31.jpg",
	"EPIDEAA_IMAGES/Photo-33.jpg",
	"EPIDEAA_IMAGES/Photo-35.jpg",
	"EPIDEAA_IMAGES/Photo-36.jpg",
	"EPIDEAA_IMAGES/Photo-37.jpg",
	"EPIDEAA_IMAGES/Photo-38.jpg",
	"EPIDEAA_IMAGES/Photo-39.jpg",
	"EPIDEAA_IMAGES/Photo-40.jpg",
	"EPIDEAA_IMAGES/Photo-41.jpg",
	"EPIDEAA_IMAGES/Photo-42.jpg",
	"EPIDEAA_IMAGES/Photo-43.jpg",
	"EPIDEAA_IMAGES/Photo-44.jpg",
	"EPIDEAA_IMAGES/Photo-45.jpg",
	"EPIDEAA_IMAGES/Photo-56.jpg",
	"EPIDEAA_IMAGES/Photo-57.jpg",
	"EPIDEAA_IMAGES/Photo-58.jpg",
	"EPIDEAA_IMAGES/Photo-2.jpg",
	"EPIDEAA_IMAGES/Photo-4.jpg",
	"EPIDEAA_IMAGES/Photo-32.jpg",
	"img/img-pmal-9.jpg",
	"img/img-pmal-8.jpg",
	"img/img-pmal-7.jpg",
	"img/img-pmal-6.jpg",
	"img/img-pmal-5.jpg",
	"img/img-pmal-4.jpg",
	"img/img-pmal-3.jpg",
	"img/img-pmal-2.jpg",
	"img/img-pmal-1.jpg"
]

const divContainer = document.querySelector('.container-carousel');
const divCarousel = document.querySelector('.carousel');

imagesLink.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
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