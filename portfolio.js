window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const loaderLine = document.getElementById("loader-line");
  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => {loaderLine.classList.add("hidden");}, 600);
  }, 500);
});

ScrollReveal().reveal('.intro-text', { delay: 200, origin: 'top', viewOffset: {top: 100}});
ScrollReveal().reveal('.title', { delay: 200, origin: 'top'});
ScrollReveal().reveal('.carousel', { delay: 200, origin: 'top'});
