// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  //Adding a method to a constructor
  greet() {
    return `${this.name} ${this.level}`;
  }
}

const hero1 = new Hero("Varg", 1);

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);

    this.spell = spell;
  }
}

const hero2 = new Mage("Lejon", 3, "Magic Missile");
