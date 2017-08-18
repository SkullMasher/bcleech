let Nightmare = require('nightmare')
let Sequelize = require('sequelize')
let nightmare = Nightmare({ show: true })

const sequelize = new Sequelize('random_pantheon', 'skullmasher', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const Band = sequelize.define('bands', {
  name: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  },
  order: {
    type: Sequelize.INTEGER
  }
})

const Tag = sequelize.define('tags', {
  name: {
    type: Sequelize.STRING
  }
})

Tag.findById(1).then((res) => {
  console.log(res.name)
})

Tag.findAll().then((tags) => {
  tags.forEach((tag) => {
    console.log(tag.name)
  })
})

// Band.findOne({where: {'name': 'David Maxim Micic'}}).then((res) => {
//   console.log(res.name)
// })
//
// nightmare
//   .goto(testURL)
//   .wait('#name-section')
//   .evaluate(() => {
//     albumName = document.querySelector('#name-section .trackTitle').innerText
//     bandName = document.querySelector('#name-section a').innerText
//     bandLink = document.querySelector('#name-section a').href
//     albumTag = document.querySelector('.tralbum-tags').innerText
//     return [albumName, bandName, bandLink, albumTag]
//   })
//   .end()
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.error('Search failed:', error)
//   })

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
