window.addEventListener('keydown', (e) => {
  changeKeyClasses(getKey(e.key), 'active')
})

window.addEventListener('keyup', (e) =>{
  changeKeyClasses(getKey(e.key), '')
})

function getKey (key) {
  return key.length > 1 ? key : key.toUpperCase()
}

function changeKeyClasses (key, className) {
  Array.prototype.forEach.call(document.querySelectorAll(`div[data-keys~="${key}"]`), (el) => {
    el.className = className
  })
}

