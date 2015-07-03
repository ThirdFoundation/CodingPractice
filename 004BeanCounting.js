/* Write a function that takes a string and a letter as arguments, and returns
a number indicating how many times the letter was present in the string. EJS
Ch.3 exercises */

function countLetter(text, letter) {
  function identity(val) {
    return val === letter;
  }
  return text.split('').filter(identity).length;
}