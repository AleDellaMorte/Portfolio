// ----------------------------------------------------- LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const loaderLine = document.getElementById("loader-line");

  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => {
      loaderLine.classList.add("hidden");
    }, 600);
  }, 500);
});

// ----------------------------------------------------- GALLERY
const params = new URLSearchParams(window.location.search);
const set = params.get("set");

const data = {
  Cars: {
    title: "Cars",
    folder: "../photos/cars/cars_"
  },
  Animals: {
    title: "Animals",
    folder: "../photos/animals/animals_"
  },
  Street: {
    title: "Street",
    folder: "../photos/street/street_"
  }
};

const gallery = document.getElementById("gallery");
const title = document.getElementById("title");

// sicurezza
if (!data[set]) {
  title.textContent = "Not Found";
  throw new Error("Set non valido");
}

title.textContent = data[set].title;

// ----------------------------------------------------- LOAD IMAGES AUTO
let i = 1;
const images = [];

function loadImages(folder) {
  const img = new Image();
  img.src = `${folder}${i}.webp`;

  img.onload = () => {
    images.push(img);
    i++;
    loadImages(folder);
  };

  img.onerror = () => {
    console.log("fine immagini");
    buildLayout();
  };
}

loadImages(data[set].folder);

// ----------------------------------------------------- CREA ROW BILANCIATA (🔥 FIX)
function createBalancedRow(img1, img2) {
  const row = document.createElement("div");
  row.classList.add("row");

  const ratio1 = img1.naturalWidth / img1.naturalHeight;
  const ratio2 = img2.naturalWidth / img2.naturalHeight;

  const total = ratio1 + ratio2;

  const width1 = (ratio1 / total) * 100;
  const width2 = (ratio2 / total) * 100;

  img1.style.width = width1 + "%";
  img2.style.width = width2 + "%";

  img1.style.height = "auto";
  img2.style.height = "auto";

  row.appendChild(img1);
  row.appendChild(img2);

  return row;
}

// ----------------------------------------------------- BUILD LAYOUT
function buildLayout() {
  const portrait = [];
  const landscape = [];

  // separa immagini
  images.forEach(img => {
    if (img.naturalHeight > img.naturalWidth) {
      portrait.push(img);
    } else {
      landscape.push(img);
    }
  });

  gallery.innerHTML = "";

  // crea coppie verticali
  const portraitPairs = [];
  for (let i = 0; i < portrait.length; i += 2) {
    if (portrait[i + 1]) {
      portraitPairs.push([portrait[i], portrait[i + 1]]);
    } else {
      landscape.push(portrait[i]); // dispari → diventa full
    }
  }

  const max = Math.max(portraitPairs.length, landscape.length);

  for (let i = 0; i < max; i++) {

    // ORIZZONTALI (full width)
    if (landscape[i]) {
      landscape[i].classList.add("full");
      landscape[i].style.width = "100%";
      landscape[i].style.height = "auto";
      gallery.appendChild(landscape[i]);
    }

    // VERTICALI (🔥 FIX BILANCIATO)
    if (portraitPairs[i]) {
      const row = createBalancedRow(
        portraitPairs[i][0],
        portraitPairs[i][1]
      );
      gallery.appendChild(row);
    }
  }
}