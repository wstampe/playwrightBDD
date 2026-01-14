const {Given} = require('@cucumber/cucumber');
//const scope = require('../support/scope')
const { isVisible } = require('@playwright/test');
const {setTimeout} = require('node:timers/promises')
const {dataStore} = require("../support/dataStore");
const {elementHelper} = require("../support/elementHelper");

const {expect} = require('chai')
const {pageElements} = require("../support/pageElements");

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I will be on the {string} page', async function (page) {
    dataStore.setCurrentPage(page)
    let expectedURL = pageElements.getApplicationPage('page', page)
    // console.log('\nexpectedURL: ' + expectedURL)
    let actualURL = global.page.url()
    // console.log('actualURL: ' + actualURL)
    expect(actualURL).to.equal(expectedURL)
    await setTimeout(2000)
    return 0;
});

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect that the element {string} matches the text {string}', {timeout: 20000}, async function (currentElement, text) {
    // console.log("check text currentElement(" + currentElement + ") is " + strTxt)
    let strCSS = elementHelper.getElementCSS(currentElement)
    // console.log("strCSS: " + strCSS)
    expect(await global.page.locator(strCSS).isVisible()).to.equal(true)
    const strActualText = await global.page.locator(strCSS).textContent()
    // console.log('strActualText: ====' + strActualText)
    expect(text).to.equal(strActualText)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect the inputfield {string} matches the text {string}', {timeout: 20000}, async function (selectorInput, text) {
    const selectorToCheck = elementHelper.getElementCSS(selectorInput)
    // console.log('checking: \"' + selectorInput + '\" (' + selectorToCheck + ') matches the text ' + text + '\"')

    expect(await global.page.locator(selectorToCheck).isVisible()).to.equal(true)
    const strActualText = await global.page.locator(selectorToCheck).inputValue()
    // console.log('strActualText: ====' + strActualText)
    expect(text).to.equal(strActualText)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect the following indexed elements match the following text', async function (dataTable) {
    for (let i = 0; i < dataTable.hashes().length; i++) {
        const index = dataTable.hashes()[i].indexNo
        const selectorValue = elementHelper.getElementCSS(dataTable.hashes()[i].elementname)
        // console.log(' - - [' + index + '] ' + dataTable.hashes()[i].elementname  + ' (' + selectorValue + ') : = ' + dataTable.hashes()[i].expectedText)
        let elemTextActual = await page.locator(selectorValue).locator('nth=' + index).textContent()
        const elemTextExpected = dataTable.hashes()[i].expectedText
        // console.log(' - - elemTextActual= [' + elemTextActual + ']')
        // console.log(' - - elemTextExpected= [' + elemTextExpected + ']')
        expect(elemTextActual).to.be.equal(elemTextExpected)
    }
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect that the {string} element {string} matches the text {string}', async function (strIndex, selectorInput, expText) {
    let index = parseInt(strIndex)
    const elem = elementHelper.getElementCSS(selectorInput)
    //  console.log(' Checking - - [' + strIndex + '] ' + selectorInput  + ' (' + elem + ') will equal ' + expText)
    //    await scope.page.waitForSelector(elem, {visible: true})
    index--
    let elemTextActual = await page.locator(elem).locator('nth=' + index).textContent()
    // console.log('expectedtext:' + expectedtext)
    // console.log('expectedtext[' + index + ']:' + expectedtext[index]  + ' - actualText:' + actualText)
    expect(elemTextActual).to.be.equal(expText)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect that element {string} does not exist', { timeout: 20000}, async function (selectorInput) {
    const elem = elementHelper.getElementCSS(selectorInput)
    expect(await global.page.locator(elem).isVisible()).to.equal(false)
})

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Given('I expect that element {string} exists', { timeout: 20000}, async function (selectorInput) {
    const elem = elementHelper.getElementCSS(selectorInput)
    expect(await global.page.locator(elem).isVisible()).to.equal(true)
})
