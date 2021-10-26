export default {
  /**
   * Store data to localStorage
   * @param {String} key 
   * @param {Object} data
   */
  store (key, data) {
    if (key===undefined||data===undefined) throw "key and data are required"
    localStorage.setItem(key, JSON.stringify(data))    
  },
  /**
   * Get data stored in storage
   * @param {String} key
   * @return {object|null}
   */
  get (key) {
    let data = localStorage.getItem(key)
    return data!==null ? JSON.parse(data) : null
  },
  /**
   * Check if a key exist
   * @param {String} key
   * @return Boolean
   */
  exist (key) {
    return this.get(key)!==null
  },
  /**
   * Remove a record by key
   * @param {String} key 
   */
  delete (key) {
    localStorage.removeItem(key)
  }
}