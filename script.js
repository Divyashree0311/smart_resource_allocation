document.addEventListener("DOMContentLoaded", () => {
  const forms = ["loginForm", "signupForm", "resetForm", "contactForm"];

  forms.forEach((id) => {
    const form = document.getElementById(id);
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demo mode: form submitted successfully.");
    });
  });
});