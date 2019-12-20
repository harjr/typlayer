import mergeOptions from '../utils/merge-options'
import * as Guid from '../utils/guid'
import * as Dom from '../utils/dom'

/**
 * 所有组件的基础类
 * 每个组件都对应着一个JS对象和el元素（DOM实例）
 *
 * @file component.js
 */

class Component {
  /**
   * 构造函数
   *
   * @param {Player} player
   *        绑定的播放器对象
   *
   * @param {Object} [options]
   *        组件配置项
   *
   * @param {Object[]} [options.children]
   *        子组件数组
   *
   * @param {Component~ReadyCallback} [ready]
   *        ready回调
   */
  constructor (player, options, ready) {
    // 播放器对象
    this.player_ = player || this

    // 父组件
    this.parentComponent_ = null

    // 配置项
    this.options_ = mergeOptions(this.options_, options)

    // id
    this.id_ = this.id || options.id || (options.el && options.el.id)
    if (!this.id_) {
      const id = player ? player.id : 'no_player'
      this.id_ = `${id}_component_${Guid.newGUID()}`
    }

    // el
    if (options.el) {
      this.el_ = options.el
    } else if (options.createEl !== false) {
      this.el_ = this.createEl()
    }

    // 子组件实例化
    this.children_ = []
    this.childIndex_ = {}
    if (options.initChildren !== false) {
      // 通过这个方法父类和字类的DOM继承关系就能实现了
      // Player的构造函数中设置initChildren为false，单独实现
      this.initChildren()
    }

    // ready回调
    this.ready(ready)
  }

  /**
   * 实例化子组件
   */
  initChildren () {
    const children = this.options_.children
    if (children) {
      // const parentOptions = this.options_
      const workingChildren = Array.isArray(children) ? children : []
      const handleAdd = (child) => {
        // Create and add the child component.
        // Add a direct reference to the child by name on the parent instance.
        // If two of the same component are used, different names should be supplied
        // for each
        this.addChild(child.name, child.opts)
      }
      workingChildren
        .map((child) => {
          const name = child.name
          const opts = child.opts || child.options
          opts.componentClass = opts.componentClass || 'no-component-class'
          return { name, opts }
        })
        .filter((child) => {
          // 组件需在Component中注册
          const c = Component.getComponent(child.opts.componentClass)
          return c

          // 组件和tech的关系未知
          // we have to make sure that child.name isn't in the techOrder since
          // techs are registerd as Components but can't aren't compatible
          // See https://github.com/videojs/video.js/issues/2772
          // return c && !Tech.isTech(c)
        })
        .forEach(handleAdd)
    }
  }

  /**
   * ready回调队列
   */
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

  /**
   * 生成组件对应的UI元素
   */
  createEl (tagName, properties, attributes) {
    return Dom.createEl(tagName, properties, attributes)
  }

  /**
   * 添加子组件
   */
  addChild (child, options = {}, index = this.children_.length) {
    const componentClassName = options.componentClass
    const ComponentClass = Component.getComponent(componentClassName)
    if (!ComponentClass) {
      throw new Error(`Component ${componentClassName} does not exist`)
    }
    const component = new ComponentClass(this.player_, options)
    /*
    避免重复定义相同的组件？场景未知
    if (component.parentComponent_) {
      component.parentComponent_.removeChild(component);
    }
    */
    this.children_.splice(index, 0, component)
    component.parentComponent_ = this

    // 添加UI组件到容器里
    if (typeof component.el === 'function' && component.el()) {
      if (this.children_[index + 1] && this.children_[index + 1].el_) {
        // 确保子组件生成的顺序
        const refNode = this.children_[index + 1].el_
        this.contentEl().insertBefore(component.el(), refNode)
      } else {
        this.contentEl().appendChild(component.el())
      }
    }

    return component
  }

  contentEl () {
    return this.contentEl_ || this.el_
  }

  el () {
    return this.el_
  }

  /**
   * 注册组件类
   */
  static registerComponent (name, ComponentToRegister) {
    if (!Component.components_) {
      Component.components_ = {}
    }
    Component.components_[name] = ComponentToRegister
    return ComponentToRegister
  }

  /**
   * 获取已注册组件类
   */
  static getComponent (name) {
    if (!name || !Component.components_ || name === 'no-component-class') {
      return
    }
    const c = Component.components_[name]
    if (!c) {
      throw new Error(`Component ${name} does not exist`)
    }
    return Component.components_[name]
  }
}

// 已注册组件
Component.components_ = {}

export default Component
