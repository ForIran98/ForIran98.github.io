document.addEventListener('DOMContentLoaded', function() {
  fetch('json/transport.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('transport-list');
      data.transports.forEach(item => {
        const card = document.createElement('div');
        card.className = 'business-card';
        card.innerHTML = `
          <h2>${item.route}</h2>
          <p>راننده: ${item.driver}</p>
          <p>شماره تماس: <a href="tel:${item.phone}">${item.phone}</a></p>
          <p>توضیحات: ${item.description || ''}</p>
        `;
        list.appendChild(card);
      });
    });
});
