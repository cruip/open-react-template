const client = require('contentful').createClient({
    space: 'website',
    accessToken: 'caLvSYk50OhCwidBF54DVd-UAy-p-pcBQlHv_ULzcQ0'
  })

const getPages = _ =>
    client
    .getEntries({
        content_type: 'page'
    })
    .then(response => response.items)

export {getPages}