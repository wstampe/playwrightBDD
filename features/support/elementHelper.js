let {pageElements} = require('./pageElements');
let {dataStore} = require('./dataStore');

let elementHelper = {

    getElementCSS: function getElementCSS(currentElement) {

        let elementCSS = pageElements.getPageElements(dataStore.getCurrentPage(), currentElement);
        // console.log('elementCSS: ' + currentElement + ' ==> ' + elementCSS)
        return elementCSS
    },
};
module.exports = {elementHelper};