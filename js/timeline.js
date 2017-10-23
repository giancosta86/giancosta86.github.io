//
// This file refers to several definitions contained in the
// JS file dedicated to timeline data
//

var groups =
  createGroups()

var itemsDataSet =
  createItemsDataSet()



$(window).on("load", setupPage)


function setupPage() {
  var container =
    $('#timelineContainer')[0];


  var options = {
  };


  var timeline =
    new vis.Timeline(container, itemsDataSet, groups, options);

  var timelineReady = false

  timeline.on("rangechanged", () => {
    if (!timelineReady) {
      setupTimeline(timeline)

      timelineReady = true
    }
  })
}


function setupTimeline(timeline) {
  timeline.setWindow(
    new Date(now.getFullYear() - 2, 4, 1),
    now
  )

  timeline.redraw()

  timeline.on("itemover", changeTooltipClass)
}



function changeTooltipClass(properties) {
  var itemId =
    properties.item

  var item =
    itemsDataSet.get(itemId)

  var tooltipNode =
    $(".vis-tooltip")


  groups.forEach(group => {
    tooltipNode.removeClass(group.id)
  })

  tooltipNode.addClass(item.group)
}



function createGroups() {
  var groups = [
    {
      id: "events",
      content: "Events",
    },

    {
      id: "programmingLanguages",
      content: "Programming languages",
    },

    {
      id: "databaseTechnologies",
      content: "Database technologies",
    },

    {
      id: "webTechnologies",
      content: "Web technologies",
    },

    {
      id: "systemAdministration",
      content: "System administration",
    },

    {
      id: "otherFrameworks",
      content: "Other frameworks"
    }
  ]


  groups.forEach(group => {
    group.className = group.id
  })

  return groups
}



function createItemsDataSet() {
  events.forEach(item => {
    item.group = "events"
    item.type = "point"
  })


  programmingLanguages.forEach(item => {
    item.group = "programmingLanguages"
  });


  webTechnologies.forEach(item => {
    item.group = "webTechnologies"
  })


  databaseTechnologies.forEach(item => {
    item.group = "databaseTechnologies"
  })


  systemAdministration.forEach(item => {
    item.group = "systemAdministration"
  })


  otherFrameworks.forEach(item => {
    item.group = "otherFrameworks"
  })



  var allItems =
    events
      .concat(programmingLanguages)
      .concat(databaseTechnologies)
      .concat(webTechnologies)
      .concat(systemAdministration)
      .concat(otherFrameworks)


  allItems.forEach(setupTooltipContent)


  return new vis.DataSet(
      allItems
    );
}



function setupTooltipContent(item) {
  item.className = item.group

  if (item.end) {
    if (item.end == today) {
      var dateString =
        `from <span class="date">${item.start}</span> up to <span class="date">now</span>`
    } else {
      var dateString =
        `from <span class="date">${item.start}</span> to <span class="date">${item.end}</span>`
    }
  } else {
    var dateString =
      `<span class="date">${item.start}</span>`
  }

  item.title = `<h1>${item.content}</h1><span class="dateLabel">${dateString}</span>`
}



