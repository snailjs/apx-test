'use strict';
var apx = require('apx')

apx.once('ready',function(){
  console.log('APX is ready!')
})

//pass options and configure
apx.start({
  sysLogLevel: 4,
  cwd: __dirname,
  config: ['config.js'],
  initializers: [
    'apx-kue',
    'apx-mongoose',
    'apx-winston'
  ],
  middleware: ['apx-session'],
  translators: ['apx-express-socket.io'],
  tasks: 'tasks/*.js',
  express: {
    routes: [
      {get: {path: '/foo', file: 'actions/foo.js'}},
      {get: {path: '/raw', file: 'actions/raw.js'}}
    ]
  },
  'socket-io': {
    routes: [
      {foo: 'actions/foo.js'},
      {raw: 'actions/raw.js'}
    ]
  }
})