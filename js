// Gestion du défilement du Header
window.addEventListener('scroll', function() {
const header = document.getElementById('main-header');
if (window.scrollY > 50) {
header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
} else {
header.style.backgroundColor = 'transparent';
}
});
// Gestion du panier
let count = 0;
const cartDisplay = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.btn-buy');
buttons.forEach(btn => {
btn.addEventListener('click', () => {
count++;
cartDisplay.innerText = count;
btn.innerText = "AJOUTÉ ✓";
setTimeout(() => {
btn.innerText = "AJOUTER AU PANIER";
}, 2000);
});
});
