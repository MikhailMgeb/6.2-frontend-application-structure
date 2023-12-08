buttonCount = document.querySelector('.button-count')
count  = 0
buttonCount.addEventListener 'click', ->
  count += 1
  buttonCount.textContent = count
  return
