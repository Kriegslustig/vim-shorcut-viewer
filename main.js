manual.getMap('https://raw.githubusercontent.com/Kriegslustig/vim-index-json/master/index.json')
  .then((man) => {
    window.man = man
    var keyContainer = document.querySelector('.key-combination')
    var resultContainer = document.querySelector('.result > p')
    var modeListeners = mode.render(Object.keys(man))
    var keyListener = keyInterpreter.listen()
    window.addEventListener('vimkey', (e) => {
      if(!e.detail.key) return
      keyView.updateKeys(keyContainer, e.detail.key)
      resultContainer.textContent = manual.getMan(man, mode.get(), e.detail.key.join(''))
    })
  })
  .catch((err) => console.error(err))

