import { Board } from "../models/Board";

enum Texts {
    Title = 'Minesweeper HTML5',
    Message = 'Click anywhere to exit...'
}

enum Styles {
    Color = '#008080',
    Font = 'Arial'
}

const Rows = 8;
const Cols = 8;
const Bombs = 8;

export class GameScene extends Phaser.Scene {
   
   private _board: Board = null;
   
   constructor() {
       super('GameScene');
   }
 
	public preload(): void {
	//	this.load.atlas("spritesheet", spritesheetPng, spritesheetJson);
	}
 
    public create(): void {
        this._board = new Board(this, Rows, Cols, Bombs);
    }
}