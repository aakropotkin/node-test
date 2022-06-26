#! /usr/bin/env node
const fs = require( 'fs' );
const greeting = require( 'a/greeting.json' );
try {
  fs.writeFileSync( 'greeting.txt', greeting );
} catch( error ) {
  console.log( `Fuck: ${error}` );
}
