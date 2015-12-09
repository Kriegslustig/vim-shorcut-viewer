manual.getMap('https://raw.githubusercontent.com/Kriegslustig/vim-index-json/master/index.json')
  .then((man) => {
    var listener = keyInterpreter.listen()
    var modeListener = mode.render(Object.keys(man))
    window.addEventListener('vimkey', (e) => {
      document.body.children[0].innerHTML = (manual.getMan(man, mode.get(), e.detail.key) || '')
    })
  })
  .catch((err) => console.error(err))

