enum Texts {
    Title = 'Minesweeper HTML5',
    Message = 'Click anywhere to start'
}

enum Styles {
    Color = '#008080',
    Font = 'Arial'
}

const spritesheetPng = require("./../../assets/spritesheet.png");
const spritesheetJson = require("./../../assets/spritesheet.json");

export class StartScene extends Phaser.Scene {
	private _style28: {font: string, fill: string};
	private _style52: {font: string, fill: string};
	
   constructor() {
       super('StartScene');
	   this._style28 = {font: `28px ${Styles.Font}`, fill: Styles.Color};
	   this._style52 = {font: `52px ${Styles.Font}`, fill: Styles.Color};
	   
   }
 
	public preload(): void {
		this.load.atlas("spritesheet", spritesheetPng, spritesheetJson);
	}
 
	public create(): void {
		this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY - 100,
			Texts.Title,
			this._style52)
			//{font: `52px ${Styles.Font}`, color: `${Styles.Color}`})
		.setOrigin(0.5);

		this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY + 100,
			Texts.Message,
			this._style28)
			//{font: `28px ${Styles.Font}`, color: `${Styles.Color}`})
		.setOrigin(0.5);
		
		//this.add.star(5,5,5,100);
		
		this.input.once('pointerdown', () => {
			this.scene.start('GameScene');
		});
	}
}