const imagesLink = [
	"Photo-62.jpg",
	"Photo-63.jpg",
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
	"Photo-58.jpg",
	"Photo-4.jpg",
	"img-pmal-9.jpg",
	"img-pmal-8.jpg",
	"img-pmal-7.jpg",
	"img-pmal-6.jpg",
	"img-pmal-5.jpg",
	"img-pmal-4.jpg",
	"img-pmal-2.jpg"
]

const container = document.querySelector('.grid-container')
// Fonction pour choisir aléatoirement trois images
function chooseRandomImages(imagesArray, numImages) {
    const randomImages = [];
    
    for (let i = 0; i < numImages; i++) {
        const randomIndex = Math.floor(Math.random() * imagesArray.length);
        randomImages.push(imagesArray[randomIndex]);
        imagesArray.splice(randomIndex, 1);
    }

    return randomImages;
}

// Choisir aléatoirement trois images
const selectedImages = chooseRandomImages(imagesLink, 3);

// Afficher les images sélectionnées
selectedImages.forEach(imageUrl => {
	const div = document.createElement('div')
	div.classList.add('grid-item')
    const imgElement = document.createElement('img');
    imgElement.src = `EPIDEAA_IMAGES/${imageUrl}`;
	imgElement.alt = imageUrl;
    div.appendChild(imgElement)
	container.appendChild(div)
});