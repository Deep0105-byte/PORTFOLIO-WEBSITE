// Toggle Dark Mode
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    formMessage.textContent = `Thank you for contacting us, ${name}! We will respond to ${email} shortly.`;
    contactForm.reset();  // Reset the form fields
});