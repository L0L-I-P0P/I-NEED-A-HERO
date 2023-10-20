const inquirer = require('inquirer');

class Welcome {
  constructor(name, password, score) {}

  async Welcome() {
    const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms));
    console.log(`Boomerang!!!\n`);
    await sleep();
    console.log(`
      1.Регистрируйся
      2. У тебя есть одна жизнь.
      3. Убивай врагов.
              Да прибудет с тобой сила!
      `);
  }

  async getName() {
    let playerName;
    const answers = await inquirer.prompt({
      name: 'player_Name',
      type: 'input',
      message: 'Как вас зовут?',
      default() {
        return 'Player';
      },
    });
    this.name = answers.player_Name;
  }

  async getPasword() {
    const pasword = await inquirer.prompt({
      name: 'player_Pas',
      type: 'password',
      message: 'Задайте пароль?',
    });
    this.password = pasword.player_Pas;
  }
}
module.exports = Welcome;
