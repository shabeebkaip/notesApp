const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

// add, remove , read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function (argv) {
    console.log('adding a new note')
  }
})
// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('removing a note')
  }
})
// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  }
})
// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('reading a note')
  }
})
yargs.parse()

// console.log(yargs.argv)
