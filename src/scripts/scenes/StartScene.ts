enum Texts {
    Title = 'Minesweeper HTML5',
    Message = 'Click anywhere to start',
    Flags = 'FLAGS: ',
    Exit = 'EXIT',
	OtherLevel = 'OTHER',
    Success = 'YOU WIN!',
    Failure = 'YOU LOOSE'	
}

enum Styles {
    Color = '#008080',
    Font = 'Arial'
}

//const logoImg = require("./../../assets/logo.png");

const spritesheetPng = require("./../../assets/spritesheet.png");
const spritesheetJson = require("./../../assets/spritesheet.json");

//const JSONHash = "./../../assets/running.json";
//const spriteImg = "./../../assets";
//const temp = require('./../../assets/running.json');

export class StartScene extends Phaser.Scene {
	private actionCap;
	private secondCap;
	
   constructor() {
       super('StartScene');
   }
 
	public preload(): void {
		//this.load.path = './../../assets';
		this.load.atlas("spritesheet", spritesheetPng, spritesheetJson);
		//this.load.image('logo', logoImg);
		//this.load.multiatlas('bot', JSONHash); //, spriteImg);
		
		
		//this.load.path = './assets/';
		/*console.log(temp);
		
		
		//this.load.path = '../assets/';
		this.load.multiatlas({
			key:'megaset',
			atlasURL: temp,
			path: spriteImg
		});*/
		
	}
 
	public create(): void {

		this.secondCap = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY - 100,
			Texts.Title,
			{font: `52px ${Styles.Font}`, color: `${Styles.Color}`})
		.setOrigin(0.5);

		this.actionCap = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY + 100,
			Texts.Message,
			{font: `28px ${Styles.Font}`, color: `${Styles.Color}`});
		this.actionCap.setOrigin(0.5);

		this.secondCap = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY + 150,
			Texts.OtherLevel,
			{font: `28px ${Styles.Font}`, color: `${Styles.Color}`});
		this.secondCap.setOrigin(0.5);	
		
		
	
		//console.log(this.actionCap);
		
		// add some objectrs to this scene
		/*this.add.rectangle(
			10,
			10,
			100,
			100,
			0x00ff00
		);	

		this.add.star(
			200, 
			200, 
			8,
			40,
			200,
			0xff0000
		);		
		*/
		
		/*
		const logo = this.add.image(400, 400, 'logo');
		//this.load.image("texture", "../../assets/logo.png");
		this.add.blitter(
			10,
			10,
			'logo'
		);*/
		
		
		//.this.anims.create({ key: 'fly', frames: this.anims.generateFrameNames('cybercity', { start: 0, end: 98 }), repeat: -1 })
		
		//this.add.image(100, 100,'walk/running_bot_01.png');
		
		//this.add.sprite(100, 100, 'bob'); //.setScale(2.7).play('fly')
		
		//this.add.sprite(10, 10, 'bot', 'running.png');
		/*this.add.sprite(
			10,
			10,
			'bob',
			'running-0.png');
		*/

		//this.add.sprite(10,10, 'bob');		
		//var background = this.add.sprite(0, 0, 'bot', 'running.png');
		    //  This frame is in the 1st atlas file (set0/data0)
		//this.add.image(10, 10, 'megaset', 'snake').setOrigin(0);
		
		this.actionCap.setInteractive();
		this.actionCap.on('pointerdown', () => {
			this.scene.start('GameScene');
		});
		
		this.secondCap.setInteractive();
		this.secondCap.on('pointerdown', () => {
			this.scene.start('OtherScene');
		});
		
		
		//this.actionCap.input.on('gameobjectdown', ()=> {
		//this.input.once('pointerdown', () => {
		//	this.scene.start('GameScene');
		//});
	}
}