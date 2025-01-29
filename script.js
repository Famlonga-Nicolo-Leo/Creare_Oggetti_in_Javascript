const animale1 ={
    specie: "mucca",
    razza: "chianina",
    zampe:4

};
const animale2 ={
    specie: "cane",
    razza: "bassotto",
    zampe:4

};
const animale3 ={
    specie: "gallina",
    razza: "andalusiana",
    zampe:2

};

function visualizza(animale){
    if (animale == 0) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale <br>" +
        "specie"+ animale1.specie + "<br>" +
        "razza" + animale1.razza + "<br>" +
        "zampe" + animale1.zampe + "<br>";
    }
    if (animale == 1) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale <br>" +
        "specie"+ animale2.specie + "<br>" +
        "razza" + animale2.razza + "<br>" +
        "zampe" + animale2.zampe + "<br>";
    }
    if (animale == 2) {
        document.getElementById("visualizza").innerHTML= "caratteristiche del animale <br>" +
        "specie"+ animale3["specie"] + "<br>" +
        "razza" + animale3["razza"] + "<br>" +
        "zampe" + animale3["zampe"]+ "<br>";
    }
}