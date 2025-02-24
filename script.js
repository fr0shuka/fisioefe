
// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// WhatsApp click handler
function handleWhatsAppClick() {
  const phoneNumber = "351234567890";
  const message = "Olá! Gostaria de marcar uma consulta de fisioterapia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  // Here you would typically send the form data to your server
  console.log('Form submitted with data:', Object.fromEntries(formData));
  
  // Clear form
  form.reset();
  alert('Mensagem enviada com sucesso!');
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
