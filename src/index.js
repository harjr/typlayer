import { version } from '../package.json'
class TYPlayer {
  constructor (id, options, ready) {
    console.log('初始化完成')
  }

  init () {
    console.log('init')
  }

  static instance (id, options, ready) {
    return new TYPlayer(id, options, ready)
  }
}
TYPlayer.VERSION = version

export default TYPlayer
