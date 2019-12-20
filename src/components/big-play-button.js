import Component from '../core/component'
import * as Dom from '../utils/dom'

/**
 * big-play-button
 *
 * @extends Component
 * @file big-play-button.js
 */
class BigPlayButton extends Component {
  /**
   * 构造函数
   */
  constructor (tag, options, ready) {
    super(null, options, ready)
  }

  createEl () {
    this.contentEl_ = Dom.createEl('span', {
      className: 'vjs-control-text',
      innerHTML: ('big play button test.')
    })
    const el = super.createEl('div', {
      className: 'vjs-loading-spinner',
      dir: 'ltr'
    })
    el.appendChild(this.contentEl_)
    return el
  }

  /*
  initChildren () {

  }
  */
}

Component.registerComponent('BigPlayButton', BigPlayButton)
export default BigPlayButton
