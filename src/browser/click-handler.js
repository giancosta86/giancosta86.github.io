const BlankTargetRegex = /^https?:\/\/(?!localhost|0.0.0.0|gianlucacosta.info).*$|\.(?:pdf|json)$/

document.addEventListener("click", event => {
  let clickedElement = event.target

  if (clickedElement.href && BlankTargetRegex.test(clickedElement.href)) {
    clickedElement.target = "_blank"
    clickedElement.rel = "noopener"
  }
})
