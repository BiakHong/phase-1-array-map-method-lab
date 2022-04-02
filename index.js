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
  const updatedTutotial = tutorials.map(tutorialSplit => {
     const titleCaseArr = tutorialSplit.split(" ").map(caseWord => {
        return caseWord.charAt(0).toUpperCase() + caseWord.slice(1)
      }).join(" ");
      return titleCaseArr;
     });
     return updatedTutotial;
    };


// const upperCaseIt = function(str){
// const arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }
// const str2 = arr.join(" ");
// return str2;
// }
// const mainFunction = tutorials.map( done => {
//   return Object.assign(upperCaseIt(done))})

// console.log(mainFunction)