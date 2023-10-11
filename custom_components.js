// Custom components
// Reference: https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc
// In .html that use this, add:
// <script src="custom_components.js"></script>
// footer with links
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<link rel="stylesheet" href="assets/css/main.css"/>
	<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	<footer id="footer">
	<div class="inner">
		<section>
			<ul class="icons">
				<li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
				<li><a href="https://github.com/JasonLiu2024" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
			</ul>
		</section>
	</div>
	</footer>
	`
class footerLinks extends HTMLElement { // NO caps besides first letter!
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}
customElements.define('footer-links', footerLinks);

// header with links
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<link rel="stylesheet" href="assets/css/main.css"/>
	<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	<header id="header">
		<div class="inner">
			<!-- Logo -->
				<a href="index.html" class="logo">
					<span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">Phantom</span>
				</a>
			<!-- Nav -->
				<nav>
					<ul>
						<li><a href="#menu">Menu</a></li>
					</ul>
				</nav>
			</div>
	</header>
	<nav id="menu">
					<h2>Menu</h2>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="generic.html">3D-Modeling</a></li>
						<li><a href="generic.html">Art</a></li>
					</ul>
				</nav>
	`
class headerLinks extends HTMLElement { // NO caps besides first letter!
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}
customElements.define('header-links', headerLinks);