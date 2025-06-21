document.addEventListener('DOMContentLoaded', function() {
  fetch('json/businesses.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('businesses-list');
      data.businesses.forEach(biz => {
        const card = document.createElement('div');
        card.className = 'business-card';
        card.innerHTML = `
          <img src="${biz.image}" alt="${biz.name}">
          <div class="business-info">
            <h2>${biz.name}</h2>
            <p>${biz.description}</p>
            <a href="${biz.link}" class="business-link" target="_blank">مشاهده سایت</a>
          </div>
        `;
        list.appendChild(card);
      });
    });
});
