/**
 * This interprets key-presses and emmits an event `vimkey`.
 * It passes the pressed keys as a [vim-keymapping] string to `detail.keys`
 * inside the event object.
 */

var keyInterpreter = {
  listen () {
    // TODO: Add support for modes
    var queue = []
    return window.addEventListener('keyup', (e) => {
      var key = keyInterpreter.getKey(e)
      if(!key) return
      queue.push(key)
      keyInterpreter.emmit(queue)
      setTimeout(() => {
        keyInterpreter.emmit(queue)
        queue = []
      }, 1000)
      return false
    })
  },

  getKey (e) {
    if(keyInterpreter.ignore(e.key)) return false
    if(keyInterpreter.isCtrl(e)) return ['C', e.key.length > 1 ? e.key : e.key.toUpperCase()]
    if(e.key === ' ') return ['Space']
    return e.key.length > 1 ? [e.key] : e.key
  },

  emmit (keys) {
    window.dispatchEvent(new CustomEvent('vimkey', {
      detail: {
        key: keys.reduce((mem, el) => {
          if(typeof el === 'object') {
            if(el[1]) el[1] = el[1].toUpperCase()
            mem.push(`<${el.join('-')}>`)
          } else {
            mem.push(el)
          }
          return mem
        }, [])
      }
    }))
  },

  isCtrl (e) {
    return e.ctrlKey
  },

  ignore (key) {
    return [
      'Control',
      'Meta',
      'Shift'
    ].indexOf(key) > -1
  }
}

