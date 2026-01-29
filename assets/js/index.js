
// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});

// Close mobile menu on link click
menu.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.add('hidden');
	});
});


