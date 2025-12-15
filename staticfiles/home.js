const addingpictures=document.querySelector("#adding_picture .overlay");
const hiddenimages=document.getElementById("hiding");

addingpictures.addEventListener("click",(e)=>{
   e.stopPropagation();
  hiddenimages.classList.add('active');
});

hiddenimages.addEventListener("click",function(e){
  if(e.target === hiddenimages){
    hiddenimages.classList.remove('active');
  }
});


//for room carousel
const carouselStates = {};

 // Initialize carousels
    function initCarousel(carouselId, indicatorsId) {
        carouselStates[carouselId] = 0;
        const carousel = document.getElementById(carouselId);
        const images = carousel.getElementsByTagName('img');
        const indicatorsContainer = document.getElementById(indicatorsId);

     indicatorsContainer.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (i === 0 ? ' carousel-active-dot' : '');
        indicator.onclick = () => goToSlide(carouselId, indicatorsId, i);
        indicatorsContainer.appendChild(indicator);
    }
}    
function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.getElementsByTagName('img');
    const indicatorsId = carouselId.replace('carousel', 'indicators');
    
    // Remove active class
    images[carouselStates[carouselId]].classList.remove('carousel-active');
    
    // Update index
    carouselStates[carouselId] += direction;
    
    // Wrap around
    if (carouselStates[carouselId] >= images.length) {
        carouselStates[carouselId] = 0;
    } else if (carouselStates[carouselId] < 0) {
        carouselStates[carouselId] = images.length - 1;
    }
    //   // remove carousel-active class
    // images[carouselStates[carouselId]].classList.remove('carousel-active') cutttt;

     //add carousel-active class
     images[carouselStates[carouselId]].classList.add('carousel-active');
    
    // Update indicators
    updateIndicators(indicatorsId, carouselStates[carouselId]);
}

// Go to specific slide
function goToSlide(carouselId, indicatorsId, index) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.getElementsByTagName('img');
    
    images[carouselStates[carouselId]].classList.remove('carousel-active');
    carouselStates[carouselId] = index;
    images[carouselStates[carouselId]].classList.add('carousel-active');
    
    updateIndicators(indicatorsId, index);
}

// Update indicators
function updateIndicators(indicatorsId, activeIndex) {
    const indicators = document.getElementById(indicatorsId).children;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.toggle('carousel-active-dot', i === activeIndex);
    }
}

// Initialize all carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCarousel('carousel1', 'indicators1');
});

  






