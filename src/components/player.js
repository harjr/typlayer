import Component from '../core/componet'

/**
 * An instance of the `Player` class is created.
 * Are used to initialize a video.
 *
 * @extends Component
 * @file player.js
 */
class Player extends Component {
  constructor (tag, options, ready) {
    options.createEl = false
    // options.initChildren = false
    options.children = {
      'loading-spinner': {
        color: 'red'
      },
      'big-play-button': {
        color: 'blue'
      }
    }
    super(null, options, ready)
  }
}

export default Player
