import Component from '../core/component'
import * as Dom from '../utils/dom'

// 在此处引入所用的组件类，确保组件已注册
import './loading-spinner'
import './big-play-button'

/**
 * 播放器主体类
 *
 * @extends Component
 * @file player.js
 */
class Player extends Component {
  /**
   * 构造函数
   */
  constructor (tag, options, ready) {
    options.createEl = false
    options.initChildren = false
    options.children = [
      {
        name: 'loading-spinner1', // 名称建议小写
        opts: {
          componentClass: 'LoadingSpinner', // 与注册的组件类名一致
          color: 'red'
        }
      },
      {
        name: 'loading-spinner2', // 名称建议小写，同类组件命名不同
        opts: {
          componentClass: 'LoadingSpinner', // 与注册的组件类名一致
          children: [
            {
              name: 'big-play-buton', // 名称建议小写
              opts: {
                componentClass: 'BigPlayButton', // 与注册的组件类名一致
                color: 'blue'
              }
            }
          ],
          color: 'red'
        }
      }
    ]

    super(null, options, ready)

    this.tag = tag
    this.createEl()
    this.initChildren()
  }

  createEl () {
    let tag = this.tag
    const divEmbed = this.tag.tagName.toLowerCase() === 'typlayer'
    const attrs = Dom.getAttributes(tag)
    const el = this.el_ = tag // 原始节点
    if (!divEmbed) {
      tag = this.tag = super.createEl('div')
    }

    // video标签
    const videoEl = document.createElement('video')
    while (el.children.length) {
      videoEl.appendChild(el.firstChild) // 原始节点的子节点
    }
    if (!Dom.hasClass(el, 'typlayer-js')) {
      Dom.addClass(el, 'typlayer-js')
    }
    Dom.setAttributes(videoEl, attrs)
    el.appendChild(videoEl)
  }

  initChildren () {
    super.initChildren()
  }
}

export default Player
