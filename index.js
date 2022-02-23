const menuButton = document.querySelector('.menu-button')
const nav = document.querySelector('.sidenav')
const burgers = document.querySelectorAll('.burger')

let isNavOpen = false
menuButton.addEventListener('click', () => {
  if (!isNavOpen) {
    nav.classList.add('open')
    burgers.forEach(burger => burger.classList.add('close'))

  } else {
    nav.classList.remove('open')
    burgers.forEach(burger => burger.classList.remove('close'))
  }

  isNavOpen = !isNavOpen
})