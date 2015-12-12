/**
 * This renderds a form to enter the current vim mode
 */

var mode = {
  render (modes) {
    var form = document.createElement('form')
    var select = document.createElement('select')
    modes.forEach((el, i) => {
      var option = document.createElement('option')
      option.textContent = el
      option.value = el
      select.appendChild(option)
    })
    form.appendChild(select)
    document.body.appendChild(form)
    mode.set(select.value)
    return mode.listen(select)
  },

  listen (elem) {
    return elem.addEventListener('change', (e) => mode.set(elem.value))
  }
}

;(() => {
  var currMode
  mode.get = () => currMode
  mode.set = (m) => currMode = m
})()


