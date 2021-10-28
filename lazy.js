import { $ } from '../_root'
import screen from './screen'
import $embed from './embed.js'

function loadMethod (embed = false) {
  if (!embed) {
    return () => {
      setTimeout(() => { methods.img(); methods.bg() }, 50)
    }
  }
  return () => {
    setTimeout(() => { methods.img(); methods.bg(); methods.CKMedia(); methods.CKImg() }, 50)
  }
}
const __load = {
  img: img => {
    img.classList.remove('lazy')
    img.onerror = () => { img.src = '/images/picture.svg' }
    img.src = img.dataset.src
  },
  bg: el => {
    const img = new Image()
    img.src = el.dataset.src
    img.onload = () => el.style.backgroundImage = `url(${el.dataset.src})`
    img.onerror = () => el.style.backgroundImage = `url(/images/picture.svg)`
    el.classList.remove('lazy-bg')
  }
}
const methods = {
  img () {
    $.each('img.lazy', img => screen.inview(img, 150) ? __load.img(img) : false)
  },
  bg () {
    $.each('.lazy-bg', element => screen.inview(element) ? __load.bg(element) : false)
  },
  CKMedia () {
    $.each('figure.media', ele => screen.inview(ele, 150) ? $embed.media(ele) : '')
  },
  CKImg () {
    $.each('figure.image', ele => screen.inview(ele) ? $embed.image(ele) : '')
  },
  load: loadMethod()
}

export default {
  set embed (value) {
    methods.load = loadMethod(value)
  },
  run () {
    methods.load()
    $.resize(e => methods.load())
    $.scroll(e => methods.load())
  }
}