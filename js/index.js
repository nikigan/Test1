let menu = document.getElementsByClassName('menu__item');

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', setActive);
}

function setActive(event) {
  let index = Array.from(menu).indexOf(event.currentTarget);
  event.currentTarget.classList.add('active');
  for (let j = 0; j < menu.length; j++) {
    if (index != j) {
      menu[j].classList.remove('active');
    }
  }
  document.getElementsByClassName('main-header__header')[0].textContent = this.textContent.replace(/\s/g, '');
}

function openMenu(obj) {
  if (obj.classList.contains('active')) {
    obj.classList.remove('active');
    document.getElementsByClassName('sidebar')[0].classList.remove('active');
  } else {
    obj.classList.add('active');
    document.getElementsByClassName('sidebar')[0].classList.add('active');
  }
}

function deactivateSidebar() {
  document.getElementsByClassName('sidebar__button')[0].classList.remove('active');
  document.getElementsByClassName('sidebar')[0].classList.remove('active');
}

document.getElementsByClassName('sidebar__button')[0].addEventListener('click', function () {
  openMenu(this);
});

document.getElementsByTagName('html')[0].addEventListener('click', function () {
  deactivateSidebar();
});

document.getElementsByClassName('sidebar')[0].addEventListener('click', function (e) {
  e.stopPropagation();
});

let lastPos = 50;
document.querySelector('.cards').addEventListener('scroll', function () {
  let currentPos = this.scrollTop;
  if (currentPos - lastPos > 0) {
    document.querySelector('.main-header').classList.add('scroll');
    //setTimeout(() => {
    document.querySelector('.main-grid').classList.add('scroll');
    // }, 500);
  } else {
    document.querySelector('.main-header').classList.remove('scroll');
    //setTimeout(() => {
    document.querySelector('.main-grid').classList.remove('scroll');
    // }, 0);
  }
});