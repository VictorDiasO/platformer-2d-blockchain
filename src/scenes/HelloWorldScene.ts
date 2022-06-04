import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld');
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('blue', 'assets/particles/blue.png');
    this.load.image('ball', './assets/ball.png');
  }

  create() {
    this.createEmitter()
  }

  createEmitter() {
    const particles = this.add.particles('logo')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    const logo = this.physics.add.image(400, 100, 'logo');
    // const logo = this.input.mouse.target

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.visible = true;
    emitter.startFollow(logo)
  }
}
