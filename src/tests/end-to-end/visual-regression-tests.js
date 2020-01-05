const searchBox = '.c-searchbox'
const options = { threshold: 0.1 }

module.exports = {
  after: browser => {
    browser.end();
  },

  'Initial render': function (browser) {
    browser
      .url('https://master.d1soewjcun776i.amplifyapp.com/')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline(searchBox, 'Search Widget', options)
  },

  'Enter a single character in the location search field': function (browser) {
    browser
      .setValue('#pickupLocation', 'A')
      .assert.screenshotIdenticalToBaseline(searchBox, 'Single Character', options)
  },

  'Enter a multiple characters in the location search field': function (browser) {
    browser
      .setValue('#pickupLocation', 'thens')
      .waitForElementVisible('.c-search-results')
      .assert.screenshotIdenticalToBaseline(searchBox, 'Multiple Characters', options)
  }
};