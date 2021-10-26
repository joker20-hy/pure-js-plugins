import ajax from "./ajax"

var ImageTrash = function () {
  var repo = []
  function getName (fullPath) {
    // eslint-disable-next-line no-useless-escape
    return fullPath.replace(/^.*[\\\/]/, '')
  }
  this.push = fullPath => {
    repo.push(fullPath)
  }
  this.pop = () => repo.pop()
  
  this.empty = async () => {
    if (repo.length===0) return true
    await ajax.delete('/api/image', {images: repo.map(path => getName(path))})
    repo = []
  }
}

export { ImageTrash }