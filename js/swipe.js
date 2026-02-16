export function initSwipe() {
  const slider = document.getElementById('weather-slider');
  const dots = document.querySelectorAll('.dot');

  if (!slider) return;

  slider.addEventListener('scroll', () => {
    // Calculamos qué página está visible
    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    
    // Actualizamos los puntitos
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });
}