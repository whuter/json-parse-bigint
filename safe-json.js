var JsonParseBigInt = (function () {
  var jsonParse = JSON.parse
  return function parse(str, reviver) {
    // If there is no big integer, Use native JSON.parse
    if (/\d{16,}/.test(str)) {
      str = str.replace(/"(\\?[\s\S])*?"|([+\-\d.eE]{16,})/g, function(match, _, num) {
        if (num && /^\d{16,}$/.test(num)) {
          // match big integers in numbers
          return '"' + match + '"'
        }
        return match
      })
    }
    return jsonParse(str, reviver)
  }
})()
if (typeof module !== 'undefined' && module && module.exports) {
  module.exports = JsonParseBigInt
}
