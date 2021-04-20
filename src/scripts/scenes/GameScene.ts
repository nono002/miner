import { Board } from "../models/Board";
import { Field } from "../models/Field";
import { GameSceneView } from "../views/GameSceneView";

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
   private _view: GameSceneView = null;
   private _board: Board = null;
   private _flags: number = 0;
   
   constructor() {
       super('GameScene');
	   document.querySelector("canvas").oncontextmenu = e => e.preventDefault();
   }
 
	public preload(): void {
	//	this.load.atlas("spritesheet", spritesheetPng, spritesheetJson);
	}
 
    public create(): void {
        this._board = new Board(this, Rows, Cols, Bombs);
		this._board.on('left-click', this._onFieldClickLeft, this);
		this._board.on('right-click', this._onFieldClickRight, this);
		this._flags = Bombs;
		this._view = new GameSceneView(this);
        this._view.render({flags: this._flags});
    }
	
	private _onFieldClickLeft(field: Field): void {
		if (field.closed) { // если ячейка закрыта
			field.open(); // открыть ее

			if (field.mined) { // если она заминирована
				field.exploded = true;
				this._onGameOver(false); // игра проиграна
			} else if (field.empty) { // если она пуста
				this._board.openClosestFields(field); // открыть соседей
			}
		} else if (field.opened) { // если ячейка открыта
			if (this._board.completed) { // и вся доска помечена флагами корректно
				this._onGameOver(true); // игра выиграна
			}
		}
	}

	private _onFieldClickRight(field: Field): void {
		if (field.closed && this._flags > 0) { // если ячейка закрыта и есть свободные флаги
			field.addFlag(); // добавляем флаг в ячейку
		} else if (field.marked) { // если флаг уже есть
			field.removeFlag(); // удаляем флаг
		}
		this._flags = Bombs - this._board.countMarked;
        this._view.render({flags: this._flags});
	}
	
	private _onGameOver(status: boolean) {
		this._board.off('left-click', this._onFieldClickLeft, this);
		this._board.off('right-click', this._onFieldClickRight, this);
		this._board.open();
		this._view.render({status});
	}	
}