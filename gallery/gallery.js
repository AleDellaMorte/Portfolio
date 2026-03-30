const params = new URLSearchParams(window.location.search);
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