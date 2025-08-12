const animatedElements = document.querySelectorAll('.skills, .card , .container, .aboutme-section ,.contactme-section ,.main');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Remove on scroll up
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.classList.add('hidden-left');
    observer.observe(el);
  });