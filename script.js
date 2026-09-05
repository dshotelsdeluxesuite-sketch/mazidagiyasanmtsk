document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Mobil Menü Açma/Kapatma
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Mobil menüdeyken bir linke tıklandığında menüyü kapat
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});

