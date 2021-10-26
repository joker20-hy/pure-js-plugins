const s_youtube = {
  /**
   * Get url of thumbnail image
   * @param {String} url url of youtube video
   */
  thumbnailImg (url) {
    return `http://img.youtube.com/vi/${this.getIdFromUrl(url)}/0.jpg`
  },
  /**
   * Get embed youtube video url from origin url
   * @param {String} url url of youtube video
   */
  embedUrl (url) {
    return `https://www.youtube.com/embed/${this.getIdFromUrl(url)}`
  },
  /**
   * Correct url before embed
   * @param {String} urlstr
   */
  getIdFromUrl (urlstr) {
    let url = new URL(urlstr)
    switch (url.origin) {
      case "https://www.youtube.com":
        return url.searchParams.get('v')
        break;
      case "https://youtu.be":
        return url.pathname.split("/")[1]
        break;
      default:
        throw "Unsupport youtube link"
        break;
    }
  }
}
const s_zalo = {
  chatLink (phone) {
    return `https://zalo.me/${phone}`
  }
}
const s_facebook = {
  fanpageLink (id) {
    return id ? `https://www.facebook.com/${id}` : ''
  },
  messengerLink (id) {
    return id ? `https://www.messenger.com/t/${id}` : ''
  },
}
const frontend = {
  /**
   * Get school detail link from params
   *
   * @param {string} short_name
   * @param {String} slug_name
   */
   school_detail (short_name, slug_name) {
    return short_name===null ? `${process.env.MIX_APP_URL}/chi-tiet-truong/${slug_name}`
        : `https://${short_name}.${process.env.MIX_SESSION_DOMAIN}`
  },
  /**
   * Get search result url
   *
   * @param {String|null} school_category
   * @param {String} province_slug
   * @param {String} area_slug
   * @param {*} query
   */
  search_result (school_category = null, province_slug = null, area_slug = null, query = null) {
    const params = school_category!==null&&school_category!=='' ? [school_category] : ['tim-kiem']
    if (province_slug!==null&&province_slug!=='') params.push(province_slug)
    if (area_slug!==null&&area_slug!=='') params.push(area_slug)
    query = query===null ? '' : `?${query}`
    return `${process.env.MIX_APP_URL}/${params.join('/')}${query}`
  }
}
export { s_youtube, s_zalo, s_facebook, frontend }
