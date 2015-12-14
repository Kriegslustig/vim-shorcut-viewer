var manual = {
  getMan (man, mode, key) {
    if(!man[mode]) return
    return man[mode][
      Object.keys(man[mode])
        .reduce((mem, el, i) => {
          try {
            return (new RegExp(el)).test(key) ? el : mem
          } catch (e) {
            return mem
          }
        }, false)
    ]
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

