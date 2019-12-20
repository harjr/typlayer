import { version } from '../package.json'
import * as Dom from './utils/dom'
import Player from './components/player'

class TYPlayer {
  /**
   * 构造函数
   */
  constructor (id, options = {}, ready) {
    const tag = Dom.$(`#${id}`)

    // 播放器实例化 => player.js
    const player = new Player(tag, options, ready)

    // 初始化
    this.init()

    console.log('初始化完成')

    return player
  }

  init () {
    // console.log('init')
  }

  static instance (id, options, ready) {
    return new TYPlayer(id, options, ready)
  }
}

// 版本号
TYPlayer.VERSION = version

export default TYPlayer
