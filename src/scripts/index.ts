/*import * as Phaser from "phaser";
import Scenes from './scenes';

new Phaser.Game({
    type: Phaser.AUTO,
    parent: "minesweeper",
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#F0FFFF",
    scene: Scenes,
});*/

import * as Phaser from 'phaser';
//import Scenes from './scenes';
import { StartScene } from './scenes/StartScene';
import { GameScene } from './scenes/GameScene';


const gameConfig: Phaser.Types.Core.GameConfig = {
  title: '15nashki',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  scene: [StartScene, GameScene], //[Scenes],
/*
  physics: {
    default: 'arcade',
    arcade: {
		gravity:{x:0, y:0},
		debug: true,
    },
  },
*/
  parent: 'minesweeper',
  backgroundColor: "#F0FFFF",
};

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
  game.scale.refresh();
});