import { CQuery } from './Query.js'
import { CEvent } from './Event.js'

/**
 * @param {Element|String} element
 * @param {Element|Document} root
 */
var __El = function (element, root = document) {
  const self = typeof element=="object" ? element : CQuery.first(element, root)
  /**
   * Find first inner element match selector
   * @param {String} selector
   */
  this.first = function (selector = ':first-child') {
    return CQuery.first(selector, self)
  }
  /**
   * Find all inner elements match selector
   * @param {String} selector
   */
  this.find = function (selector) {
    return CQuery.find(selector, self)
  }
  /**
   * Loop through all inner elements match selector
   * @param {String} selector
   */
  this.each = function (selector, callback) {
    return CQuery.each(selector, callback)
  }

  /**
   * Add event listener
   * @param {String} name 
   * @param {Function} listener 
   */
  this.on = function (name, listener){
    CEvent.on(name, listener, self)
  }
  /**
   * Dispatch event
   * @param {String} name 
   * @param {object} data 
   */
  this.emit = function (name, data = {}){
    CEvent.emit(name, data, self)
  }
  /**
   * Remove event listener
   * @param {String} name 
   * @param {Function} listener 
   */
  this.absorb = function (name, listener){
    CEvent.absorb(name, listener, self)
  }
  this.__self = () => self

  this.attr = {
    set (name, value) {
      self.setAttribute(name, value)
    },
    remove (name) {
      self.removeAttribute(name)
    },
    toggle (name) {
      self.toggleAttribute(name)
    },
    get (name) {
      return self.getAttribute(name)
    },
    has (name) {
      return self.hasAttribute(name)
    }
  }
  /**
   * Find first sibling match selector
   * @param {String} selector
   */
  this.sibling = function (selector) {
    return CQuery.first(selector, self.parentElement)
  }
  /**
   * Append new element
   * @param {Element} element
   */
  this.append = function (element) {
    self.append(element)
  }

  this.showModal = function () {
    if (self.type=='modal') self.show()
  }
  this.hideModal = function () {
    if (self.type=='modal') self.hide()
  }
}
class El extends __El {
  /**
   * @param {HTMLElement|String} element
   * @param {HTMLElement|Document} root
   */
   constructor (element, root = document) {
    super(element, root)
  }
  /**
   * @return {Element}
   */
  get raw () {
    return this.__self()
  }
  get class () {
    return this.raw.classList
  }
  get css () {
    return this.raw.style
  }
  /**
   * return element 
   */
  get parent () {
    return this.raw.parentElement
  }
  get domRect () {
    return this.raw.getBoundingClientRect()
  }
  get exist () {
    return this.raw!==null
  }
  get html () {
    return this.raw.innerHTML
  }
  set html (html) {
    this.raw.innerHTML = html
  }
  get value () {
    return this.raw.value
  }
  set value (value) {
    this.raw.value = value
  }
  get data () {
    return this.raw.dataset
  }
}
export { El }
