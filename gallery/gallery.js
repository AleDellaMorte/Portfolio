const params = new URLSearchParams(window.location.search);
const set = params.get("set");

const data = {
    Evoluzione: {
        title: "Evoluzione Collection",
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

title.textContent = data[set].title;

let i = 1;
const images = [];

function loadImages(folder) {
    const img = new Image();
    img.src = `${folder}${i}.jpg`;

    img.onload = () => {
        images.push(img);
        i++;
        loadImages(folder);
    };

    img.onerror = () => {
        console.log("fine immagini");
        buildLayout(); // 👉 QUI parte la magia
    };
}

loadImages(data[set].folder);
function buildLayout() {
    const portrait = [];
    const landscape = [];

    // separazione
    images.forEach(img => {
        if (img.naturalHeight > img.naturalWidth) {
            portrait.push(img);
        } else {
            landscape.push(img);
        }
    });

    gallery.innerHTML = '';

    // 🔥 pairing perfetto verticali
    const portraitPairs = [];
    for (let i = 0; i < portrait.length; i += 2) {
        if (portrait[i + 1]) {
            portraitPairs.push([portrait[i], portrait[i + 1]]);
        } else {
            // se dispari → la trasformiamo in orizzontale
            landscape.push(portrait[i]);
        }
    }

    // ⚖️ distribuzione (alternata semplice)
    const max = Math.max(portraitPairs.length, landscape.length);

    for (let i = 0; i < max; i++) {
        if (landscape[i]) {
            landscape[i].classList.add('full');
            gallery.appendChild(landscape[i]);
        }
        if (portraitPairs[i]) {
            const row = document.createElement('div');
            row.classList.add('row');

            portraitPairs[i].forEach(img => row.appendChild(img));
            gallery.appendChild(row);
        }


    }
}
