let felderProSeite, feldGroesse, kopfX, kopfY, bewegungX, bewegungY, futterX, futterY, koerperX, koerperY, leben, gefressen, soundPowerup;

function setup() {
	felderProSeite = 18; //war vorher 15
	feldGroesse = 15; //war vorher 18
	spielstandanzeigeHoehe = 1.7;
	createCanvas(felderProSeite * feldGroesse, felderProSeite * feldGroesse); //Feld erstellt
	//Position des Schlangenkopfs
	kopfX = 3 * feldGroesse;
	kopfY = 4 * feldGroesse;
	bewegungX = 0;
	bewegungY = 0;
	//Bilder die pro Sekunde angezeigt werden (FPS)
	frameRate(5);
	console.log('1. Ins Feld klicken');
	console.log('2. Mit Pfeiltasten steuern');
	console.log('3. Futter fressen');

	futterX = 8 * feldGroesse;
	futterY = 12 * feldGroesse;
	futterX = wuerfleFeldPosition();
	futterY = wuerfleFeldPosition();
	koerperX = [4 * feldGroesse, 5 * feldGroesse, 6 * feldGroesse];
	koerperY = [4 * feldGroesse, 4 * feldGroesse, 4 * feldGroesse];
	leben = 3;
	
	gefressen = 1 - 1;
	soundPowerup.volume = 0.3;


}

function draw() {
	bewegeSchlange();
	pruefeFutter();

	if (hatKollidiert()) {
		behandleKollision()
	} else {
		zeichneSpielfeld();
		zeichneFutter();
		zeichneSchlange();
	}
	fill("#f8d429");
	rect(0, 0, width, 30);
	fill("black");
	textSize(16);
	textAlign(LEFT, CENTER);
	text("🍎" + gefressen, 10, 15);

}

function zeichneSpielfeld() {
	stroke("Black");
	fill("Purple");
	rect(0, 0, width, height);
}

function zeichneSchlange() {
	for (let i = 0; i < koerperX.length; i = i + 1) {
		zeichneFeld(koerperX[i], koerperY[i], "LightBlue");
	}
	zeichneFeld(kopfX, kopfY, "Cyan");
}

function zeichneFeld(x, y, farbe) {
	fill(farbe);
	rect(x, y, feldGroesse, feldGroesse);
}

function bewegeSchlange() {
	if (bewegungX !== 0 || bewegungY !== 0) {
		koerperX.unshift(kopfX);
		koerperY.unshift(kopfY);
		koerperX.pop();
		koerperY.pop();
	}
	kopfX = kopfX + bewegungX;
	kopfY = kopfY + bewegungY;
}

function keyPressed() {
	//Steuerung
	if (key == "ArrowRight" && bewegungX !== -feldGroesse && bewegungX !== bewegungY) {
		bewegungX = feldGroesse;
		bewegungY = 0;
	}
	if (key == "ArrowLeft" && bewegungX !== feldGroesse) {
		bewegungX = -feldGroesse;
		bewegungY = 0;
	}
	if (key == "ArrowDown" && bewegungY !== -feldGroesse) {
		bewegungX = 0
		bewegungY = feldGroesse;
	}
	if (key == "ArrowUp" && bewegungY !== feldGroesse) {
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
	gefressen = gefressen + 0.5;
	return r * feldGroesse;
}

function pruefeFutter() {
	if (futterX === kopfX && futterY === kopfY) {
		// Neues Futter platzieren
		futterX = wuerfleFeldPosition();
		futterY = wuerfleFeldPosition();
		// Schlange wachsen lassen 
		koerperX.push(koerperX[koerperX.length - 1]);
		koerperY.push(koerperY[koerperY.length - 1]);
	}
}


function pruefeFutter2() {
	if (futterY < 50) {
		futterX = wuerfleFeldPosition();
		futterY = wuerfleFeldPosition();
	}
}
function pruefeFutter3() {
	if (futterY < spielstandanzeigeHoehe * feldGroesse) {
		futterX = wuerfleFeldPosition();
		futterY = wuerfleFeldPosition();
	}
}

function hatKollidiert() {
	if (kopfX < 0) {
		return true
	}
	if (kopfX > width - feldGroesse) { //- feldGroesse hat gefehlt
		return true
	}
	if (kopfY < 30) {
		return true
	}
	if (kopfY > height - feldGroesse) { //- feldGroesse hat gefehlt
		return true
	}
	for (let i = 0; i < koerperX.length - 1; i++)
	// alles im Array auser der Kopf
	{
		if (koerperX[i] === kopfX && koerperY[i] === kopfY) {
			return true;
			// wenn Kopf irgendwas im Array trifft
		}
	}


	return false;
}

function preload() {
	soundPowerup = new Audio("https://exorciser.ch/_media/c/sounds/general/error9.wav")
}
//sound

function behandleKollision() {

	console.log("⚠️ Kollision ⚠️");
	soundPowerup.play();
	fill("red");
	textAlign(CENTER);
	textSize(48);
	text("«Autsch!»", width / 2, height / 2);
	frameRate(0);
	setTimeout(setup, 1500);
}
