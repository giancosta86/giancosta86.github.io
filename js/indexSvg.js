---
---
$(window).on("load", () => {
    var svgDoc =
        $("#indexSvg")[0].contentDocument;

    setupLinks(svgDoc)

    setupStyles(svgDoc)
})


function setupLinks(svgDoc) {
    function assignLink(svgElementSelector, targetUrl) {
        $(svgElementSelector, svgDoc).on("click", () => {
            window.location = targetUrl
        });
    }



    {% for linkEntry in site.data.links %}

    {% assign linkId = linkEntry[0] %}
    {% assign linkUrl = linkEntry[1] %}

    assignLink(
        `#{{ linkId }}`,
        "{{ linkUrl }}"
    )

    {% endfor %}
}



function setupStyles(svgDoc) {
    $("ellipse", svgDoc)
        .css("cursor", "pointer")

    $("text", svgDoc)
        .css("cursor", "pointer")

    $("#motto", svgDoc)
        .css("cursor", "arrow")


    const areasWithMenu = [
        "about",
        "openSource",
        "knowledgeSharing",
        "socialNetworks",
        "artifacts",
        "highlightedProjects"
    ]

    areasWithMenu.forEach((area) => {
        var groupId =
            `#${area}Group`

        var groupNode =
            $(groupId, svgDoc)

        groupNode.toggle()


        var mainButtonNode =
            $(`#${area}`, svgDoc)

        mainButtonNode.on("click", () => {
            groupNode.toggle()
        })
    })
}
