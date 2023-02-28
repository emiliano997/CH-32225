(async () => {
  if(localStorage.getItem('token')) {
    const res = await fetch('/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })

    const data = await res.json();
    console.log(data)

    if(data.error){
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    console.log(data.user)

    document.querySelector('#user').innerHTML = data.user.email

    document.querySelector('#tbody').innerHTML = data.products.map(product => `
        <tr>
          <td> ${product._id} </td>
          <td> ${product.title} </td>
          <td> ${ product.description} </td>
          <td> ${ product.price} </td>
          <td> ${ product.stock} </td>
          <td>
            <a href="/edit/${ product._id }" class="btn btn-success"> Edit </a>
            <a href="/delete/${ product._id}" class="btn btn-danger"> Delete </a>
          </td>
        </tr>
    `).join('')
  } else {
    window.location.href = '/login'
  }
})()

document.querySelector('#logout').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location.href = '/login'
})