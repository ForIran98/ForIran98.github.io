// درج هدر و فوتر ثابت و مدرن در همه صفحات (id=main-header, main-footer)
document.addEventListener('DOMContentLoaded', function() {
  const header = `
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="index.html" class="text-2xl sm:text-3xl font-extrabold text-white">برای ایران</a>
      <nav class="flex gap-4 text-sm">
        <a href="index.html">صفحه اصلی</a>
        <a href="main.html">پروژه‌ها</a>
        <a href="businesses.html">کسب‌وکارها</a>
        <a href="news.html">اخبار</a>
        <a href="vasl.html">وصل</a>
        <a href="ir.html">منابع ایرانی</a>
        <a href="Residences.html">اقامتگاه‌ها</a>
        <a href="SOS.html">شماره اضطراری</a>
      </nav>
    </div>
  `;
  const footer = `
    <div class="container mx-auto px-6 py-4 text-center">
      <p class="text-sm">برای ایران</p>
    </div>
  `;
  const h = document.getElementById('main-header');
  if (h) h.innerHTML = header;
  const f = document.getElementById('main-footer');
  if (f) f.innerHTML = footer;
});
