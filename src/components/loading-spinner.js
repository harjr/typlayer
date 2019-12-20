import Component from '../core/component'
import * as Dom from '../utils/dom'

/**
 * loading-spinner
 *
 * @extends Component
 * @file loading-spinner.js
 */
class LoadingSpinner extends Component {
  /**
   * 构造函数
   */
  constructor (tag, options, ready) {
    super(null, options, ready)
  }

  createEl () {
    this.contentEl_ = Dom.createEl('span', {
      className: 'vjs-control-text',
      innerHTML: ('video is loading.')
    })
    const el = super.createEl('div', {
      className: 'vjs-loading-spinner',
      dir: 'ltr'
    })
    el.appendChild(this.contentEl_)
    return el
  }
}

Component.registerComponent('LoadingSpinner', LoadingSpinner)
export default LoadingSpinner
