//Slider method
const methodOne = document.getElementById('bubble--one');
const methodTwo = document.getElementById('bubble--two');
const methodThree = document.getElementById('bubble--three');



// Selection des éléments du groupe innovation
const innovationHover = document.getElementById('innovation__hover');
const innovation = document.getElementById('innovation');
const innovationList = document.getElementById('innovation__list');
const innovationCatchphrase = document.getElementById('innovation__catchphrase');
const innovationNumber = document.getElementById('innovation__number');


// Selection des éléments du groupe management
const managementHover = document.getElementById('management__hover');
const management = document.getElementById('management');
const managementList = document.getElementById('management__list');
const managementCatchphrase = document.getElementById('management__catchphrase');
const managementNumber = document.getElementById('management__number');

// Selection des éléments du groupe skills
const skillsHover = document.getElementById('skills__hover');
const skills = document.getElementById('skills');
const skillsList = document.getElementById('skills__list');
const skillsCatchphrase = document.getElementById('skills__catchphrase');
const skillsNumber = document.getElementById('skills__number');

// Selection des éléments du groupe pedagogie
const pedagogieHover = document.getElementById('pedagogie__hover');
const pedagogie = document.getElementById('pedagogie');
const pedagogieList = document.getElementById('pedagogie__list');
const pedagogieCatchphrase = document.getElementById('pedagogie__catchphrase');
const pedagogieNumber = document.getElementById('pedagogie__number');

// Selection des éléments du groupe enfance
const enfanceHover = document.getElementById('enfance__hover');
const enfance = document.getElementById('enfance');
const enfanceList = document.getElementById('enfance__list');
const enfanceCatchphrase = document.getElementById('enfance__catchphrase');
const enfanceNumber = document.getElementById('enfance__number');

let isHover = false;



//action click sur les bulles de la section method

methodOne.addEventListener('click', function() {
  console.log('bubble one');
  methodOne.classList.replace('bubble', 'bubble--active');
  methodTwo.classList.replace('bubble--active', 'bubble');
  methodThree.classList.replace('bubble--active', 'bubble');
})

methodTwo.addEventListener('click', function() {
  console.log('bubble two');
  methodOne.classList.replace('bubble--active', 'bubble');
  methodTwo.classList.replace('bubble', 'bubble--active');
  methodThree.classList.replace('bubble--active', 'bubble');
})

methodThree.addEventListener('click', function() {
  console.log('bubble three');
  methodOne.classList.replace('bubble--active', 'bubble');
  methodTwo.classList.replace('bubble--active', 'bubble');
  methodThree.classList.replace('bubble', 'bubble--active');
})





// Animation au hover de la section presentiel
innovationHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    innovation.classList.replace('innovation', 'innovation--hover');
    innovationCatchphrase.classList.replace('innovation__catchphrase', 'innovation__catchphrase--hover');
    innovationNumber.classList.replace('innovation__number', 'innovation__number--hover');
    innovationList.classList.replace('innovation__list', 'innovation__list--hover');
    console.log('mouseover');
  }
});

innovationHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    innovation.classList.replace('innovation--hover', 'innovation');
    innovationCatchphrase.classList.replace('innovation__catchphrase--hover', 'innovation__catchphrase');
    innovationNumber.classList.replace('innovation__number--hover', 'innovation__number');
    innovationList.classList.replace('innovation__list--hover', 'innovation__list');
    console.log('mouseleave');
  }
});



// Animation au hover de la section management
managementHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    management.classList.replace('management', 'management--hover');
    managementCatchphrase.classList.replace('management__catchphrase', 'management__catchphrase--hover');
    managementNumber.classList.replace('management__number', 'management__number--hover');
    managementList.classList.replace('management__list', 'management__list--hover');
    console.log('mouseover');
  }
});

managementHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    management.classList.replace('management--hover', 'management');
    managementCatchphrase.classList.replace('management__catchphrase--hover', 'management__catchphrase');
    managementNumber.classList.replace('management__number--hover', 'management__number');
    managementList.classList.replace('management__list--hover', 'management__list');
    console.log('mouseleave');
  }
});



// Animation au hover de la section skills
skillsHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    skills.classList.replace('skills', 'skills--hover');
    skillsCatchphrase.classList.replace('skills__catchphrase', 'skills__catchphrase--hover');
    skillsNumber.classList.replace('skills__number', 'skills__number--hover');
    skillsList.classList.replace('skills__list', 'skills__list--hover');
    console.log('mouseover');
  }
});

skillsHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    skills.classList.replace('skills--hover', 'skills');
    skillsCatchphrase.classList.replace('skills__catchphrase--hover', 'skills__catchphrase');
    skillsNumber.classList.replace('skills__number--hover', 'skills__number');
    skillsList.classList.replace('skills__list--hover', 'skills__list');
    console.log('mouseleave');
  }
});


// Animation au hover de la section pedagogie
pedagogieHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    pedagogie.classList.replace('pedagogie', 'pedagogie--hover');
    pedagogieCatchphrase.classList.replace('pedagogie__catchphrase', 'pedagogie__catchphrase--hover');
    pedagogieNumber.classList.replace('pedagogie__number', 'pedagogie__number--hover');
    pedagogieList.classList.replace('pedagogie__list', 'pedagogie__list--hover');
    console.log('mouseover');
  }
});

pedagogieHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    pedagogie.classList.replace('pedagogie--hover', 'pedagogie');
    pedagogieCatchphrase.classList.replace('pedagogie__catchphrase--hover', 'pedagogie__catchphrase');
    pedagogieNumber.classList.replace('pedagogie__number--hover', 'pedagogie__number');
    pedagogieList.classList.replace('pedagogie__list--hover', 'pedagogie__list');
    console.log('mouseleave');
  }
});


// Animation au hover de la section enfance
enfanceHover.addEventListener('mouseover', function() {
  if(isHover === false) {
    isHover = true;
    enfance.classList.replace('enfance', 'enfance--hover');
    enfanceCatchphrase.classList.replace('enfance__catchphrase', 'enfance__catchphrase--hover');
    enfanceNumber.classList.replace('enfance__number', 'enfance__number--hover');
    enfanceList.classList.replace('enfance__list', 'enfance__list--hover');
    console.log('mouseover');
  }
});

enfanceHover.addEventListener('mouseleave', function() {
  if(isHover === true) {
    isHover = false;
    enfance.classList.replace('enfance--hover', 'enfance');
    enfanceCatchphrase.classList.replace('enfance__catchphrase--hover', 'enfance__catchphrase');
    enfanceNumber.classList.replace('enfance__number--hover', 'enfance__number');
    enfanceList.classList.replace('enfance__list--hover', 'enfance__list');
    console.log('mouseleave');
  }
});
