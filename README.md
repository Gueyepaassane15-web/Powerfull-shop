<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Powerfull | Matériel de Sport Premium</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header id="main-header">
<div class="container">
<div class="logo">POWERFULL<span>.</span></div>
<nav>
<ul>
<li>Musculation</li>
<li>Fitness</li>
<li>Packs</li>
<li>🛒 <span id="cart-count">0</span></li>
</ul>
</nav>
</div>
</header>
<section class="hero">
<h1>LIBÉREZ VOTRE PUISSANCE</h1>
<p>Équipements d'élite pour athlètes déterminés.</p>
<button>VOIR LA BOUTIQUE</button>
</section>
<section class="products">
<div class="product-card">
<img src="https://images.unsplash.com/photo-1638536532686-
d610adfc8e5c">
</div>
</section>
<h3>Haltères Hexa (10kg)</h3>
<p>26 000 F CFA</p>
<button class="btn-buy">AJOUTER AU PANIER</button>
<script src="app.js"></script>
</body>
</html>

tyle.css
:root {
--dark: #0a0a0a;
--accent: #FFD700;
--white: #ffffff;
}
body {
font-family: 'Montserrat', sans-serif;
background-color: var(--dark);
color: var(--white);
}
header {
position: fixed;
width: 100%;
transition: 0.4s;
padding: 20px 0;
}
.logo span { color: var(--accent); }
.hero {
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
url('https://images.unsplash.com/
photo-1534438327276-14e5300c3a48');
background-size: cover;
}
.btn-buy {
border: 2px solid var(--accent);
color: var(--accent);
background: transparent;
cursor: pointer;
transition: 0.3s;
}
.btn-buy:hover { background: var(--accent); color: black;
