function toggleNavLinks() {
  const navLinks = document.querySelectorAll('.nav-links');

  navLinks.forEach(function(navLink) {
    navLink.classList.toggle('show');
  });
}