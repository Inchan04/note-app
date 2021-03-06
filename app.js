const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./note.js')

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
         notes.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler() {
      notes.listNotes()
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {       
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)