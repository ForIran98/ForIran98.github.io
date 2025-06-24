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
          // اگر عکس نبود، از favicon سایت استفاده کن (فقط اگر لینک معتبر بود)
          let imgSrc = biz.image && biz.image.trim() !== '' ? biz.image : '';
          if (!imgSrc) {
            let link = (biz.link || '').trim();
            if (link && !/^https?:\/\//i.test(link)) link = 'https://' + link;
            try {
              if (link) {
                const hostname = new URL(link).hostname;
                imgSrc = `https://www.google.com/s2/favicons?domain=${hostname}`;
              }
            } catch {}
          }
          if (!imgSrc) imgSrc = 'file/icon.png'; // تصویر پیش‌فرض اگر هیچ لینکی نبود
          li.innerHTML = `
            <img src="${imgSrc}" alt="${biz.name}" class="w-14 h-14 rounded-full object-cover border border-blue-200 shadow-sm"/>
            <div class="flex-1 w-full">
              <div class="flex flex-col md:flex-row md:items-center md:gap-4">
                <h3 class="text-base font-bold text-blue-800 mb-1 md:mb-0">${biz.name}</h3>
                <a href="${biz.link}" class="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-800 transition ml-2" target="_blank">مشاهده سایت</a>
                <div class="flex gap-2 mt-2 md:mt-0">
                  ${biz.contact ? `<a href="tel:${biz.contact}" title="تماس" class="inline-block text-green-600 hover:text-green-800" target="_blank"><svg xmlns='http://www.w3.org/2000/svg' class='inline w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z' /></svg></a>` : ''}
                  ${biz.instagram ? `<a href="${biz.instagram}" title="اینستاگرام" class="inline-block text-pink-500 hover:text-pink-700" target="_blank"><svg xmlns='http://www.w3.org/2000/svg' class='inline w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z'/></svg></a>` : ''}
                  ${biz.link ? `<a href="${biz.link}" title="وبسایت" class="inline-block text-blue-600 hover:text-blue-800" target="_blank"><svg xmlns='http://www.w3.org/2000/svg' class='inline w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 3h7v7m0 0L10 21l-7-7L17 3z' /></svg></a>` : ''}
                </div>
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
