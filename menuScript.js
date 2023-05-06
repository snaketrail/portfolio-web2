window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle .icon');
    const iconText = icon.textContent;
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
  
    menuLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        menuLinks.forEach((link) => {
          link.classList.remove('active');
        });
        e.target.classList.add('active');
      });
    });
  });