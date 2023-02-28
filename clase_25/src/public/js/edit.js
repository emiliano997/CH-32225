document.querySelector('#send').addEventListener('click', function (e) {
  e.preventDefault();
  const id = document.querySelector('#id').value;

  const data = {
    title: document.querySelector('#title').value,
    description: document.querySelector('#description').value,
    price: document.querySelector('#price').value,
    stock: document.querySelector('#stock').value,
  }
  
  fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    window.location.href = '/'
  })

})