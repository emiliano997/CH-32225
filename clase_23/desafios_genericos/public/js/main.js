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
  .then(res => res.json())
  .then(data => {
    console.log(data)
    localStorage.setItem('token', data.token)
    console.log('Login Success')
  })
  .catch(error => console.log(error))
})
