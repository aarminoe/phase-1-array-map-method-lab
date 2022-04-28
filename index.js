const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function titleCased() {
  return tutorials.map(function (phrase) {
    let word = phrase.split(' ')
    return (word.map(function (x) {
      return x.charAt(0).toUpperCase() + x.slice(1)
    })).join([' '])
    
  })
}




/*
function upper(phrase) {
  return phrase.map(function (word) {
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
}

*/