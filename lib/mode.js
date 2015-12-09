/**
 * This renderds a form to enter the current vim mode
 */

var mode = {
  render (modes) {
    var form = document.createElement('form')
    modes.forEach((el, i) => {
      form.innerHTML += `
        <fieldset>
          <input id="vimmode-${i}" type="radio" name="vimmode" value="${el}">
          <label for="vimmode-${i}">${el}</label>
        </fieldset>
      `
    })
    document.body.appendChild(form)
    return mode.listen(form)
  },

  listen (elem) {
    return elem.addEventListener('change', (e) => mode.set(elem.querySelector('input:checked').value))
  }
}

;(() => {
  var currMode
  mode.get = () => currMode
  mode.set = (m) => currMode = m
})()


