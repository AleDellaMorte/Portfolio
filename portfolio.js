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
