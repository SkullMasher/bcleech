let Nightmare = require('nightmare')
let nightmare = Nightmare({ show: true })

const testURL = 'https://davidmaximmicic.bandcamp.com'
let albumName = ''
let albumLink = ''
let bandName = ''
let bandLink = ''
let albumTag = ''
// Some ids and class on the site
const searchField = 'search-field'

nightmare
  .goto(testURL)
  .wait('#name-section')
  .evaluate(() => {
    albumName = document.querySelector('#name-section .trackTitle').innerText
    bandName = document.querySelector('#name-section a').innerText
    bandLink = document.querySelector('#name-section a').href
    albumTag = document.querySelector('.tralbum-tags').innerText
    return [albumName, bandName, bandLink, albumTag]
  })
  .end()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error('Search failed:', error)
  })

// nightmare
//   .goto(testURL)
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
//   .evaluate(function () {
//     return document.querySelector('#zero_click_wrapper .c-info__title a').href
//   })
//   .end()
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error)
//   })
