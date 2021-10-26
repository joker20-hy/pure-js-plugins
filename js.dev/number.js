export default {
  /**
  * Range number by ','
  * @param {Number} number 1000000
  */
  range (number, splitter = ',') {
    return `${number}`.replace(new RegExp(splitter, "g"), '').replace(/(\d)(?=(\d{3})+\b)/g, `$1${splitter}`)
  },
  /**
   * Get number from string
   * @param {String} string 1,000,000
   */
  unrange (string, splitter = ',') {
    return parseFloat(string.replace(new RegExp(splitter, "g"), ''))
  }
}