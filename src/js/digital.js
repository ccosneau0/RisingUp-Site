const walletOne = document.getElementById('wallet--one');
const wallletTwo = document.getElementById('wallet--two');
const walletThree = document.getElementById('wallet--three');
const walletFour = document.getElementById('wallet--four');



const screenFilter = document.querySelector('.screen__filter');
const screenButton = document.getElementById('screen__button');
let isHover = false;



walletOne.addEventListener('click', function() {
  walletOne.classList.replace('wallet--first', 'wallet--active');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet--active--other', 'wallet');
})

wallletTwo.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet', 'wallet--active--other');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet--active--other', 'wallet');
})

walletThree.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet', 'wallet--active--other');
  walletFour.classList.replace('wallet--active--other', 'wallet');
})

walletFour.addEventListener('click', function() {
  walletOne.classList.replace('wallet--active', 'wallet--first');
  wallletTwo.classList.replace('wallet--active--other', 'wallet');
  walletThree.classList.replace('wallet--active--other', 'wallet');
  walletFour.classList.replace('wallet', 'wallet--active--other');
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
