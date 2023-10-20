const Boomerang = require('./Boomerang');

// Наш герой.
class Hero {
  constructor(position) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(position);
    this.isBoomerangThown = false;
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }

  attack() {
    if (!this.boomerang.isReturning && !this.isBoomerangThown) {
      this.boomerang = new Boomerang(this.position);
      this.isBoomerangThown = true;
    }
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
