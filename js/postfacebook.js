 // Fonction pour récupérer les données des posts Facebook depuis l'API
 async function fetchFacebookPosts() {
    try {
        const response = await fetch('https://api.epideaa.com/api/posts-facebook');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération des posts Facebook :', error);
        return [];
    }
}
console.log(fetchFacebookPosts());

// Fonction pour afficher les posts Facebook
async function displayFacebookPosts() {
    try {
        const posts = await fetchFacebookPosts();
        const containerImagesFacebook = document.querySelector('.widget-gallery .image')
        posts.photos.data.map((image) => {
            const a = document.createElement('a');
            a.href = image.link;
            a.target = 'blank';

            const img = document.createElement('img');
            img.src = image.picture;
            img.alt = 'Facebook post';
            img.style.width = '183px'
            img.style.height = '183px'

            a.appendChild(img);
            containerImagesFacebook.appendChild(a)
        })
    } catch (error) {
        console.log('Une erreur est survenue lors de l\'affichage des posts Facebook :', error);
    }
}

// Appel de la fonction pour afficher les posts Facebook
displayFacebookPosts();