class CEvent {
  constructor () {}
  static on (name, listener, root = document) {
    root.addEventListener(name, listener)
  }
  static emit(name, data = {}, root = document) {
    root.dispatchEvent(new CustomEvent(name, {detail: data}))
  }
  static absorb (name, listener, root = document) {
    root.removeEventListener(name, listener)
  }
  /**
   * Listen to document on load event
   * @param {Function} listener
   */
  static load (listener) {
    document.addEventListener('DOMContentLoaded', listener)
  }
  /**
   * Listen to document on scroll event
   * @param {Function} listener
   */
  static scroll (listener) {
    document.addEventListener('scroll', listener)
  }
  /**
   * Listen to window on resize event
   * @param {Function} listener
   */
  static resize (listener) {
    window.addEventListener('resize', listener)
  }
}
export { CEvent }
