// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(trackLength) {
    this.trackLength = trackLength;
    this.hero = new Hero(0); // Герою можно аргументом передать бумеранг.
    this.boomerang = new Boomerang();
    this.enemy = new Enemy(trackLength - 1);
    this.view = new View(this);
    this.track = [];
    this.score = 0;
    this.timer = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (this.hero.boomerang.position >= 0) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }
  timerA() {
    this.timer += 0.1;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (
      this.hero.boomerang.position === this.enemy.position ||
      this.hero.boomerang.position > this.enemy.position
    ) {
      this.enemy.die();
      this.score += 1;
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.updateEnemy();
      this.timerA();
      this.view.render(this.track);
      this.enemy.moveLeft();
      this.updateBoomerang();
      console.log(`Score:${this.score}`);
      console.log(`Timer:${this.timer.toFixed(1)}`);
    }, 250);
  }
  updateBoomerang() {
    const boomerang = this.hero.boomerang;
    if (boomerang.isReturning) {
      boomerang.moveLeft();
      if (boomerang.position === this.hero.position) {
        boomerang.isReturning = false;
        this.hero.isBoomerangThown = false;
      } else if (this.hero.isBoomerangThown) {
        if (boomerang.position < this.enemy.position) {
          boomerang.moveRight();
        } else {
          boomerang.isReturning = true;
        }
      }
    }
  }
  updateEnemy() {
    if (this.enemy.position >= 0 && this.enemy.position < this.trackLength) {
      this.enemy.moveLeft();
    } else {
      this.enemy = new Enemy(this.trackLength - 1);
    }
  }
  updateBoomerang() {}
}

module.exports = Game;
