//Ich und Luis machen es zusammen.

Nur Feld:

let felderProSeite, feldGroesse;
 
function setup () {
    felderProSeite = 15;
    feldGroesse = 18;
    createCanvas(felderProSeite*feldGroesse, felderProSeite*feldGroesse);
}
 
function draw() {
    zeichneSpielfeld();
}

function zeichneSpielfeld() {
   stroke("Black");
    fill("LawnGreen");
    rect(0, 0, width, height); 
}

