#!/usr/bin/env node
'use strict'
const fs = require('fs-extra')
const path = require('path')

const tmplDir = path.join(__dirname, '../')
const wd = process.cwd()
const files = fs.readdirSync(tmplDir)
const dirname = wd.split('/').pop()

console.log('copying template...')
files.filter((file) => file.endsWith('.js'))
.forEach((file) => {
  fs.copySync(
    path.join(tmplDir, file),
    path.join(wd, file)
  )
})

fs.copySync(
  path.join(tmplDir, 'github'),
  path.join(wd, 'github')
)

console.log('done!')
