import { El } from "./root-cores.js/Element";
import { CQuery } from "./root-cores.js/Query";
import { CEvent } from "./root-cores.js/Event";
import { Util } from "./root-cores.js/utilities";

const $ = function (element, root = document) {
  return new El(element, root);
}
/** */
$.first = CQuery.first
$.find = CQuery.find
$.each = CQuery.each
/** */
$.on = CEvent.on
$.emit = CEvent.emit
$.absorb = CEvent.absorb
$.load = CEvent.load
$.resize = CEvent.resize
$.scroll = CEvent.scroll
/** */
$.append = Util.append
$.style = Util.style
$.lock = Util.lock
$.unlock = Util.unlock
$.matchMedia = Util.matchMedia
$.error = Util.error
$.__el = Util.newEl
$.__cus = Util.customEl
/** */
$.scrollTop = (element, offset = null) => {
  offset = offset===null ? element.offsetTop : offset
  const self = new El(element);
  var compare = self.domRect.top<offset ? () => self.domRect.top>offset : () => self.domRect.top<offset
  var yOffset = self.domRect.top<offset ? -10 : 10

  function condition () {
    if (compare()) return false
    window.scrollTo(0, window.pageYOffset + yOffset)
    return true
  }

  var mark = setInterval(function () {
    if (!condition()) clearInterval(mark)
  }, 10)
}
$.cnf = $glb.const
$.urls = $glb.urls
/** */
const searchParams = (new URL(window.location.href)).searchParams;
if (searchParams.has(process.env.MIX_COOKIE_VOUCHER_REFERRAL)) {
  localStorage.setItem(process.env.MIX_COOKIE_VOUCHER_REFERRAL, searchParams.get(process.env.MIX_COOKIE_VOUCHER_REFERRAL))
}
/** */
export { $ }
