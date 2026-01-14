const {Given} = require('@cucumber/cucumber');
const {setTimeout} = require('node:timers/promises')
const {dataStore} = require("../support/dataStore");
const {elementHelper} = require("../support/elementHelper");

const {expect} = require('chai')
const {pageElements} = require("../support/pageElements");

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I open up the page {string}', async function (currentPage) {
    // console.log("Check currentPage(" + currentPage + ") is visible.")
    dataStore.setCurrentPage(currentPage);

    let expectedURL = pageElements.getApplicationPage('page', currentPage)
    // console.log("strCSS: " + strCSS)
    await page.goto(expectedURL);
    return 0

    // console.log("strURL:" + strURL)
    await global.page.goto(strURL);
    return 0;
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I open up the URL {string}', async function (strURL) {
    // console.log("strURL:" + strURL)
    await global.page.goto(strURL);
    return 0;
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I click on the element {string}', { timeout: 20000 }, async function (selectorInput) {
    const selectorToClick = elementHelper.getElementCSS(selectorInput)
    // console.log('clicking on: \"' + selectorInput + '\" (' + selectorToClick + ')')
    await global.page.locator(selectorToClick).click();
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I wait for {int} ms', async function (nInt) {
    await global.page.waitForTimeout(nInt);
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I focus and click on the element {string}', { timeout: 20000 }, async function (selectorInput) {
    const selectorToClick = elementHelper.getElementCSS(selectorInput)
    // console.log('clicking and focusing on: \"' + selectorInput + '\" (' + selectorToClick + ')')
    await global.page.locator(selectorToClick).focus();
    await global.page.locator(selectorToClick).click();
    await setTimeout(2000);
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I enter the text {string} with a {int} ms delay', { timeout: 20000 }, async function (value, nInt) {
    await global.page.keyboard.type(value)
    await setTimeout(nInt)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I type {string}', { timeout: 20000 }, async function (value) {
    await global.page.keyboard.type(value)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I press the {string} key', { timeout: 20000 }, async function (value) {
    await global.page.keyboard.press(value)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I set {string} to the inputfield {string}', { timeout: 20000 }, async function (value, inputFieldDescription) {
    const selectorForInputField = elementHelper.getElementCSS(inputFieldDescription)
    // console.log('typing: \"' + value + '\" into \"' + inputFieldDescription + '(' + selectorForInputField + ") \"")
    expect(await global.page.locator(selectorForInputField).isVisible()).to.equal(true)
    await global.page.locator(selectorForInputField).focus();
    await global.page.locator(selectorForInputField).click();

    await global.page.keyboard.type(value)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I click on the {string} {string} element', async function (strIndex, selectorInput) {
    let index = parseInt(strIndex)
    index--
    const selectorToClick = elementHelper.getElementCSS(selectorInput)
    await global.page.locator(selectorToClick).locator('nth=' + index).click();

})
