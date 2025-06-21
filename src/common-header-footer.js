// درج هدر و فوتر ثابت و مدرن در همه صفحات (id=main-header, main-footer)
document.addEventListener('DOMContentLoaded', function() {
  const header = `
    <div class="container mx-auto px-4 py-3 flex justify-between items-center relative">
      <a href="index.html" class="text-2xl sm:text-3xl font-extrabold text-white mx-auto block text-center" style="flex:1;z-index:20;">برای ایران</a>
      <button id="menu-toggle" class="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white focus:outline-none z-30" aria-label="باز کردن منو">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <nav id="main-nav" class="flex gap-4 text-sm sm:static sm:flex-row sm:gap-4 fixed sm:top-auto sm:right-auto top-16 right-0 bg-blue-900/95 sm:bg-transparent w-48 sm:w-auto flex-col sm:flex-row rounded-lg sm:rounded-none shadow-lg sm:shadow-none p-4 sm:p-0 transition-all duration-200 ease-in-out z-20 hidden sm:flex">
        <a href="index.html">صفحه اصلی</a>
        <a href="main.html">پروژه‌ها</a>
        <a href="ir.html">منابع ایرانی</a>
        <a href="Residences.html">اقامتگاه‌ها</a>
        <a href="SOS.html">شماره اضطراری</a>
      </nav>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var menuToggle = document.getElementById('menu-toggle');
        var nav = document.getElementById('main-nav');
        if(menuToggle && nav) {
          menuToggle.addEventListener('click', function() {
            nav.classList.toggle('hidden');
          });
          // بستن منو با کلیک بیرون
          document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth < 640) {
              nav.classList.add('hidden');
            }
          });
        }
      });
    </script>
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
