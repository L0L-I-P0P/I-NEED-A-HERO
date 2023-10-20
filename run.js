// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const Welcome = require('./welcome');

// Инициализация игры с настройками.
const game = new Game(30);
const a = new Welcome();
async function start() {
  await a.Welcome();
  await a.getName();
  await a.getPasword();
}
// Запуск игры.
// console.log('Бумеранг');
start().then(() => {
  game.play();
});
