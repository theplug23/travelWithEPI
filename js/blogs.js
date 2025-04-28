// Fonction pour récupérer les données de l'API
async function fetchBlogPosts() {
  try {
    const response = await fetch('https://api.epideaa.com/api/posts');
    const data = response.json();
    return data;
  } catch (error) {
    console.log('Une erreur est survenue lors de la récupération des articles de blog :', error);
    return [];
  }
}

//Fonction pour compter le nombre de commentaires d'un article
async function countComments(id) {
  try {
    const response = await fetch(`https://api.epideaa.com/api/comments/${id}`);
    const count = await response.json();
    return count.length;
  } catch (error) {
    console.log('Une erreur est survenue lors du comptage des commentaires :', error);
    return [];
  }
}


// Fonction pour afficher les articles de blog
async function displayBlogPosts() {
  try {
    const posts = await fetchBlogPosts();
    posts.map(async (post, i) => {
      const article = document.createElement('article');
      //article.classList.add('article');
      article.classList.add('blog-posts');

      const divImage = document.createElement('div')
      divImage.classList.add('post-image')

      const image = document.createElement('img');
      image.src = post.image;
      image.alt = `post image ${i+1}`

      //Insertion de l'image dans sa div avec la classe post-image
      divImage.appendChild(image)
      article.appendChild(divImage)

      //Parsing de la date du post
      const postDate = new Date(post.created_at);
      const date = postDate.toDateString()

      const divPostText = document.createElement('div')
      divPostText.classList.add('post-text')
      const spanDate = document.createElement('span')
      spanDate.classList.add('date')
      spanDate.textContent = `Posted the : ${date}`;
      const spandateh2 = document.createElement('span')
      spandateh2.classList.add('date')
      const aTitle = document.createElement('a')
      aTitle.href = `blog?slug=${post.slug}`
      aTitle.textContent = post.title
      const pContent = document.createElement('p')
      pContent.classList.add('text')
      pContent.innerHTML = truncateText(post.content) + '...'

      //Insertion des composants de la balise div avec la classe post-text
      spandateh2.appendChild(aTitle)
      divPostText.appendChild(spanDate)
      divPostText.appendChild(document.createElement('br'))
      divPostText.appendChild(document.createElement('br'))
      divPostText.appendChild(spandateh2)
      divPostText.appendChild(pContent)
      article.appendChild(divPostText)

      //Insertion des composants de la balise div avec la classe post-info
      const divPostInfo = document.createElement('div')
      divPostInfo.classList.add('post-info')
      const divPostedBy = document.createElement('div')
      divPostedBy.classList.add('post-by')
      const aDivPostedBy = document.createElement('a')
      aDivPostedBy.href = 'home'
      aDivPostedBy.textContent = 'Travel with EPI'
      divPostedBy.textContent = 'Posted by '
      const divExtraInfo = document.createElement('div')
      divExtraInfo.classList.add('extra-info')
      const spanComments = document.createElement('span')
      spanComments.classList.add('comments')
      spanComments.textContent = await countComments(post.id)
      const iSpanComments = document.createElement('i')
      iSpanComments.classList.add('icon-bubble2')
      const spanVues = document.createElement('span')
      spanVues.innerHTML = `${post.vues} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z" fill="rgba(0,0,0,1)"></path></svg>`
      const divClearfix = document.createElement('div')
      divClearfix.classList.add('clearfix')

      spanComments.appendChild(iSpanComments)
      divPostedBy.appendChild(aDivPostedBy)
      divExtraInfo.appendChild(spanComments)
      divExtraInfo.appendChild(spanVues)
      divPostInfo.appendChild(divPostedBy)
      divPostInfo.appendChild(divExtraInfo)
      divPostInfo.appendChild(divClearfix)
      article.appendChild(divPostInfo)
      console.log(article)

      blogPostsContainer.appendChild(article)
    });
  } catch (error) {
    console.log('Une erreur est survenue lors de l\'affichage des articles de blog :', error);
  }
}

const truncateText = (text) => {
  if (text.length > 50) {
    return text.substring(0, 50);
  }
  return text;
};

const blogPostsContainer = document.querySelector('.blogs-container');
displayBlogPosts();

