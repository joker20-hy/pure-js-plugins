import { $ } from '../_root'
const methods = {
  /**
   * Correct url before embed
   * @param {String} urlstr
   */
  correctUrl (urlstr) {
    let url = new URL(urlstr)
    switch (url.origin) {
      case "https://www.youtube.com":
        url = new URL(urlstr.replace('watch?v=', 'embed/'))
        return `${url.origin}${url.pathname.split('&')[0]}`
        break;
      case "https://youtu.be":
        return `https://www.youtube.com/embed/${url.pathname.split("/")[1]}`
        break;
      case "https://www.facebook.com":
        return `https://www.facebook.com/plugins/video.php?href=${urlstr}&show_text=0`
      default:
        break;
    }
  }
}
export default {
  config: {
    alt: document.querySelector('title').innerHTML
  },
  /**
   * Embed media
   * @param {HTMLElement} figure figure.media
   */
  media (figure) {
    if (figure.loaded) return true
    try {
      let oembed = $.first('oembed[url]', figure)
      let src = oembed.getAttribute('url')
      let iframe = $.__el('iframe')
      iframe.backgroundImage = 'url(/images/picture.svg)'
      iframe.classList.add('embed-video')
      iframe.src = methods.correctUrl(src)
      oembed.replaceWith(iframe)
      figure.loaded = true
    } catch (error) {
      console.log("unable to load "+src)
    }
  },
  /**
   * Show image embed by CKEditor - Good for SEO
   * @param {HTMLElement} figure figure.image
   */
  image (figure) {
    if (figure.loaded) return true
    try {
      let image = figure.querySelector('img')
      image.setAttribute('alt', this.config.alt)
      image.style.display = 'block'
      let source = image.classList.contains('embed-lazy') ? image.dataset.src : image.getAttribute('src')
      image.setAttribute('src', source)
      image.onerror = () => { image.src = '/images/picture.svg' }
      figure.loaded = true
    } catch (error) {
      console.log("unable to fetch CK Image")
    }
  }
}