// Selection des éléments gu groupe innovation
const innovationHover = document.getElementById('innovation__hover');
const innovation = document.getElementById('innovation');
const innovationPicture = document.getElementById('innovation__picture');
const innovationTitle = document.getElementById('innovation__title');
const innovationSummary = document.getElementById('innovation__summary');
const innovationList = document.getElementById('innovation__list');
const innovationButton = document.getElementById('innovation__button');
const innovationCatchphrase = document.getElementById('innovation__catchphrase');
const innovationNumber = document.getElementById('innovation__number');
let isHover = false;

// Animation au hover de la section presentiel
innovationHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    innovation.classList.replace('innovation', 'innovation--hover');
    innovationPicture.classList.replace('innovation__picture', 'innovation__picture--hover');
    innovationCatchphrase.classList.replace('innovation__catchphrase', 'innovation__catchphrase--hover');
    innovationTitle.classList.replace('innovation__title', 'innovation__title--hover');
    innovation__summary.classList.replace('innovation__summary', 'innovation__summary--hover');
    innovationNumber.classList.replace('innovation__number', 'innovation__number--hover');
    innovationList.classList.replace('innovation__list', 'innovation__list--hover');
    innovationButton.classList.replace('innovation__button', 'innovation__button--hover');
    console.log('mouseover');
  }

});

innovationHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    innovation.classList.replace('innovation--hover', 'innovation');
    innovationPicture.classList.replace('innovation__picture--hover', 'innovation__picture');
    innovationTitle.classList.replace('innovation__title--hover', 'innovation__title');
    innovationCatchphrase.classList.replace('innovation__catchphrase--hover', 'innovation__catchphrase');
    innovation__summary.classList.replace('innovation__summary--hover', 'innovation__summary');
    innovationNumber.classList.replace('innovation__number--hover', 'innovation__number');
    innovationList.classList.replace('innovation__list--hover', 'innovation__list');
    innovationButton.classList.replace('innovation__button--hover', 'innovation__button');
    console.log('mouseleave');
  }

});
