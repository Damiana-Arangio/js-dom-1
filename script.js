/* 
    TESTO
    Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

    Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) 
*/

// Cerca bottone e immagine lampadina  tramite ID
const bottone = document.getElementById("btn") 
const img = document.getElementById("img-lampadina");

// Accendi lampadina al click del bottone
bottone.addEventListener("click", function() {
        img.src = "img/yellow_lamp.png";    // Cambia immagine -> lampadina accesa
        img.alt = "lampadina accesa";       // Aggiorna testo alternativo
});
