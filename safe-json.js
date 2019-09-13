var jsonParseBigInt = (function () {
  var jsonParse = JSON.parse
  return function parse(str, reviver) {
    // If there is no big integer, Use native JSON.parse
    if (/\d{16,}/.test(str)) {
      var replaceMap = []
      var n = 0
      // extract Strings in JSON
      str = str.replace(/"(\\?[\s\S])*?"/g, function(match) {
        // remove Strings containing big integer
        if (/\d{16,}/.test(match)) {
          replaceMap.push(match)
          // Three double quotation marks never appear in vaild JSON
          return '"""'
        }
        return match
      }).replace(/[+\-\d.eE]{16,}/g, function(match) {
        if (/^\d{16,}$/.test(match)) {
          // match big integers in numbers
          return '"' + match + '"'
        }
        return match
      }).replace(/"""/g, function() {
        // replace Strings back
        return replaceMap[n++]
      })
    }
    return jsonParse(str, reviver)
  }
})()
if (typeof module !== 'undefined' && module && module.exports) {
  module.exports = jsonParseBigInt
}