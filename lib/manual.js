var manual = {
  getMan (man, mode, key) {
    var res
    var keys
    if(!man[mode]) return
    keys = Object.keys(man[mode])
    for (i in keys) {
      try {
        if((new RegExp(keys[i])).test(key)) {
          res = keys[i]
          break
        }
      } catch (e) {
        console.error(`Error in key '${keys[i]}'`)
      }
    }
    return man[mode][res] || false
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

