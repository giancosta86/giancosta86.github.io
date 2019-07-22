const BlankTargetRegex = /^https?:\/\/(?!localhost|gianlucacosta.info).*$|\.(?:pdf|.json)$/m

document.addEventListener("click", event => {
  let clickedElement = event.target

  if (clickedElement.href && BlankTargetRegex.test(clickedElement.href)) {
    console.log(JSON.stringify(clickedElement.href))

    clickedElement.target = "_blank"
    clickedElement.rel = "noopener"
  }
})
