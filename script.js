document.querySelector('.hamburger').addEventListener('click', function() {
    const navbarLinks = document.querySelector('.navbar ul');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
});
