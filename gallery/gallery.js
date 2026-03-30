
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



// FRECCIA INDIETRO
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}


ScrollReveal().reveal('.gallery img', { interval: 200});const params = new URLSearchParams(window.location.search);
const set = params.get("set");

// DATABASE
const data = {
    Evoluzione: {
        title: "Evoluzione Collection",
        images: [
        "../photos/cars/cars_1.jpg",
        "../photos/cars/cars_2.jpg",
        "../photos/cars/cars_3.jpg",
        "../photos/cars/cars_4.jpg",
        "../photos/cars/cars_5.jpg",
        "../photos/cars/cars_6.jpg",
        "../photos/cars/cars_7.jpg",
        "../photos/cars/cars_8.jpg",
        "../photos/cars/cars_9.jpg",
        "../photos/cars/cars_10.jpg",
        "../photos/cars/cars_11.jpg"
        ]
    },
    Animals: {
        title: "Animals",
        images: [
        "../photos/animals/animals_1.jpg",
        "../photos/animals/animals_2.jpg",
        "../photos/animals/animals_3.jpg",
        "../photos/animals/animals_4.jpg",
        "../photos/animals/animals_5.jpg",
        "../photos/animals/animals_6.jpg",
        "../photos/animals/animals_7.jpg",
        "../photos/animals/animals_8.jpg",
        "../photos/animals/animals_9.jpg",
        "../photos/animals/animals_10.jpg"
        ]
    },
    urbano: {
        title: "Urbano",
        images: [
        "img/urbano1.jpg",
        "img/urbano2.jpg"
        ]
    }
};

const gallery = document.getElementById("gallery");
const title = document.getElementById("title");

// CARICA CONTENUTO
if (data[set]) {
    title.textContent = data[set].title;
    document.title = data[set].title;
    data[set].images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
} else {
    title.textContent = "Non trovato";
}

// FRECCIA INDIETRO
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}


ScrollReveal().reveal('.gallery img', { interval: 200});
