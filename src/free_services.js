document.addEventListener('DOMContentLoaded', function() {
  fetch('json/free_services.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('services-list');
      data.services.forEach(item => {
        const card = document.createElement('div');
        card.className = 'business-card';
        card.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <p>ارائه‌دهنده: ${item.provider}</p>
          <p>تماس: <a href="${item.link}" target="_blank">${item.link}</a></p>
        `;
        list.appendChild(card);
      });
    });
});
