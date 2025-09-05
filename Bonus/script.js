/* 
    TESTO
    Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
    Al click del bottone, la lampadina dovrà accendersi

    BONUS

    Facciamo accendi e spegni:
    - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni",
    - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi",
    - E così via...
*/

// Cerca bottone e immagine lampadina  tramite ID
const bottone = document.getElementById("btn") 
const img = document.getElementById("img-lampadina");

// Accendi lampadina al click del bottone
bottone.addEventListener("click", function() {

    // Controllo se la lampadina è spenta
    let lampIsOff = bottone.textContent.includes("Accendi"); // Ritorna true se è spenta, false altrimenti

    // Lampadina spenta
    if (lampIsOff) {
        img.src = "img/yellow_lamp.png";    // Cambia immagine -> lampadina accesa
        img.alt = "lampadina accesa";       // Aggiorna testo alternativo
        bottone.textContent = "Spegni"
    }

    // Lampadina accesa
    else {
        img.src = "img/white_lamp.png";    // Cambia immagine -> lampadina spenta
        img.alt = "lampadina spenta";      // Aggiorna testo alternativo
        bottone.textContent = "Accendi"
    }
});
