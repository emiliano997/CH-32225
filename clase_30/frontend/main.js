fetch('http://localhost:3000/api/orders')
  .then(response => response.json())
  .then(data => {
    const fragment = document.createDocumentFragment();

    data.result.forEach(order => {
      const div = document.createElement('div');
      const priceParagraph = document.createElement('p');
      const statusParagraph = document.createElement('p');
      const number = document.createElement('p');

      priceParagraph.innerHTML = `Precio: ${order.totalPrice}`;
      statusParagraph.innerHTML = `Estado: ${order.status}`;
      number.innerHTML = `Número: ${order.number}`;

      div.appendChild(number);
      div.appendChild(statusParagraph);
      div.appendChild(priceParagraph);

      fragment.append(div);
    })

    const orderContainer = document.querySelector('#orders')
    orderContainer.appendChild(fragment);
  });