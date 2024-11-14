'use strict'

const { test } = require('node:test')
const build = require('./index.js')

test('requests the "/" route', async t => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  t.equal(response.statusCode, 200, 'returns a status code of 200')
})