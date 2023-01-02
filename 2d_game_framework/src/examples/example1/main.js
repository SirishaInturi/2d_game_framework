import { Game } from '../../game';
import { MainMenuScene } from './scenes/mainmenu';

const canvas = document.getElementById('game-canvas');
const game = new Game(canvas);

game.addScene('mainmenu', new MainMenuScene(game));
game.start('mainmenu');
