var shell = require('shelljs')

shell.mv('-f', 'build/main.map', 'dist/index.map')
shell.mv('-f', 'build/main.js', 'dist/index.js')
shell.cp('-f', '.htaccess', 'dist/')
