// Sélection des éléments nécessaires
const slides = document.querySelectorAll('.image-containerslide'); // Les images
const textOverlay = document.querySelector('.text-overlay'); // Texte associé
const leftArrow = document.querySelector('.left-arrow'); // Flèche gauche
const rightArrow = document.querySelector('.right-arrow'); // Flèche droite

let currentIndex = 0; // Index de l'image active

// Fonction pour mettre à jour l'affichage du slider
function updateSlider() {
  // Masquer toutes les images et désactiver leur état actif
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
      // Met à jour le texte correspondant à l'image
      textOverlay.textContent = slide.getAttribute('data-text');
    }
  });
}

// Navigation vers l'image précédente
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Retourne à la dernière image si on dépasse
  updateSlider();
});

// Navigation vers l'image suivante
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Retourne à la première image si on dépasse
  updateSlider();
});

// Initialisation : affiche la première image et son texte
updateSlider();
