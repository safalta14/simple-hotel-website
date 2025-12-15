document.addEventListener("DOMContentLoaded", () => {
  const carouselStates = {};

  function initCarousel(carouselId, indicatorsId) {
    carouselStates[carouselId] = 0;
    const carousel = document.getElementById(carouselId);
    const images = carousel.getElementsByTagName('img');

    // Set carousel width to fit all images
    carousel.style.width = `${images.length * 100}%`;

    // Set each image width
    for (let img of images) {
      img.style.width = `${100 / images.length}%`;
    }

    // Indicators
    const indicatorsContainer = document.getElementById(indicatorsId);
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
      const indicator = document.createElement('div');
      indicator.className = 'indicator' + (i === 0 ? ' carousel-active-dot' : '');
      indicator.onclick = () => goToSlide(carouselId, indicatorsId, i);
      indicatorsContainer.appendChild(indicator);
    }

    // Buttons
    const prevBtn = document.getElementById(`prevBtn${carouselId.slice(-1)}`);
    const nextBtn = document.getElementById(`nextBtn${carouselId.slice(-1)}`);

    
    prevBtn.addEventListener('click', () => change(carouselId, -1));
    nextBtn.addEventListener('click', () => change(carouselId, 1));
  }

  function change(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.getElementsByTagName('img');
    const indicatorsId = carouselId.replace('carousel', 'indicators');

    carouselStates[carouselId] += direction;

    if (carouselStates[carouselId] >= images.length) carouselStates[carouselId] = 0;
    if (carouselStates[carouselId] < 0) carouselStates[carouselId] = images.length - 1;

    // Slide
    const imageWidth = carousel.clientWidth / images.length; // width of 1 image in %
carousel.style.transform = `translateX(-${carouselStates[carouselId] * (100 / images.length)}%)`;


    updateIndicators(indicatorsId, carouselStates[carouselId]);
  }

  function goToSlide(carouselId, indicatorsId, index) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.getElementsByTagName('img');
    carouselStates[carouselId] = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators(indicatorsId, index);
  }

  function updateIndicators(indicatorsId, activeIndex) {
    const indicators = document.getElementById(indicatorsId).children;
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.toggle('carousel-active-dot', i === activeIndex);
    }
  }

  // Initialize
  initCarousel('carousel1', 'indicators1');
  initCarousel('carousel2','indicators2');
  initCarousel('carousel3','indicators3');

});


