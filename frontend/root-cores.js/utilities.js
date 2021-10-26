class Util {
  constructor () {}
  static append (element, root = document.body) {
    root.append(element)
  }
  static style (element) {
    return window.getComputedStyle(element)
  }
  /** Prevent body from scroll */
  static lock () {
    document.body.classList.add('locked')
  }
  /** Unlock body */
  static unlock () {
    document.body.classList.remove('locked')
  }
  /**
   * Check if current screen match media
   * @param {String} screen
   */
  static matchMedia (screen) {
    return window.matchMedia(screen).matches
  }
  /**
   * Log error to console
   * @param {*} error
   */
  static error (error) {
    return process.env.MIX_APP_ENV==='prod' ? true : console.log(error)
  }
  /**
   * Create new element
   * @param {String} tagName
   */
  static newEl (tagName) {
    return document.createElement(tagName)
  }
  /**
   * Define custome element
   * @param {String} name
   * @param {*} constructor
   */
  static customEl (name, constructor) {
    window.customElements.define(name, constructor)
  }
}
export { Util }
