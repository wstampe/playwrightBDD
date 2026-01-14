let dataStore = {
    stored_data: new Array,
    stored_current_page: '',
    setData: function (data) {
        stored_data.push(data)
    },

    getData: function () {
        return stored_data[stored_data.length - 1]
    },

    getStoredDataArray: function () {
        return stored_data
    },

    deleteData: function () {
        stored_data = []
    },

    setCurrentPage: function (currentPage) {
        // common.logFunctionLines(arguments)
        stored_current_page = currentPage
    },

    getCurrentPage: function () {
        // console.log('stored_current_page: ' + stored_current_page)
        return stored_current_page
    }

}

module.exports = {dataStore}
