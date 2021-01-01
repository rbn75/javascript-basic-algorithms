// Iteration 1: Names and Input
let hacker1 = 'Rubens';

console.log(hacker1)

let hacker2 = 'Tomas';

console.log(hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The hacker 1 has the longest name,\n it has ' + hacker1.length + ' characters')
  } else {
    if (hacker2.length > hacker1.length) {
      console.log('It seems that the hacker 2 \n has the longest name, it has ' + hacker2.length + ' characters.')
    } else {
      console.log('What?! \n You both have the same name?')
  
    }
  }
  


// Iteration 3: Loops

const upperName = hacker1.toUpperCase()

console.log(upperName.split('').join(' '))

// Reverse name
function reverseName(str) {
    return (str === '') ? '' : reverseName(str.substr(1)) + str.charAt(0)
  
  }
  
  reverseName(upperName.split('').join(' '))
  
  console.log(reverseName(hacker1).toLowerCase())

//   Depending on the lexicographic order of the strings

if (hacker2.localeCompare(hacker1) === 1) {
    console.log("Hacker 1 name goes first.")
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, hacker 2 goes first definitely.")
  } else {
    console.log("What?! You both got the same name?")
  }

//   Bonus 1

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit elit.'

function countEt(str, word) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === word) {
      count += 1;
    }
  }
  return count;

}

console.log("The number of words is", countEt(paragraph, " ") + 1);

let wordsOfLorem = paragraph.split(" ");

console.log(`The 'Lorem' word appeared ${countEt(wordsOfLorem, "Lorem")} time(s)`);


// Bonus 2

let phraseToCheck='amor roma'

function palindromes(str) {
  str = str.toLowerCase().replace(/[\W_]/g,'');
  for (let i = 0, len= str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}



console.log(palindromes(phraseToCheck))


// better solution to Bonus 2

function palindromeTwo(str) {
    let front = 0;
    let back = str.length - 1;
    while (back > front) {
      if (str[front].match(/[\W_]/)) {
        front++;
        continue;
      }
    
      if (str[back].match(/[\W_]/)) {
        back--;
        continue;
      }
    
      if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
      front++;
      back--;
    }
    return true;
  }
  
  
  console.log(palindromeTwo('amor'))