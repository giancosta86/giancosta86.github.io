$(() => {
  const blankTargetRegex =
    /^https?|\.pdf$/


  setupHyperlinksTarget()


  function setupHyperlinksTarget() {
    $("a").each((_, hyperlink) => {
      let targetUrl =
        hyperlink.getAttribute("href")

      if (blankTargetRegex.test(targetUrl)) {
        hyperlink.target =
          "_blank"
      }
    })
  }
})
