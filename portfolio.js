const emailEl = document.getElementById("email");
const email = "aledemor03@gmail.com";

emailEl.addEventListener("click", () => {
  navigator.clipboard.writeText(email);

  const original = emailEl.textContent;
  emailEl.textContent = "copiato!";

  setTimeout(() => {
    emailEl.textContent = original;
  }, 1500);
});
ScrollReveal().reveal('.intro-text', { delay: 200, origin: 'top', viewOffset: {top: 100}});
ScrollReveal().reveal('.title', { delay: 200, origin: 'top'});
ScrollReveal().reveal('.carousel', { delay: 200, origin: 'top'});
