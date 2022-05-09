let felderProSeite, feldGroesse, kopfX, kopfY, bewegungX, bewegungY, futterX, futterY;

function setup() {
	felderProSeite = 15;
	feldGroesse = 18;
	createCanvas(felderProSeite * feldGroesse, felderProSeite * feldGroesse);
	kopfX = 3 * feldGroesse;
	kopfY = 4 * feldGroesse;
    bewegungX = 0;
    bewegungY = 0;
    frameRate(4);
    console.log('1. Ins Feld klicken');
    console.log('2. Mit Pfeiltasten steuern');
    console.log('3. Futter fressen');
    futterX = 8 * feldGroesse;
    futterY = 12 * feldGroesse;
    futterX = wuerfleFeldPosition();
    futterY = wuerfleFeldPosition();
	
}

function draw() {
    bewegeSchlange();
    pruefeFutter();
	zeichneSpielfeld();
	zeichneFutter();
	zeichneSchlange();
	
}

function zeichneSpielfeld() {
	stroke("Black");
	fill("LawnGreen");
	rect(0, 0, width, height);
}

function zeichneSchlange() {
	// Schlangenkopf
	zeichneFeld(kopfX, kopfY, "DarkOrchid");
}

function zeichneFeld(x, y, farbe) {
	fill(farbe);
	rect(x, y, feldGroesse, feldGroesse);
}
function bewegeSchlange() {
    kopfX = kopfX + bewegungX;
    kopfY = kopfY + bewegungY;
}

function keyPressed() {
    
    if (key == "ArrowRight"){  
        bewegungX = feldGroesse;
        bewegungY = 0;
    }
    if (key == "ArrowLeft") { 
        bewegungX = -feldGroesse;
        bewegungY = 0;
    }
    if (key == "ArrowDown") {
        bewegungX = 0 
        bewegungY = feldGroesse;
    }
    if (key == "ArrowUp") {
        bewegungX = 0 
        bewegungY = -feldGroesse
    }
    return false;
}
function zeichneFutter() {
    zeichneFeld(futterX, futterY, 'OrangeRed');
}
function wuerfleFeldPosition() {
    let r = random(felderProSeite); 
    r = floor(r); 
    return r * feldGroesse; 
}
function pruefeFutter() {
    if (futterX === kopfX && futterY === kopfY) {
        futterX = wuerfleFeldPosition();
        futterY = wuerfleFeldPosition(); 
   }
}
