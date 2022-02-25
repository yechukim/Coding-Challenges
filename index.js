const input = document.querySelector('#email')
const checkIcon = document.querySelector('.tick')

input.addEventListener('input', (e) => {

  const email = e.target.value

  if (isValid(email)) {
    input.classList.add('valid')
    checkIcon.classList.add('valid')
  } else {
    input.classList.remove('valid')
    checkIcon.classList.remove('valid')
  }

})

const isValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}