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
      queue.push(keyInterpreter.getKey(e) || '')
      keyInterpreter.emmit(queue)
      setTimeout(() => {
        keyInterpreter.emmit(queue)
        queue = []
      }, 1000)
    })
  },

  getKey (e) {
    if(keyInterpreter.isCtrl(e)) return ['C', e.key.toUpperCase()]
    if(keyInterpreter.ignore(e)) return false
    if(e.key === ' ') return ['Space']
    return e.key.length > 1 ? [e.key] : e.key
  },

  emmit (keys) {
    console.log(keys)
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
        }, []).join('')
      }
    }))
  },

  isCtrl (e) {
    return e.ctrlKey
  },

  ignore (e) {
    return [
      'Control',
      'Meta',
      'Shift'
    ].indexOf(e.key) > -1
  }
}

