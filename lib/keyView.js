var keyView = {
  updateKeys (elem, keys) {
    elem.innerHTML = ''
    keys.forEach((keys) => {
      if(!keys) return
      prettyKeys = keyView.getKey(keys)
      var keyElems = prettyKeys.map((key) => [
        'p',
        { class: 'key', 'data-key': key },
        key
      ])
      elem.appendChild(
        microjungle([
          ['div',
            { class: 'key-container' },
            keyElems
          ]
        ])
      )
    })
  },

  getKey (keyStr) {
    return [
      (key) => {
        var res = key.match(/^<(\w+)>$/)
        return res ? [res[1]] : false
      },
      (key) => {
        var res = key.match(/^<C-(\w+)>$/)
        return res ? ['Control', res[1]] : false
      },
      (key) => {
        var res = key.match(/^<M-(\w+)>$/)
        return res ? ['Option', key.match(res)[1]] : false
      }
    ].reduce((mem, test) => test(keyStr) || mem, [keyStr])
  }
}

