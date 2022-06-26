const path = require( 'path' );
const fs = require( 'fs' );
const greetingPath = path.resolve( __dirname, 'greeting.txt' );
module.exports.readGreeting = function() {
  var greeting = 'READ FAILURE';
  try {
    greeting = fs.readFileSync( greetingPath, 'utf8' );
  } catch( error ) {
    console.error( `Fuck: ${error}` );
  }
  return greeting;
}
