// return: undefined
// Üres blokk, implicit return
(firstName => {})()

// return: 'Hello John'
// Nincs blokk, implicit return
(firstName => 'Hello ' + firstName)('John')

// return: undefined
// explicit return kell a blokkon belül, de Hello hiányzik
(firstName => {'Hello ' + firstName})('John')

// return: 'Hello John'
// explicit return a blokkon belül
(firstName => {return 'Hello ' + firstName})('John')

// return: undefined
// a block egy label-t tartalmaz. Nincs explicit return.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
(firstName => {name: firstName})('John')

// return: {name: 'John'}
// implicit return a ( ) belül, ami egy objektum
(firstName => ({name: firstName}))('John')

// return: name: 'John'
// explicit return a blokkon belül, objektum
(firstName => {return {name: firstName}})('John')