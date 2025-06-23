document.addEventListener('DOMContentLoaded', function() {
  fetch('json/jobs.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('jobs-list');
      data.jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg p-6 mb-6 border border-blue-100 hover:shadow-2xl transition';
        card.innerHTML = `
          <h2 class="text-xl font-bold text-blue-800 mb-2">${job.title}</h2>
          <p class="text-gray-700 mb-1">${job.description}</p>
          <p class="text-gray-600 mb-1"><span class="font-semibold">تلفن:</span> <a href="tel:${job.phone}" class="text-blue-700">${job.phone}</a></p>
          <p class="text-gray-600"><span class="font-semibold">آدرس:</span> ${job.address}</p>
        `;
        list.appendChild(card);
      });
    });
});
