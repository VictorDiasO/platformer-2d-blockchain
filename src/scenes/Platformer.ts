import Phaser from 'phaser';

var map;
var player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
// var cursor;
var cursors: Phaser.Types.Input.Keyboard.CursorKeys;
var groundLayer, coinLayer;
var text;
var platforms;
var invisiblePlatforms;
var mouse: Phaser.Physics.Arcade.StaticGroup;

export default class Platformer extends Phaser.Scene {
  constructor(cursors: any, player: any) {
    super('helloworld');
    cursors = cursors;
    player = player;
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', '/assets/skies/background1.png');
    this.load.image('ground', '/assets/sprites/platform.png');
    this.load.image('groundInvisible', '/assets/sprites/platform.png');
    this.load.image('star', '/assets/sprites/fuji.png');
    this.load.image('bomb', '/assets/phaser3/invaders-icon.png');
    this.load.spritesheet('dude',
      '/assets/sprites/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image('mouseBlock', '/assets/sprites/50x50-black.png');
    this.load.image('car', '/assets/sprites/car.png');
  }

  create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    invisiblePlatforms = this.physics.add.staticGroup();

    mouse = this.physics.add.staticGroup();

    platforms.create(300, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(750, 220, 'ground');

    invisiblePlatforms.create(990, 750, 'groundInvisible');
    invisiblePlatforms.setVisible(false);
    invisiblePlatforms.create(1315, 750, 'groundInvisible');
    invisiblePlatforms.setVisible(false);
    invisiblePlatforms.create(500, 750, 'groundInvisible');
    invisiblePlatforms.setVisible(false);
    invisiblePlatforms.create(100, 750, 'groundInvisible');
    invisiblePlatforms.setVisible(false);


    // platforms.create(900, 750, 'groundInvisible');


    // Player
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    player.body.setGravityY(300)
    this.physics.add.collider(player, [platforms, invisiblePlatforms, mouse]); // Colliders definitions

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // mouse.create(this.input.mousePointer.position.x, this.input.mousePointer.position.y, 'mouseBlock');
    mouse.create(this.input.mousePointer.downX, this.input.mousePointer.downY, 'mouseBlock');


    if (cursors.left.isDown) {
      player.setVelocityX(-160);

      player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play('right', true);
    }
    else {
      player.setVelocityX(0);

      player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-530);
    }
  }

  putInvisibleBlocks(invisiblePlatforms: Phaser.Physics.Arcade.StaticGroup, x: number, y: number) {
    invisiblePlatforms.create(x, y, 'groundInvisible');
    invisiblePlatforms.setVisible(true);
  }

}