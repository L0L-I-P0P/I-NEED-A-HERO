// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(trackLength) {
    this.trackLength = trackLength;
  }
  render(track) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
