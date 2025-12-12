// Cerca bottone e immagine lampadina tramite ID
const bottone = document.getElementById("btn");
const img = document.getElementById("img-lampadina");

// Accendi / spegni lampadina al click del bottone
bottone.addEventListener("click", function () {
    // Verifico se la lampadina è già accesa
    const lampadinaAccesa = img.src.includes("yellow_lamp");

    if (lampadinaAccesa) {
        // SPEGNI
        img.src = "img/white_lamp.png";      // o il nome della lampadina spenta
        img.alt = "lampadina spenta";
        bottone.textContent = "Accendi";
    } else {
        // ACCENDI
        img.src = "img/yellow_lamp.png";
        img.alt = "lampadina accesa";
        bottone.textContent = "Spegni";
    }
});
