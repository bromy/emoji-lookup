const fs = require('fs')

indexHtmlPath = 'dist/index.html'
mainJsPath = 'dist/right-pointing-magnifying-glass.js'

let indexHTML = fs.readFileSync(indexHtmlPath, {encoding: 'utf8'})
let mainJS = fs.readFileSync(mainJsPath, {encoding: 'utf8'})

indexHTML = indexHTML.replace(/rel="manifest" href=".*"/, 'rel="manifest" href="manifest.json"')
mainJS = mainJS.replace(/register\(".*"\)/, 'register("./sw.js")')

fs.writeFileSync(indexHtmlPath, indexHTML)
fs.writeFileSync(mainJsPath, mainJS)

console.log('Patched Parcel dist')