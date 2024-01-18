 // Sélectionner le formulaire de la newsletter
 const newsletterForm = document.querySelector('.newsletter-container form');

 // Ajouter un écouteur d'événement pour le soumission du formulaire
 newsletterForm.addEventListener('submit', function(event) {
 event.preventDefault(); // Empêcher la soumission du formulaire

 // Récupérer la valeur de l'adresse email saisie par l'utilisateur
 const emailInput = document.querySelector('.newsletter-email');
 const email = emailInput.value;

 // Envoyer la demande de souscription à la newsletter
 subscribeToNewsletter(email);

 // Réinitialiser le champ de l'adresse email
 emailInput.value = '';
 });

 // Fonction pour envoyer la demande de souscription à la newsletter
 function subscribeToNewsletter(email) {
     const url = `https://api.epideaa.com/api/subscription?email=${email}`;

     fetch(url, {
         method: 'POST',
         headers: {
         'Content-Type': 'application/json'
         }
     })
     .then(response => {
         if (response.ok) {
            alert('Souscription réussie ! Merci de vous être abonné(e) !');
         console.log('Souscription réussie ! Merci de vous être inscrit. ');
         } else {
         console.error(' Échec de la souscription. Veuillez réessayer ultérieurement. ');
         }
     })
     .catch(error => {
         console.error('Une erreur s\'est produite. Veuillez réessayer ultérieurement. ', error);
     });
 }