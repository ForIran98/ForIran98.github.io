// درج هدر و فوتر ثابت و مدرن در همه صفحات (id=main-header, main-footer)
document.addEventListener('DOMContentLoaded', function() {
  const header = `
    <div class="container mx-auto px-4 py-3 flex flex-row items-center justify-between relative" style="min-height:56px;">
      <a href="index.html" class="text-2xl sm:text-3xl font-extrabold text-white block text-center flex-1 order-2 sm:order-1" style="z-index:20;">برای ایران</a>
      <button id="menu-toggle" class="sm:hidden text-white focus:outline-none z-30 ml-2 order-1 sm:order-2" aria-label="باز کردن منو">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <nav id="main-nav" class="flex-col gap-2 text-base w-full sm:w-auto sm:flex-row sm:gap-6 sm:static sm:bg-transparent sm:rounded-none sm:shadow-none sm:flex hidden items-center justify-end mt-2 sm:mt-0 bg-blue-900/95 rounded-lg shadow-lg p-4 transition-all duration-200 ease-in-out z-20 sm:justify-end order-3">
        <a href="main.html">پروژه‌ها</a>
        <a href="ir.html">منابع ایرانی</a>
        <a href="Residences.html">اقامتگاه‌ها</a>
        <a href="SOS.html">شماره اضطراری</a>
      </nav>
      <div class="w-8 h-8 sm:hidden order-4"></div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var menuToggle = document.getElementById('menu-toggle');
        var nav = document.getElementById('main-nav');
        function closeMenuOnOutsideClick(e) {
          if (!nav.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth < 640) {
            nav.classList.add('hidden');
          }
        }
        if(menuToggle && nav) {
          menuToggle.addEventListener('click', function(e) {
            nav.classList.toggle('hidden');
            e.stopPropagation();
          });
          document.addEventListener('click', closeMenuOnOutsideClick);
        }
        // نمایش منو به صورت flex روی دسکتاپ
        function handleResize() {
          if(window.innerWidth >= 640) {
            nav.classList.remove('hidden');
            nav.classList.add('flex');
          } else {
            nav.classList.add('hidden');
            nav.classList.remove('flex');
          }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
      });
    <\/script>
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
