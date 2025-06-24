// داینامیک‌سازی منوی پروژه‌ها بر اساس projects.json
// این فایل را در همه صفحات قبل از </body> لود کنید و یک div با id="projects-menu" در قالب خود قرار دهید

fetch('json/projects.json')
  .then(response => response.json())
  .then(data => {
    const projects = data.projects;
    const active = projects.filter(p => p.status === 'in_progress');
    const completed = projects.filter(p => p.status === 'completed');
    let html = '<ul class="projects-menu-list">';
    if (active.length) {
      html += '<li class="menu-section-title">پروژه‌های فعال</li>';
      active.forEach(p => {
        html += `<li><a href="${p.pageLink}">${p.title}</a></li>`;
      });
    }
    if (completed.length) {
      html += '<li class="menu-section-title">پروژه‌های تکمیل‌شده</li>';
      completed.forEach(p => {
        html += `<li><a href="${p.pageLink}">${p.title}</a></li>`;
      });
    }
    html += '</ul>';
    const menuDiv = document.getElementById('projects-menu');
    if (menuDiv) menuDiv.innerHTML = html;
  });
