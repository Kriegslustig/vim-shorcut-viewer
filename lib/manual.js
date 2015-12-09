var manual = {
  getMan (man, mode, key) {
    return man[mode][key]
  },
  getMap (url) {
    return new Promise((res, rej) => {
      var req = new XMLHttpRequest()
      req.open('GET', url, true)
      req.addEventListener('load', (e) => {
        res(JSON.parse(req.response))
      })
      req.addEventListener('error', rej)
      req.send()
    })
  }
}

