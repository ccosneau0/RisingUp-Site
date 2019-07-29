const screenFilter = document.querySelector('.screen__filter');
const screenButton = document.getElementById('screen__button');
let isHover = false;

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
