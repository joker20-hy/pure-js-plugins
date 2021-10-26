const CONTAINS_EMOJI = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi
const PHONE = /^([0]{1}|\+84)([0-9]{9})$/
const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const URL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
/**
 * dd/mm/yyyy or dd-mm-yyyy
 */
const DATE = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
/**
 * mm/yyyy or mm-yyyy
 */
const MONTH = /^(0?[1-9]|1[012])[\/\-]\d{4}$/
/**
 * password must have at least 8 charactor include one digit, one lower case, one upper case
 */
const PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

export { CONTAINS_EMOJI, PHONE, EMAIL, URL, DATE, MONTH, PASSWORD }
