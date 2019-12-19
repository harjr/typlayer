
import mergeOptions from '../utils/merge-options.js'
import * as Guid from '../utils/guid.js'

/**
 * Base class for all UI Components.
 * Components are UI objects which represent both a javascript object and an element
 * in the DOM. They can be children of other components, and can have
 * children themselves.
 *
 * @file component.js
 */

class Component {
  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Object[]} [options.children]
   *        An array of children objects to intialize this component with. Children objects have
   *        a name property that will be used if more than one component of the same type needs to be
   *        added.
   *
   * @param {Component~ReadyCallback} [ready]
   *        Function that gets called when the `Component` is ready.
   */
  constructor (player, options, ready) {
    this.player_ = player || this
    this.parentComponent_ = null
    this.options_ = mergeOptions(this.options_, options)
    this.id_ = options.id || (options.el && options.el.id)
    // If there was no ID from the options, generate one
    if (!this.id_) {
      const id = player ? player.id : 'no_player'
      this.id_ = `${id}_component_${Guid.newGUID()}`
    }
    // Create element if one wasn't provided in options
    if (options.el) {
      this.el_ = options.el
    } else if (options.createEl !== false) {
      this.el_ = this.createEl()
    }
    // Add any child components in options
    if (options.initChildren !== false) {
      // initChildren是将一个类的子类都实例化，一个类都对应着自己的el（DOM实例），
      // 通过这个方法父类和字类的DOM继承关系就能实现了
      // Player的构造函数中设置initChildren为false
      this.initChildren()
    }

    this.ready(ready)
  }

  /**
   * Add and initialize default child `Component`s based upon options.
   */
  initChildren () {
    const children = this.options_.children

    if (children) {
      // const parentOptions = this.options_
      let workingChildren = []
      if (Array.isArray(children)) {
        workingChildren = children
      }
      const handleAdd = (child) => {
        // const name = child.name
        // const opts = child.opts

        console.log(child)
      }
      workingChildren
        .map((child) => {
          const name = child
          const opts = child
          return { name, opts }
        })
        .filter((child) => {
        // we have to make sure that child.name isn't in the techOrder since
        // techs are registerd as Components but can't aren't compatible
        // See https://github.com/videojs/video.js/issues/2772
          const c = Component.getComponent(child.opts.componentClass || child.name)
          return c
          // return c && !Tech.isTech(c)
        })
        .forEach(handleAdd)
    }
  }

  // ready
  ready (fn, sync = false) {
    if (!fn) {
      return
    }

    if (!this.isReady_) {
      this.readyQueue_ = this.readyQueue_ || []
      this.readyQueue_.push(fn)
    }

    /*
    if (sync) {
      fn.call(this)
    } else {
      this.setTimeout(fn, 1)
    }
    */
  }
}

export default Component
