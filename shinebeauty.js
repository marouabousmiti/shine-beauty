// Sélection des éléments
const slides = document.querySelectorAll('.image-containerslide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const textOverlay = document.querySelector('.text-overlay');

let currentIndex = 0;
let slideInterval;

// Fonction pour afficher une slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      textOverlay.textContent = slide.getAttribute('data-text');
    }
  });
}

// Fonction pour passer à la slide suivante
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Fonction pour passer à la slide précédente
function prevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

// Gestion des flèches
leftArrow.addEventListener('click', () => {
  prevSlide();
  resetSlideInterval(); // Réinitialiser le timer après un clic
});

rightArrow.addEventListener('click', () => {
  nextSlide();
  resetSlideInterval(); // Réinitialiser le timer après un clic
});

// Fonction pour démarrer le slider automatique
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000); // Change toutes les 3 secondes
}

// Fonction pour réinitialiser le timer automatique
function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideShow();
}

// Initialisation
showSlide(currentIndex);
startSlideShow();


const prixUnitaire =350;
const quantiteInput = document.getElementById('quantite');
const totalSpan = document.getElementById('total');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const commanderBtn = document.getElementById('commanderBtn');
const formContainer = document.getElementById('formContainer');
const commandeForm = document.getElementById('commandeForm');
const commandeTable = document.getElementById('commandeTable');
const commandeTableBody = document.getElementById('commandeTableBody');

// Afficher le formulaire au clic sur "Commander"
commanderBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    commanderBtn.style.display = 'none';  // Cacher le bouton Commander après avoir cliqué
});

// Mise à jour du total
function updateTotal() {
  const quantite = parseInt(quantiteInput.value, 10);
  const total = prixUnitaire * quantite;
  totalSpan.textContent = `${total.toFixed(2)} MAD`;
}

// Augmentation de la quantité
increaseBtn.addEventListener('click', () => {
  let quantite = parseInt(quantiteInput.value, 10);
  quantite++;
  quantiteInput.value = quantite;
  updateTotal();
});

// Diminution de la quantité
decreaseBtn.addEventListener('click', () => {
  let quantite = parseInt(quantiteInput.value, 10);
  if (quantite > 1) {
    quantite--;
    quantiteInput.value = quantite;
    updateTotal();
  }
});

// Initialisation du total
updateTotal();

// Ajouter la commande au tableau après validation du formulaire
commandeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const adresse = document.getElementById('adresse').value;
  const telephone = document.getElementById('telephone').value;
  const quantite = parseInt(quantiteInput.value, 10);
  const total = prixUnitaire * quantite;

  // Créer une nouvelle ligne pour le tableau
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${nom}</td>
    <td>${email}</td>
    <td>${adresse}</td>
    <td>${telephone}</td>
    <td>${quantite}</td>
    <td>${total.toFixed(2)} MAD</td>
  `;
  
  // Ajouter la ligne au tableau
  commandeTableBody.appendChild(row);

  // Afficher le tableau et cacher le formulaire
  commandeTable.style.display = 'block';
  formContainer.style.display = 'none';
  commanderBtn.style.display = 'block'; // Réafficher le bouton Commander pour une nouvelle commande
});
