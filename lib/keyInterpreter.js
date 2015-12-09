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
      console.log(e.key)
      var keyStr = ''
      var key = keyInterpreter.getKey(e)
      if(keyInterpreter.isCtrl(e)) keyStr += 'CTRL-'
      if(!key) return
      queue.push(keyStr + key)
      setTimeout(() => {
        keyInterpreter.emmit(queue)
        queue = []
      }, 1000)
    })
  },

  getKey (e) {
    return e.key.length > 1 ? false : e.key
  },

  emmit (keys) {
    window.dispatchEvent(new CustomEvent('vimkey', {
      detail: { key: keys.join(' ') }
    }))
  },

  isCtrl (e) {
    return e.ctrlKey
  }
}

