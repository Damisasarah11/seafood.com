

  // Get the navbar collapse element
  const navbarCollapse = document.getElementById('navbar-collapse-toggle');

  // Get all navbar links
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add event listener to each link
  navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Collapse the navbar
      navbarCollapse.classList.remove('show');
      // Reset the toggler button state
      document.querySelector('.navbar-toggler').classList.add('collapsed');
    });
  });

