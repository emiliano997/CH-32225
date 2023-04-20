(async () => {
  if(localStorage.getItem('token')){
    window.location.href = '/products'
  }
})()

document.querySelector('#formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = {
    username: document.querySelector('#username').value,
    email: document.querySelector('#email').value,
    password: document.querySelector('#password').value
  }

  fetch('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    alert('Usuario creado correctamente')
  })
  .catch(err => console.log(err))
})