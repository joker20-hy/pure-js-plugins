const _methods = {
  /**
   * @param {String} _datetime YYYY-mm-dd HH:mm:ss | YYYY-mm-dd
   */
  getDate(_datetime, splitter = '/') {
    try {
      return _datetime.split(' ')[0].split('-').reverse().join(splitter)
    } catch (error) {
      return ''
    }
  },
  /**
   * @param {String} datetime YYYY-mm-dd HH:mm:ss
   */
  getTime(_datetime) {
    try {
      return _datetime.split(' ')[1]
    } catch (error) {
      return ''
    }
  }
}
export const $date = {
  /**
   * Format 'to_date'
   * @param {String} to_date 'YYYY-mm-dd HH:mm:ss' || 'YYYY-mm-dd'
   * @param {Boolean} with_time
   */
  format (date_str, with_time = false) {
    return with_time ? `${_methods.getTime(date_str)} ${_methods.getDate(date_str)}`: _methods.getDate(date_str)
  },
  /**
   * Get day deference betweeen to day and 'to_date'
   * @param {String} to_date 'YYYY-mm-dd HH:mm:ss'
   * @returns {Number}
   */
  dayDiff (to_date) {
    try {
      let date = new Date(to_date)
      let today = new Date()
      let diffTime = date - today
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    } catch (error) {
      return null
    }
  },
  /**
   * Compare dates
   * @param {String} date 'YYYY-mm-dd HH:mm:ss'
   * @param {String|null} compare_date 'YYYY-mm-dd HH:mm:ss' or null mean today
   */
  compare (date, compare_date = null) {
    let fromDate = new Date(date)
    let toDate = compare_date===null ? new Date() : new Date(compare_date)
    let fromTime = fromDate.getTime()
    let toTime = toDate.getTime()
    if (fromTime > toTime) return 1
    else if (fromTime===toTime) return 0
    return -1
  }
}