// Formulario
console.log('Esta corriendo todo ok')
document.querySelector('#formLogin').addEventListener('submit', (e) => {
  e.preventDefault()

  const user = {
    email: document.querySelector('#email').value,
    password: document.querySelector('#password').value
  }

  console.log(user)

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json)
  .then(data => {
    console.log(data.token)
    localStorage.setItem('token', data.token)
    console.log('Login Success')
  })
  .catch(error => console.log(error))
})

// Current
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault()

  fetch('/current', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
})