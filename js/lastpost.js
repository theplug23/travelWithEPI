// Fonction pour récupérer les articles depuis l'API
async function fetchPosts() {
    const response = await fetch('https://api.epideaa.com/api/posts');
    const data = await response.json();

    // Renvoie les 2 derniers articles
    return data.slice(-3);
}

const truncateTitle = (title) => {
    if (title.length > 30) {
      return title.substring(0, 30);
    }
    return title;
  };

// Fonction pour afficher les articles dans la section Latest Posts
async function displayLatestPosts() {
    try {
        const posts = await fetchPosts();
        const postsContainer = document.querySelector('.latest-posts .posts-container');

        posts.forEach((post) => {
            const postItem = document.createElement('div');
            postItem.classList.add('item');

            const image = document.createElement('img');
            image.classList.add('post-image');
            image.src = 'img/latest-posts-7.jpg';
            image.alt = post.title;
            image.style.height = '100px'

            const infoPost = document.createElement('div');
            infoPost.classList.add('info-post');

            const title = document.createElement('span');
            title.classList.add('date');
            const postLink = document.createElement('a');
            const slug = post.slug;
            postLink.href = `blog?slug=${slug}`; 
            postLink.textContent = truncateTitle(post.title) + '...';
            title.appendChild(postLink);

            const date = document.createElement('span');
            date.classList.add('date');
            const lastpostdate = new Date(post.created_at);
            const dateTime = lastpostdate.toDateString()
            date.textContent = `${dateTime}`;

            infoPost.appendChild(title);
            infoPost.appendChild(document.createElement('br'));
            infoPost.appendChild(date);

            postItem.appendChild(image);
            postItem.appendChild(infoPost);

            /*const divClear = document.createElement('div')
            divClear.classList.add('clearfix')

            postItem.appendChild(divClear)*/
            postItem.style.display = 'flex'
            postsContainer.appendChild(postItem);
            
        });
    } catch (error) {
        console.log('Une erreur est survenue lors de l\'affichage des derniers articles :', error);
    }
}

displayLatestPosts();