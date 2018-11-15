//Made by Ceej Walker
// This package is used as a simple front end interface to expedite using SheetJS fork xlsx-style
// To make sure that this package stays compatible with non-node packages, it will be required
// that both this package sheetjs be included

const excel = (function() {

  //Dependencies
  const xl = require("./node_modules/xlsx-style/dist/xlsx.full.min.js");

  function read() {
    console.log("Success!")
  }

  return {
    read: read
  }

})()

console.log("Hello, world!")