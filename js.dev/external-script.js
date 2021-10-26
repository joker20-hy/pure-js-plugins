function importJS (src, origin = '*', append = () => {}, target = document.head) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    if (origin) script.crossOrigin = origin
    script.async = true
    script.src = src
    append(script)
    script.onload = resolve(script)
    script.onerror = reject(script)
    target.append(script)
  })
}

class Vendor {
  #delay = 6000
  constructor () {}
  get importer () {
    return importJS
  }
  delay (_delay) {
    this.#delay = _delay
    return this
  }
  import () {
    setTimeout(() => this.core(), this.#delay)
  }
  core () {}
}
export { Vendor }