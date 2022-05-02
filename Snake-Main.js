let felderProSeite, feldGroesse, kopfX, kopfY, bewegungX, bewegungY;

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
	
}

function draw() {
    bewegeSchlange();
	zeichneSpielfeld();
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
    
