class BasePage {
  async click(element) {
    await element.waitForDisplayed()
    await element.click()
  }

  async type(element, text) {
    await element.waitForDisplayed()
    await element.setValue(text)
  }
}

module.exports = BasePage