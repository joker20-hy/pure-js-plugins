import { $ } from '../_root'
/**
 * @override '../../js.dev/screen'
 */
export default {
  breakpoint: '992px',
  get small () {
    return $.matchMedia(`(max-width: ${this.breakpoint})`)
  },
  small () {
    return $.matchMedia(`(max-width: ${this.breakpoint})`)
  },
  /**
   * Check if element viewport
   * @param {HTMLElement} element
   * @returns
   */
  inview (element, offset = 0) {
    return $(element).domRect.top<=window.innerHeight && $(element).domRect.bottom>= offset && $.style(element).display!=='none'
  }
}