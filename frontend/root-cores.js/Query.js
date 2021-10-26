class CQuery {
  constructor () {}
  /**
   * Query first element match selector
   * @param {String} selector
   * @param {Element|Document} root
   */
  static first (selector, root = document) {
    return root.querySelector(selector)
  }
  /**
   * Query all elements match selector
   * @param {String} selector
   * @param {Element|Document} root
   */
  static find(selector, root = document) {
    return root.querySelectorAll(selector)
  }
  /**
   * Loop through all elements match selector
   * @param {String} selector
   * @param {Element|Document} root
   */
  static each(selector, callback, root = document) {
    this.find(selector, root).forEach(callback)
  }
}
export { CQuery }
