const { Before, After, AfterAll, BeforeStep, AfterStep } = require('@cucumber/cucumber')
const page = require('@playwright/test')
Before(async () => {
    let browser = await page.chromium.launch({ headless: true })
    global.browser = browser
    const context = await browser.newContext()
    global.page = await context.newPage()
})
Before((scenario) => {
    console.log('\x1b[32m' + '\n -.- ScenarioName: ' + scenario.pickle.name + ' -.-.' + '\x1b[0m')
})

After(async function (scenario) {
    // Close page and browser session after each scenario
    await global.page.close()
//    await global.context.close()
    await global.browser.close()
})

//let browser = await page.firefox.launch({ headless: false })
//let browser = await page.webkit.launch({ headless: false })
// ----------------------------------------------------------------------------------------
//BeforeStep(async (event) => {
//     console.log('\x1b[36m   - ' + event.pickleStep.text + '\x1b[0m');
//})
//AfterStep(async (event) => {
////    console.log('\x1b[33m   - ' + event.pickleStep.text + '\t\t  - [' + event.result.duration.seconds + 's] -\x1b[36m[' + event.result.status + ']\x1b[0m');
//    console.log('- \x1b[36m[' + event.result.status + ']\x1b[33m - ' + event.pickleStep.text + '\t\t  - [' + event.result.duration.seconds + 's] \x1b[0m');
//})
// ----------------------------------------------------------------------------------------
//AfterAll(async () => {
//  await global.browser.close()
//})
