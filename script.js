// script.js

// AOS Animation Initialization
AOS.init();

// Form Handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('form-response');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      response.textContent = `Thanks ${name}, your message has been sent!`;
      response.style.color = 'green';
      form.reset();
    } else {
      response.textContent = 'Please fill in all fields correctly.';
      response.style.color = 'red';
    }
  });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('form-response');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      response.textContent = `Thanks ${name}, your message has been sent!`;
      response.style.color = 'green';
      form.reset();
    } else {
      response.textContent = 'Please fill in all fields correctly.';
      response.style.color = 'red';
    }
  });

  // Handle dark mode toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.src = isDark ? 'sun.png' : 'moon.png';
    themeIcon.alt = isDark ? 'Light Mode' : 'Dark Mode';
  });
});
