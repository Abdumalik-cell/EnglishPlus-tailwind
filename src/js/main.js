const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');

	const icon = mobileMenuBtn.querySelector('svg path');
	if (mobileMenu.classList.contains('hidden')) {
		icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
	} else {
		icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
	}
});
