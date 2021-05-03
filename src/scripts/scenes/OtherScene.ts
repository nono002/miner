import * as Phaser from 'phaser';

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
const logoImg = require("./../../assets/logo.png");
const spheraImg = require("./../../assets/apple.png");

//const JSONHash = "./../../assets/running.json";
//const spriteImg = "./../../assets";
//const temp = require('./../../assets/running.json');

export class OtherScene extends Phaser.Scene {
	private actionCap;
	private secondCap;
	private tfFPS;
	private a =0;
	
   constructor() {
       super('OtherScene');
   }
 
	public preload(): void {
		//this.load.path = './../../assets';
		this.load.atlas("spritesheet", spritesheetPng, spritesheetJson);
		//this.load.image('logo', "./../../assets/logo.png");
		this.load.image('logo', logoImg);
		this.load.image('sphera', spheraImg);
		
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
 
	public update(time, delta): void {
		this.a = this.a +1;
		this.tfFPS.text = 'FPS: ' + (String(delta) || '--');
		//console.log(this.a);
	}
 
	public create(): void {
		
		this.matter.world.setBounds(30, 30, this.cameras.main.width-30, this.cameras.main.height-30, 32, true, true, false, true);
		
		var path = '0 307 0 67 8 55 12 53 57 128 86 94 128 136 148 103 190 159 210 135 222 149 248 109 267 133 293 93 321 128 361 75 381 97 439 4 523 117 551 78 563 92 569 93 603 38 637 99 654 53 701 154 729 109 750 140 800 66 800 307';
		//var verts = Phaser.Physics.Matter.Matter.Vertices.fromPath(path);

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo');

		console.log(this.matter.verts);

		//var verts = this.matter.verts.fromPath(path);

/*		this.secondCap = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY - 100,
			Texts.Title,
			{font: `52px ${Styles.Font}`, color: `${Styles.Color}`})
		.setOrigin(0.5);
*/
		//var prev;

		var prev = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'sphera');

		for (var i = 0; i < 64; i++)
		{
			//var ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'sphera');
			
			var ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'sphera');
			ball.setCircle(20);
			ball.setFriction(0.005);
			ball.setBounce(1);
			ball.setMass(500);
			ball.setIgnoreGravity(false);
			        
			
			//console.log(this.matter.add.joint);
			//this.matter.add.joint(prev, ball, 60, 1);
			prev = ball;
		}

		this.matter.add.mouseSpring();

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
		
		this.tfFPS = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY + 200,
			'FPS: ',
			{font: `28px ${Styles.Font}`, color: `${Styles.Color}`});

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