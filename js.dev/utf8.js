export default {
  /**
   * Encode string into UTF8
   * @param {String} string 
   */
  encode (string) {
    return unescape(encodeURIComponent(string))
  },
  /**
   * Decode string from UTF8
   * @param {String} string 
   */
  decode (string) {
    return string===null||string===undefined ? '' : decodeURIComponent(escape(string))
  }
}