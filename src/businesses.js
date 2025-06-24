document.addEventListener('DOMContentLoaded', function() {
  fetch('json/businesses.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('businesses-list');
      list.innerHTML = '';
      // دسته‌بندی کسب‌وکارها
      const free = data.businesses.filter(b => b.isFree);
      const discounted = data.businesses.filter(b => !b.isFree && b.isDiscounted);
      const other = data.businesses.filter(b => !b.isFree && !b.isDiscounted);

      function renderSection(title, items) {
        if (items.length === 0) return;
        const section = document.createElement('section');
        section.innerHTML = `<h2 class="text-xl font-bold text-green-700 mb-4">${title}</h2>`;
        items.forEach(biz => {
          const card = document.createElement('div');
          card.className = 'business-card mb-4 p-4 rounded-xl shadow bg-white flex flex-col md:flex-row items-center gap-4 border border-blue-100 hover:shadow-2xl transition';
          card.innerHTML = `
            <img src="${biz.image}" alt="${biz.name}" class="w-20 h-20 rounded-full object-cover border-2 border-blue-200 shadow-sm"/>
            <div class="business-info flex-1">
              <h3 class="text-lg font-bold text-blue-800 mb-1">${biz.name}</h3>
              <p class="text-gray-700 mb-2">${biz.description || ''}</p>
              <div class="bg-blue-50 border-r-4 border-blue-400 text-blue-900 p-2 mb-2 rounded text-sm font-semibold" style="direction: rtl;">
                <span class="font-bold">دلیل حمایت:</span> ${biz.reason || ''}
              </div>
              <a href="${biz.link}" class="business-link inline-block mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-800 transition" target="_blank">مشاهده سایت</a>
            </div>
          `;
          section.appendChild(card);
        });
        list.appendChild(section);
      }

      renderSection('کسب‌وکارهای با خدمات رایگان', free);
      renderSection('کسب‌وکارهای با تخفیف ویژه', discounted);
      renderSection('سایر کسب‌وکارها', other);
    });
});
