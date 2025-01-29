const animale1 ={
    specie: "mucca",
    razza: "chianina",
    zampe:4

};
const animale2 ={
    specie: "maiale",
    razza: "cinta senese",
    zampe:4

};
const animale3 ={
    specie: "gallina",
    razza: "andalusiana",
    zampe:2

};

function visualizza(animale){
    if (animale == 0) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale: <br>" +
        "specie: "+ animale1.specie + "<br>" +
        "razza: " + animale1.razza + "<br>" +
        "zampe: " + animale1.zampe + "<br>";
    }
    if (animale == 1) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale <br>" +
        "specie: "+ animale2.specie + "<br>" +
        "razza: " + animale2.razza + "<br>" +
        "zampe: " + animale2.zampe + "<br>";
    }
    if (animale == 2) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale <br>" +
        "specie: "+ animale3["specie"] + "<br>" +
        "razza: " + animale3["razza"] + "<br>" +
        "zampe: " + animale3["zampe"]+ "<br>";
    }
}

function riproduci_suono(suono){
    if (suono == 0) {
    const audio = document.getElementById("audio_mucca");
    audio.play();
    }
    if (suono == 1) {
        const audio = document.getElementById("audio_maiale");
        audio.play();
        }
    if (suono == 2) {
    const audio = document.getElementById("audio_gallina");
    audio.play();
    }
}