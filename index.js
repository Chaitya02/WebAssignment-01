document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('.content > div');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  function handleLinkClick(event) {
    event.preventDefault();

    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    event.target.classList.add('active');

    const targetId = event.target.getAttribute('href').substring(1);

    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
  
});
