fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const healthContainer = document.querySelector('#health .cards');
    const diseasesContainer = document.querySelector('#diseases .cards');
    const herbsContainer = document.querySelector('#herbs .cards');
    const faqContainer = document.querySelector('#faq');

    data.health.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
      healthContainer.appendChild(card);
    });

    data.diseases.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
      diseasesContainer.appendChild(card);
    });

    data.herbs.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
      herbsContainer.appendChild(card);
    });

    data.faq.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');
      faqItem.innerHTML = `<h3><i class="fa-solid fa-plus"></i> ${item.question}</h3><p>${item.answer}</p>`;
      faqContainer.appendChild(faqItem);
    });

    // FAQ toggle
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => item.classList.toggle('active'));
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const clearBtn = document.getElementById('clearBtn');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      searchResults.innerHTML = '';
      if(query === '') return;
      document.querySelectorAll('.card').forEach(card => {
        if(card.textContent.toLowerCase().includes(query)){
          const li = document.createElement('li');
          li.textContent = card.querySelector('h3').textContent;
          li.addEventListener('click', () => {
            card.scrollIntoView({behavior:'smooth'});
            card.style.background = '#ffff99';
            setTimeout(() => card.style.background='',1000);
          });
          searchResults.appendChild(li);
        }
      });
    });

    clearBtn.addEventListener('click', () => {
      searchInput.value='';
      searchResults.innerHTML='';
    });
  });

// Smooth scroll for nav links
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('header nav ul li a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
