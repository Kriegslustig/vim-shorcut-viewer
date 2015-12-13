var keyView = {
  init (elem) {
    window.addEventListener('keydown', (e) => {
      keyView.renderKey(elem, e.key)
    })
    window.addEventListener('keyup', (e) => {
      keyView.deleteKey(elem, e.key)
    })
  },
  renderKey (elem, key) {
    var keyElem = document.createElement('p')
    keyElem.className = 'key'
    keyElem.setAttribute('data-key', key)
    elem.appendChild(keyElem)
  },
  deleteKey (elem, key) {
    [].forEach.call(document.querySelectorAll(`.key[data-key="${key}"]`))
  }
}

