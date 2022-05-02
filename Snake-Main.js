let felderProSeite, feldGroesse, kopfX, kopfY;

function setup() {
	felderProSeite = 15;
	feldGroesse = 18;
	createCanvas(felderProSeite * feldGroesse, felderProSeite * feldGroesse);
	kopfX = 3 * feldGroesse;
	kopfY = 4 * feldGroesse;
	
}

function draw() {
	zeichneSpielfeld();
	zeichneSchlange();
	zeichneFeld();
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
