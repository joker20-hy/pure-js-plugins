import ajax from './ajax'
import imageCompression from 'browser-image-compression'
/* global process */
const cnf = {
  MAX_SIZE: process.env.MIX_MAX_FILE_SIZE * 1024 * 8,
  MAX_COMPRESS_SIZE: process.env.MIX_MAX_IMG_COMPRESS_SIZE,
  BASE: `${process.env.MIX_AWS_URL}/${process.env.MIX_AWS_BUCKET}/${process.env.MIX_IMAGE_FOLDER}`,
  MIME_TYPES: {
    IMG: process.env.MIX_ACCEPT_IMG_TYPE.split(',').map(item => '.'+item).join(', ')
  }
}
const __method = {
  /**
   * Build FormData object to upload images
   * @param {FileList} files
   * @param {Object} extra_config
   */
  async buildFormData (files, extra_config, extra_params = {}) {
    const formData = new FormData()
    const images = await compressor(files, extra_config)
    images.forEach((image, index) => formData.append(`images[${index}]`, image))
    for (const key in extra_params) {
      formData.append(key, extra_params[key])
    }
    return formData
  }
}
/**
 * Upload images to server
 * @param {FileList} images
 */
async function uploader (images, extra_config = {}, api = '/api/image', extra_params = {}) {
  const formData = await __method.buildFormData(images, extra_config, extra_params)
  const response = await ajax.post(api, formData, 'multipart')
  return response
}
/**
 * Compress image file
 * @tutorial https://github.com/Donaldcwl/browser-image-compression#readme
 * @param {FileList} files image to compress
 * @param {*} _config config follow browser-image-compression
 * @return {Promise<Array<File>>} Promise with file has been compressed
 */
async function compressor (files, config = {}) {
  const __config = {...{maxSizeMB: cnf.MAX_COMPRESS_SIZE / 1024, maxWidthOrHeight: 960, useWebWorker: true}, ...config}
  async function compress (files, config) {
    const images = []
    for (let index = 0; index < files.length; index++) {
      await imageCompression(files[index], config).then(image => images.push(image))
    }
    return images
  }
  return compress(files, __config)
}
/**
 * Preview list of file to node list of img tag
 * @param {NodeListOf<Element>} imgs
 * @param {FileList} image_files
 */
function preview (imgs, image_files) {
  for (let index = 0; index < image_files.length; index++) {
    try {
      imgs[index].src = URL.createObjectURL(image_files[index])
    } catch (error) {
      console.log("unable to preview "+image_files[index].name)
    }
  }
}
/**
 * 
 * @param {File} file image file
 * @return {String} data url
 */
function imgToUrl (file) {
  return URL.createObjectURL(file)
}
export default { uploader, compressor, preview, imgToUrl, cnf: {base: cnf.BASE, mime_types: cnf.MIME_TYPES} }