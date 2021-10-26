var JSScreen = function () {
  this.watchScrollDirection = () => {
    var position = 0;
    window.addEventListener('scroll', function () {
      const top = document.body.getBoundingClientRect().top;
      if (top > position) window.dispatchEvent(new CustomEvent('scroll-up'))
      else window.dispatchEvent(new CustomEvent('scroll-down'));
      position = top;
    });
  }
  /**
   * Listen on window resize event
   * @param {Function} listener
   */
  this.onresize = (listener) => {
    window.addEventListener('resize', listener)
  }
  /**
   * Check if element viewport
   * @param {HTMLElement} element
   * @returns
   */
  this.inview = (element, offset = 0) => {
    return element.getBoundingClientRect().top<=window.innerHeight && element.getBoundingClientRect().bottom>= offset && window.getComputedStyle(element).display!=='none'
  }
  var breakpoint = '992px'
  this.isSmall = () => {
    return window.matchMedia(`(max-width: ${breakpoint})`).matches
  }
}
export { JSScreen }