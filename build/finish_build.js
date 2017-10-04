var shell = require('shelljs')

shell.mv('-n', 'build/main.map', 'dist/index.map')
shell.mv('-n', 'build/main.js', 'dist/index.js')
shell.mv('-n', '.htaccess', 'dist/')
