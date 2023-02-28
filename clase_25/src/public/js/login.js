document.querySelector('#formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = {
    email: document.querySelector('#email').value,
    password: document.querySelector('#password').value
  }

  fetch('/api/sessions/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    if(data.token) {
      localStorage.setItem('token', data.token)
      window.location.href = '/products'
    }
  })
  .catch(err => console.log(err, error.message))
})

(async ()=> {
  if(localStorage.getItem('token')) {
    window.location.href = '/products'
  }

})()