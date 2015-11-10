var del = require('del');
var args = require('yargs')
  .usage('Usage: $0 -d [directory to purge] -i [interval in milliseconds]')
  .demand(['d', 'i'])
  .argv;

setInterval(function() {
  del(args.d)
    .then(function() {
      console.log('You just purged Morty!');
    });
}, args.i);

console.log(args.d);