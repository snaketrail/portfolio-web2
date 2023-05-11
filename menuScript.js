window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const icon = document.querySelector('.menu-toggle .icon');
  const iconText = icon.textContent;
  const serviceItem = document.querySelector('.service-item');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
    
    // Toggle the z-index of service-item
    if (menu.classList.contains('active')) {
      serviceItem.style.zIndex = '-1';
    } else {
      serviceItem.style.zIndex = ''; // Reset to default value
    }
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


  function goToHome(){
    window.location.href = "index.html";
  }
  


const privacyPolicyLink = document.getElementById('privacy-policy-link');


const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');


function openModal() {
  modalOverlay.style.display = 'block';
  modal.style.display = 'block';
}


function closeModal() {
  modalOverlay.style.display = 'none';
  modal.style.display = 'none';
}


privacyPolicyLink.addEventListener('click', openModal);


modalOverlay.addEventListener('click', closeModal);


const tosPolicyLink = document.getElementById('tos-policy-link');
const modal1Overlay = document.getElementById('modal1-overlay');
const modal1 = document.getElementById('modal1');


function openModal1() {
  modal1Overlay.style.display = 'block';
  modal1.style.display = 'block';
}


function closeModal1() {
  modal1Overlay.style.display = 'none';
  modal1.style.display = 'none';
}


tosPolicyLink.addEventListener('click', openModal1);


modal1Overlay.addEventListener('click', closeModal1);