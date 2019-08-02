const walletOne = document.getElementById('wallet--one');
const wallletTwo = document.getElementById('wallet--two');
const walletThree = document.getElementById('wallet--three');
const walletFour = document.getElementById('wallet--four');
const walletFive = document.getElementById('wallet--five');
const walletSix = document.getElementById('wallet--six');
const walletSeven = document.getElementById('wallet--seven');
const walletHeight = document.getElementById('wallet--height');

const walletTextOne = document.getElementById('apprenticeship__text');
const walletTextTwo = document.getElementById('apprenticeship__text--two');
const walletTextThree = document.getElementById('apprenticeship__text--three');
const walletTextFour = document.getElementById('apprenticeship__text--four');
const walletTextFive = document.getElementById('apprenticeship__text--five');
const walletTextSix = document.getElementById('apprenticeship__text--six');
const walletTextSeven = document.getElementById('apprenticeship__text--seven');
const walletTextHeight = document.getElementById('apprenticeship__text--height');


const screenFilter = document.querySelector('.screen__filter');
const screenButton = document.getElementById('screen__button');
let isHover = false;



walletOne.addEventListener('click', function() {
  walletOne.classList.replace('wallet--first', 'wallet--active');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet--active--other', 'wallet');

  walletTextOne.classList.replace('apprenticeship__text--none', 'apprenticeship__text');
  walletTextTwo.classList.replace('apprenticeship__text--two', 'apprenticeship__text--none');
  walletTextThree.classList.replace('apprenticeship__text--three', 'apprenticeship__text--none');
  walletTextFour.classList.replace('apprenticeship__text--four', 'apprenticeship__text--none');
})

wallletTwo.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet', 'wallet--active--other');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet--active--other', 'wallet');

  walletTextOne.classList.replace('apprenticeship__text', 'apprenticeship__text--none');
  walletTextTwo.classList.replace('apprenticeship__text--none', 'apprenticeship__text--two');
  walletTextThree.classList.replace('apprenticeship__text--three', 'apprenticeship__text--none');
  walletTextFour.classList.replace('apprenticeship__text--four', 'apprenticeship__text--none');
})

walletThree.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet', 'wallet--active--other');
  walletFour.classList.replace('wallet--active--other', 'wallet');

  walletTextOne.classList.replace('apprenticeship__text', 'apprenticeship__text--none');
  walletTextTwo.classList.replace('apprenticeship__text--two', 'apprenticeship__text--none');
  walletTextThree.classList.replace('apprenticeship__text--none', 'apprenticeship__text--three');
  walletTextFour.classList.replace('apprenticeship__text--four', 'apprenticeship__text--none');
})

walletFour.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet', 'wallet--active--other');

  walletTextOne.classList.replace('apprenticeship__text', 'apprenticeship__text--none');
  walletTextTwo.classList.replace('apprenticeship__text--two', 'apprenticeship__text--none');
  walletTextThree.classList.replace('apprenticeship__text--three', 'apprenticeship__text--none');
  walletTextFour.classList.replace('apprenticeship__text--none', 'apprenticeship__text--four');
})




walletFive.addEventListener('click', function() {
  walletFive.classList.replace('wallet--first', 'wallet--active');
  walletSix.classList.replace('wallet--active--other', 'wallet');
  walletSeven.classList.replace('wallet--active--other', 'wallet');
  walletHeight.classList.replace('wallet--active--other', 'wallet');

  walletTextFive.classList.replace('apprenticeship__text--none', 'apprenticeship__text--left--five');
  walletTextSix.classList.replace('apprenticeship__text--left--six', 'apprenticeship__text--none');
  walletTextSeven.classList.replace('apprenticeship__text--left--seven', 'apprenticeship__text--none');
  walletTextHeight.classList.replace('apprenticeship__text--left--height', 'apprenticeship__text--none');
})

walletSix.addEventListener('click', function() {
  walletFive.classList.replace('wallet--active', 'wallet--first');
  walletSix.classList.replace('wallet', 'wallet--active--other');
  walletSeven.classList.replace('wallet--active--other', 'wallet');
  walletHeight.classList.replace('wallet--active--other', 'wallet');

  walletTextFive.classList.replace('apprenticeship__text--left--five', 'apprenticeship__text--none');
  walletTextSix.classList.replace('apprenticeship__text--none', 'apprenticeship__text--left--six');
  walletTextSeven.classList.replace('apprenticeship__text--left--seven', 'apprenticeship__text--none');
  walletTextHeight.classList.replace('apprenticeship__text--left--height', 'apprenticeship__text--none');
})

walletSeven.addEventListener('click', function() {
  walletFive.classList.replace('wallet--active', 'wallet--first');
  walletSix.classList.replace('wallet--active--other', 'wallet');
  walletSeven.classList.replace('wallet', 'wallet--active--other');
  walletHeight.classList.replace('wallet--active--other', 'wallet');

  walletTextFive.classList.replace('apprenticeship__text--left--five', 'apprenticeship__text--none');
  walletTextSix.classList.replace('apprenticeship__text--left--six', 'apprenticeship__text--none');
  walletTextSeven.classList.replace('apprenticeship__text--none', 'apprenticeship__text--left--seven');
  walletTextHeight.classList.replace('apprenticeship__text--left--height', 'apprenticeship__text--none');
})

walletHeight.addEventListener('click', function() {
  walletFive.classList.replace('wallet--active', 'wallet--first');
  walletSix.classList.replace('wallet--active--other', 'wallet');
  walletSeven.classList.replace('wallet--active--other', 'wallet');
  walletHeight.classList.replace('wallet', 'wallet--active--other');

  walletTextFive.classList.replace('apprenticeship__text--left--five', 'apprenticeship__text--none');
  walletTextSix.classList.replace('apprenticeship__text--left--six', 'apprenticeship__text--none');
  walletTextSeven.classList.replace('apprenticeship__text--left--seven', 'apprenticeship__text--none');
  walletTextHeight.classList.replace('apprenticeship__text--none', 'apprenticeship__text--left--height');
})




screenFilter.addEventListener('mouseover', function() {
    screenButton.classList.replace('screen__button', 'screen__button--hover');
    screenFilter.style.opacity = 1;
    console.log('mouseover');
})

screenFilter.addEventListener('mouseleave', function() {
    screenButton.classList.replace('screen__button--hover', 'screen__button');
    screenFilter.style.opacity = 0;
    console.log('mouseleave');
})


screenButton.addEventListener('mouseover', function() {
    screenButton.classList.replace('screen__button', 'screen__button--hover');
    screenFilter.style.opacity = 1;
    console.log('mouseover');
})

screenButton.addEventListener('mouseleave', function() {
    screenButton.classList.replace('screen__button--hover', 'screen__button');
    console.log('mouseleave');
})
