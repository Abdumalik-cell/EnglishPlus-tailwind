const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const modal = document.getElementById('modal');
const btn = document.getElementById('btn');
const overlay = document.getElementById('modalOverlay');

mobileMenuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');

	const icon = mobileMenuBtn.querySelector('svg path');
	if (mobileMenu.classList.contains('hidden')) {
		icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
	} else {
		icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
	}
});

function openModal() {
	overlay.classList.remove('hidden');
	document.body.style.overflow = 'hidden';

	setTimeout(() => {
		modal.classList.remove('scale-95', 'opacity-0');
		modal.classList.add('scale-100', 'opacity-100');
	}, 10);
}

function closeModal() {
	modal.classList.add('scale-95', 'opacity-0');

	setTimeout(() => {
		overlay.classList.add('hidden');
		document.body.style.overflow = '';
	}, 300);
}

overlay.addEventListener('click', e => {
	if (e.target === overlay) {
		closeModal();
	}
});

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		closeModal();
	}
});

const form = overlay.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const data = {
		fullName: document.getElementById('fullName').value,
		phoneNumber: document.getElementById('phoneNumber').value,
		emailAddress: document.getElementById('emailAddress').value,
	};

	console.log(data);

	closeModal();
});
