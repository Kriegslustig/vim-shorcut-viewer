var keyView = {
  updateKeys (elem, keys) {
    elem.innerHTML = ''
    keys.forEach((key) => {
      var keyElem
      if(!key) return
      keyElem = document.createElement('p')
      keyElem.className = 'key'
      keyElem.setAttribute('data-key', key)
      keyElem.textContent = key
      elem.appendChild(keyElem)
    })
  },
}

