let felderProSeite, feldGroesse, kopfX, kopfY, bewegungX, bewegungY, futterX, futterY, koerperX, koerperY, leben, gefressen;

function setup() {
	felderProSeite = 18; //war vorher 15
	feldGroesse = 15; //war vorher 18
	createCanvas(felderProSeite * feldGroesse, felderProSeite * feldGroesse); //Feld erstellt
	//Position des Schlangenkopfs
	kopfX = 3 * feldGroesse;
	kopfY = 4 * feldGroesse;
    bewegungX = 0;
    bewegungY = 0;
	//Bilder die pro Sekunde angezeigt werden (FPS)
    frameRate(4);
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
    gefressen = 2;

	
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
    textAlign(RIGHT, CENTER);
    text("❤️".repeat(leben), width-10, 15);
}

function zeichneSpielfeld() {
	stroke("Black");
	fill("LawnGreen");
	rect(0, 0, width, height);
}

function zeichneSchlange() {
    for (let i = 0; i < koerperX.length; i = i + 1) {
        zeichneFeld(koerperX[i], koerperY[i], "Brown");
    }
	zeichneFeld(kopfX, kopfY, "DarkOrchid");
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
          koerperX.push(koerperX[koerperX.length-1]);
        koerperY.push(koerperY[koerperY.length-1]);
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
   
 
   return false; 
}

function behandleKollision() {
	//
    console.log("⚠️ Kollision ⚠️");
    fill("red");
    textAlign(CENTER);
    textSize(48);
    text("«Autsch!»", width / 2, height / 2);
    frameRate(0); 
    setTimeout(setup, 1500); 
}
