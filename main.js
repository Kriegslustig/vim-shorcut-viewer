manual.getMap('https://raw.githubusercontent.com/Kriegslustig/vim-index-json/master/index.json')
  .then((man) => {
    window.man = man
    var listener = keyInterpreter.listen()
    var modeListener = mode.render(Object.keys(man))
    window.addEventListener('vimkey', (e) => {
      if(!e.detail.key) return
      document.body.children[0].textContent = (manual.getMan(man, mode.get(), e.detail.key) || '_')
      document.body.children[1].textContent = (e.detail.key)
    })
  })
  .catch((err) => console.error(err))

