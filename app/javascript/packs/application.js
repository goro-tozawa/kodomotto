// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// require("../script")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
document.addEventListener('DOMContentLoaded', (event) => {
  const targetElement = document.querySelectorAll(".animationTarget");
  document.getElementById("animation");
  document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  })
})
