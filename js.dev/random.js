const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const rand = {
  /**
   * Random string with length
   * @param {Number} length
   * @param {String} init
   */
  string (length = 16, init = '') {
    for ( var i = 0; i < length; i++ ) {
      init += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return init
  },
  /**
   * Random a number between 'from' and 'to'
   * @param {Number} from
   * @param {Number} to
   */
  number (from = 1, to = 100) {
    return Math.floor(Math.random() * to) + from
  }
}
