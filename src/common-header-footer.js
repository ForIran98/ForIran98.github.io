// درج هدر و فوتر ثابت و مدرن در همه صفحات (id=main-header, main-footer)
document.addEventListener('DOMContentLoaded', function() {
  const header = `
    <div class="container mx-auto px-4 py-3 flex flex-row items-center justify-between relative" style="min-height:56px;">
      <a href="main.html" class="text-2xl sm:text-3xl font-extrabold text-white block text-center flex-1 order-2 sm:order-1" style="z-index:20;">برای ایران</a>
      <button id="menu-toggle" class="sm:hidden text-white focus:outline-none z-30 ml-2 order-1 sm:order-2" aria-label="باز کردن منو">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <nav id="main-nav" class="flex-col gap-2 text-base w-full sm:w-auto sm:flex-row sm:gap-6 sm:static sm:bg-transparent sm:rounded-none sm:shadow-none sm:flex hidden items-center justify-end mt-2 sm:mt-0 bg-blue-900/95 rounded-lg shadow-lg p-4 transition-all duration-200 ease-in-out z-20 sm:justify-end order-3">
        <!-- منوی پروژه‌ها به صورت داینامیک اینجا درج می‌شود -->
      </nav>
      <div id="profile-header-info" class="order-5 flex items-center gap-2 text-white font-bold text-sm"></div>
      <div class="w-8 h-8 sm:hidden order-4"></div>
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

  // --- اسکریپت مدیریت منو و پروفایل ---
  setTimeout(function() {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.getElementById('main-nav');
    // --- فقط لیست پروژه‌های تکمیل‌شده بدون عنوان به منوی اصلی اضافه کن ---
    fetch('json/projects.json')
      .then(response => response.json())
      .then(data => {
        const projects = data.projects;
        // تعریف نام کوتاه برای منو (اگر shortTitle نبود، از title استفاده کن)
        const completed = projects.filter(p => p.status === 'completed');
        let html = '';
        if (completed.length) {
          html += '<ul class="projects-menu-list flex flex-row gap-6 m-0 p-0 list-none">';
          completed.forEach(p => {
            const shortTitle = p.shortTitle || p.title;
            html += `<li class="m-0 p-0"><a href="${p.pageLink}" class="text-white font-bold whitespace-nowrap">${shortTitle}</a></li>`;
          });
          html += '</ul>';
        }
        if(nav) {
          // حذف منوی قبلی اگر وجود دارد
          const oldMenu = nav.querySelector('.projects-menu-list');
          if(oldMenu) oldMenu.remove();
          // درج منوی جدید
          nav.insertAdjacentHTML('afterbegin', html);
        }
      });
    function closeMenuOnOutsideClick(e) {
      if (nav && menuToggle && !nav.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth < 640) {
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
    function handleResize() {
      if(nav) {
        if(window.innerWidth >= 640) {
          nav.classList.add('flex');
          nav.classList.remove('hidden');
        } else {
          nav.classList.add('hidden');
          nav.classList.remove('flex');
        }
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    // --- پروفایل کاربر ---
    var profileDiv = document.getElementById('profile-header-info');
    if(profileDiv) {
      var firstName = localStorage.getItem('userFirstName');
      var lastName = localStorage.getItem('userLastName');
      if(firstName && lastName) {
        profileDiv.innerHTML = '<span>👤 ' + firstName + ' ' + lastName + '</span> <a href="profile.html" class="underline text-blue-200 hover:text-white ml-2">ویرایش</a>';
      } else {
        profileDiv.innerHTML = '<a href="profile.html" class="bg-white text-blue-900 px-3 py-1 rounded-lg font-bold hover:bg-blue-100 transition">ثبت نام</a>';
      }
    }
  }, 0);
});
