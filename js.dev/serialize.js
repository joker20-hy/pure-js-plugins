export default {
  /**
   * Serialize object to query string
   * @param {Object} object
   * @param {string} glue
   * @return {String} Ex: 'id=1&name=joker20'
   */
  object (object, glue = '&', init = []) {
    for (var p in object)
      if (object[p]!=null&&object[p]!=undefined) {
        init.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
      }
    return init.join(glue)
  }
}