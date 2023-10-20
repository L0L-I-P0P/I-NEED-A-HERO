const Boomerang = require('./Boomerang');


// Наш герой.
class Hero {
  constructor() {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 5;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
