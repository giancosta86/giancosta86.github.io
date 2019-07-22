import "jquery/dist/jquery.min"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min"

import "./src/scss/global.scss"

import "./src/browser/click-handler"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
