//Liður 1
var animal = {
  name: "Dog",
  out: function() {
    return this.name;
  }
};

var animal2 = Object.create(animal);

animal2.name = "Cat";

document.getElementById("animal").innerHTML = "Animal1: " + animal.out() + " || Animal2: " + animal2.out();



//Liður2
function spaceship(spacename, spacelife) {
	this.name = spacename;
	this.life = spacelife;
	this.ShowName = function() {
		return this.name;
	};
}

var spaceship1 = new spaceship("SpaceRacer", 10);
var spaceship2 = new spaceship("SpaceRacer", 10);
var spaceship3 = new spaceship("SpaceRacer", 10);

spaceship2.name = "SpaceLighting";
spaceship3.name = "SpaceBugatti"

document.getElementById("space").innerHTML = "Space1: " + spaceship1.ShowName() + " || Space2: " + spaceship2.ShowName() + " || Space3: " + spaceship3.ShowName();

spaceship.prototype.fly = function() {
	this.speed = 5;
}

var spaceship4 = new spaceship("SpaceFalcon", 10);

spaceship4 = {
	shoot: function() {
		life = life - 1;
		return this.life;
	}
}

//Liður 2-e Virkar í console
var allShips = [spaceship1, spaceship2, spaceship3, spaceship4];

for (var i = 0 in allShips) {
	console.log(allShips[i]);
}
//



//Liður 3
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
//Person() er sér function með sínar færibreytur sem hann skilgreinir hjá sér
//En við viljum að Teacher() erfi frá Person(), Teacher() þarf þá að vera með sömu færibreytur og Person()
//this er reyndar ekki í Teacher(), en það er notað svo fallið virki þegar það er kallað á það
//allar hinar breyturnar heita það sama, en síðan er Teacher() með auka færibreytu sem er þá skilgreind í því falli
//Allar færibreytur sem Teacher() erfir frá Person() hafa verið skilgreindar í Person() fallinu