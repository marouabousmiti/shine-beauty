const prixUnitaire = 10; // Le prix d'un produit
const quantiteInput = document.getElementById('quantite');
const totalSpan = document.getElementById('total');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');

// Mettre à jour le total
function updateTotal() {
    const quantite = parseInt(quantiteInput.value);
    const total = prixUnitaire * quantite;
    totalSpan.textContent = `dh${total.toFixed(2)}`;
}

// Augmenter la quantité
increaseBtn.addEventListener('click', function() {
    let quantite = parseInt(quantiteInput.value);
    quantite++;
    quantiteInput.value = quantite;
    updateTotal();
});

// Diminuer la quantité
decreaseBtn.addEventListener('click', function() {
    let quantite = parseInt(quantiteInput.value);
    if (quantite > 1) {
        quantite--;
        quantiteInput.value = quantite;
        updateTotal();
    }
});

// Initialiser le total
updateTotal();