//Afficher un article
async function afficherPost(slug) {
  try {
    // Requête GET pour récupérer les informations du post à partir de l'API
    const response = await fetch("https://api.epideaa.com/api/posts/" + slug);
    const post = await response.json();

    const divPostImg = document.createElement('div')
    divPostImg.classList.add('post-image')

    const image = document.createElement('img');
    image.src = post.image;
    image.alt = 'post image 1'

    //Insertion de l'image dans sa div avec la classe post-image
    divPostImg.appendChild(image)
    articleSingle.appendChild(divPostImg)

    //Parsing de la date du post
    const postDate = new Date(post.created_at);
    const date = postDate.toDateString()

    const divPostText = document.createElement('div')
    divPostText.classList.add('post-text')
    const spanDate = document.createElement('span')
    spanDate.classList.add('date')
    spanDate.textContent = date
    const h2 = document.createElement('span')
    h2.classList.add('date')
    h2.textContent = post.title

    divPostText.appendChild(spanDate)
    divPostText.appendChild(document.createElement('br'))
    divPostText.appendChild(document.createElement('br'))
    divPostText.appendChild(h2)
    articleSingle.appendChild(divPostText)
    
    const div = document.createElement('div')
    div.classList.add('post-text', 'text-content')
    const divPostedBy = document.createElement('div')
    divPostedBy.classList.add('post-by')
    const aDivPostedBy = document.createElement('a')
    aDivPostedBy.href = 'home'
    aDivPostedBy.textContent = 'Travel with EPI'
    divPostedBy.textContent = 'Posted by '
    divPostedBy.appendChild(aDivPostedBy)
    const divText = document.createElement('div')
    divText.classList.add('text')
    const pText = document.createElement('p')
    pText.innerHTML = post.content
    divText.appendChild(pText)
    const divClearfix = document.createElement('div')
    divClearfix.classList.add('clearfix')
    divText.appendChild(divClearfix)
    div.appendChild(divPostedBy)
    div.appendChild(divText)
    articleSingle.appendChild(div)
    
    // Récupérer les commentaires depuis l'API
    const commentsResponse = await fetch(`https://api.epideaa.com/api/comments/${post.id}`);
    const comments = await commentsResponse.json();
    
    const divComments = document.createElement('div')
    divComments.classList.add('comments')
    const h3 = document.createElement('h3')
    h3.textContent = await countComments(post.id) + (await countComments(post.id) > 1 ? ' Comments' : ' Comment');
    divComments.appendChild(h3)
    const divComList = document.createElement('div')
    divComList.classList.add('comments-list')
    comments.map((comment, i) => {
      const divComment = document.createElement('div')
      divComment.classList.add('main-comment')
      const divComImg = document.createElement('div')
      divComImg.classList.add('comment-image-author')
      const comImg = document.createElement('img');
      comImg.src = "img/user-8.png"
      divComImg.appendChild(comImg)
      divComment.appendChild(divComImg)
      const divComInf = document.createElement('div')
      divComInf.classList.add('comment-info')
      const divCND = document.createElement('div')
      divCND.classList.add('comment-name-date')
      const spanName = document.createElement('span')
      spanName.classList.add('comment-name')
      spanName.textContent = comment.name

      const commentDate = new Date(comment.created_at);
      const date = commentDate.toDateString()
      
      const spanDate = document.createElement('span')
      spanDate.classList.add('comment-date')
      spanDate.textContent = date
      const divClearfix = document.createElement('div')
      divClearfix.classList.add('clearfix')
      divCND.appendChild(spanName)
      divCND.appendChild(spanDate)
      divCND.appendChild(divClearfix)
      divComInf.appendChild(divCND)
      const spanComment = document.createElement('span')
      spanComment.classList.add('comment-description')
      spanComment.textContent = comment.content
      divComInf.appendChild(spanComment)
      divComment.appendChild(divComInf)
      divComment.appendChild(divClearfix)
      divComList.appendChild(divComment)
    })
    divComments.appendChild(divComList)
    articleSingle.appendChild(divComments)

    //Poster un commentaire
    // Ajouter un événement de soumission au formulaire
    const form = document.querySelector('.comment-form')
    const nameInput = document.getElementById('nom')
    const emailInput = document.getElementById('email')
    const messageTextarea = document.getElementById('message')
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Récupérer les valeurs du formulaire
      const name = nameInput.value;
      const mail = emailInput.value;
      const message = messageTextarea.value;

      // Envoyer les données du commentaire à l'API
      const commentData = {
        name: name,
        content: message,
        email: mail,
        post_id: post.id,
      };

      try {
        const addCommentResponse = await fetch("https://api.epideaa.com/api/add-comment", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });

        if (addCommentResponse.ok) {
          location.reload();
        } else {
          // Erreur lors de l'ajout du commentaire
          console.error('Erreur lors de l\'ajout du commentaire');
        }
      } catch (error) {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    });
  } catch (error) {
    console.log('Erreur lors de la récupération du post :', error);
  }
}

const divSinglePostContainer = document.querySelector('.blog-single-post')
const articleSingle = document.querySelector('#tot8 article')

const currentURL = new URL(window.location.href);
const slug = currentURL.searchParams.get("slug");
afficherPost(slug);

