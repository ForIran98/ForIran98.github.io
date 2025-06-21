// بارگذاری و نمایش ابزارهای اتصال از vasl.json در vasl.html
fetch('json/vasl.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('vasl-list');
    if (!list) return;
    list.innerHTML = '';
    data.apps.forEach(app => {
      const item = document.createElement('div');
      item.className = 'vasl-item';
      item.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" class="vasl-icon">
        <div class="vasl-info">
          <h2>${app.name}</h2>
          <div class="vasl-meta">
            <span>سیستم عامل: ${app.os.join(', ')}</span>
            <span>اپراتور: ${app.operator.join(', ')}</span>
          </div>
          <a href="${app.link}" target="_blank" rel="noopener" class="vasl-link">لینک گوگل پلی</a>
        </div>
      `;
      list.appendChild(item);
    });
  });
