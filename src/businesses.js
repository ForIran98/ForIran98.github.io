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
        const ul = document.createElement('ul');
        ul.className = 'divide-y divide-blue-100 bg-white rounded-xl shadow mb-8';
        items.forEach(biz => {
          const li = document.createElement('li');
          li.className = 'flex flex-col md:flex-row items-center gap-4 p-4 hover:bg-blue-50 transition';
          li.innerHTML = `
            <img src="${biz.image}" alt="${biz.name}" class="w-14 h-14 rounded-full object-cover border border-blue-200 shadow-sm"/>
            <div class="flex-1 w-full">
              <div class="flex flex-col md:flex-row md:items-center md:gap-4">
                <h3 class="text-base font-bold text-blue-800 mb-1 md:mb-0">${biz.name}</h3>
                <a href="${biz.link}" class="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-800 transition ml-2" target="_blank">مشاهده سایت</a>
              </div>
              <p class="text-gray-700 text-sm mt-1">${biz.description || ''}</p>
              <div class="bg-blue-50 border-r-4 border-blue-400 text-blue-900 p-2 mt-2 rounded text-xs font-semibold" style="direction: rtl;">
                <span class="font-bold">دلیل حمایت:</span> ${biz.reason || ''}
                ${biz.sourceLink ? `<a href='${biz.sourceLink}' class='text-blue-700 underline ml-2' target='_blank'>منبع</a>` : ''}
              </div>
            </div>
          `;
          ul.appendChild(li);
        });
        section.appendChild(ul);
        list.appendChild(section);
      }

      renderSection('کسب‌وکارهای با خدمات رایگان', free);
      renderSection('کسب‌وکارهای با تخفیف ویژه', discounted);
      renderSection('سایر کسب‌وکارها', other);
    });
});
