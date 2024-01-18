var images = document.getElementsByClassName("monimage");
var modals = document.getElementsByClassName("modal");
var carouselPrev = document.querySelector(".carousel-prev");
var carouselNext = document.querySelector(".carousel-next");
var currentImageIndex = 0;
const imagesUrl = [
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
	"Photo-28.jpg",
	"Photo-29.jpg",
	"Photo-31.jpg",
	"Photo-33.jpg",
	"Photo-35.jpg",
	"Photo-36.jpg",
	"Photo-37.jpg",
	"Photo-38.jpg",
	"Photo-39.jpg",
	"Photo-40.jpg",
	"Photo-41.jpg",
	"Photo-42.jpg",
	"Photo-43.jpg",
	"Photo-44.jpg",
	"Photo-45.jpg",
	"Photo-56.jpg",
	"Photo-57.jpg",
	"Photo-58.jpg",
	"Photo-2.jpg",
	"Photo-4.jpg",
	"Photo-32.jpg",
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

const galleryDiv = document.querySelector(".gallery");

imagesUrl.forEach((src) => {
	const img = document.createElement("img");
	img.src = `EPIDEAA_IMAGES/${src}`;
	img.classList.add('monimage')
	img.setAttribute('data-src', `EPIDEAA_Pictures_Web/${src}`)
	
	galleryDiv.appendChild(img);
});

function showImage(index) {
	var imageSrc = images[index].getAttribute("data-src");
	modals[0].getElementsByTagName("img")[0].src = imageSrc;
	modals[0].style.display = "block";
}

function hideModal() {
	modals[0].style.display = "none";
}

function showPrevImage() {
	event.stopPropagation();
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	showImage(currentImageIndex);
}

function showNextImage() {
	event.stopPropagation();
	currentImageIndex = (currentImageIndex + 1) % images.length;
	showImage(currentImageIndex);
}

// Fonction pour gérer les événements de pression sur le clavier
function handleKeyPress(event) {
    if (event.keyCode === 37) { // Touche "flèche gauche"
        showPrevImage();
    } else if (event.keyCode === 39) { // Touche "flèche droite"
        showNextImage();
    } else if (event.keyCode === 27) { // Touche "Esc"
        hideModal();
    }
}

// Gestionnaire d'événement pour les clics sur les flèches de navigation
carouselPrev.addEventListener("click", showPrevImage);
carouselNext.addEventListener("click", showNextImage);

// Gestionnaire d'événement pour les touches du clavier
document.addEventListener("keydown", handleKeyPress);

// Parcourir les éléments d'image et ajouter les gestionnaires d'événements pour afficher les modales
for (var i = 0; i < images.length; i++) {
	var image = images[i];

	image.addEventListener("click", function () {
		console.log(image)
		currentImageIndex = Array.from(images).indexOf(this);
		showImage(currentImageIndex);
	});

	modals[0].addEventListener("click", hideModal);
}