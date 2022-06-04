import { create } from 'domain'
import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import Platformer from './scenes/Platformer'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#282c34',
  // scale: {
  //   mode: Phaser.Scale.ScaleModes.RESIZE,
  //   width: 800,
  //   height: 600,
  // },
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Platformer],
}

export default new Phaser.Game(config)


/*
import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#282c34',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [HelloWorldScene],
}

export default new Phaser.Game(config)
*/