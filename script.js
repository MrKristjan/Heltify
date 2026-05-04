document.addEventListener('DOMContentLoaded', function () {
  const appointmentForm = document.getElementById('appointmentForm');
  const formMessage = document.getElementById('formMessage');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const form = e.target;
      if (!form.checkValidity()) {
        formMessage.textContent = 'Please complete all required fields.';
        formMessage.style.color = '#d9534f';
        return;
      }
      formMessage.style.color = '';
      formMessage.textContent = 'Appointment requested. We will contact you shortly.';
      form.reset();
    });
  }
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }
    const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
    themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
});