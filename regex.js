// A program that checks if a user enters a valid email address
//   validEmail('name@example.com') -> true/false

// function validEmail(email) {
//     if(typeof email === 'number'){
//         return `email can not be a number`
//     }else if((email.includes("@")) || (email.includes(".com"))  || (email.includes("gmail")) ){
//         return `${email} is a valid email.`
//     }else{
//         return `${email} is not a valid email.`
//     }
// }

// console.log(validEmail('name'))
// console.log(validEmail(8))
// console.log(validEmail('name@example.com'))
 


// Regex- it is a way to match strings based on a pattern. It is a powerful tool for searching and manipulating strings. REGEX stands for regular expression. Regex is case sensitive... to make it case insensitive we use the "i" flag
// What's a flag? - A flag is an optional parameter appended to a search patttern to modify how the matching text is interpreted
// The most common flags are "i" and "g" flags..."i" stands for case-insensitive...it's used to match patterns regardless of capitalization..."g" stands for global...it finds all matches in the string rather than stopping on the first one
// "test" method is used to return true or false of the matching parameter while "match" is used to return the exact data in the string parameter


// "i" flag
// const sentence = "Amina Is awesome"
// console.log(/is/.test(sentence))
// console.log(/is/i.test(sentence))

// "g" flag
// const sentence = "I own a cat and I catalogue movies cat for a living"
// console.log(sentence.match(/cat/))
// console.log(sentence.match(/cat/g))

// Symbols in Regex- Symbols are special method characters that act as commands rather than literal texts

// caret symbol "^" - means starting of the string
const uncleBen = "With great power, comes great responsibility"
// console.log(/^power/.test(uncleBen))
// console.log(/^with/.test(uncleBen))
// console.log(/^with/i.test(uncleBen))

// dollar sign symbol "$" -means ending of the string
const lordSedious =  "the senate president is at the senate building, and i am the senate"
// console.log(/senate$/.test(lordSedious))

const ball = "hello"
// console.log(/^hello$/.test(ball))

// character set - matches exactly one character in a list of range defined inside square bracket[]
// const sentence = "jlt"
// // console.log(/[a]/.test(sentence))
// // console.log(/[abc]/.test(sentence))
// // console.log(/[i]/.test(sentence))
// // console.log(/[l]/.test(sentence))
// // console.log(/[L]/.test(sentence))
// // console.log(/[L]/i.test(sentence))
// // console.log(/[a-z]/.test(sentence))
// // console.log(/[A-Z]/.test(sentence))
// // console.log(/[a-z]/.test(sentence))
// console.log(/[a-i][A-I]/.test(sentence))

const sentence = "t000"
// console.log(/[0-9]/.test(sentence))

// Quantifiers - it tells regex "how many"

// plus symbol "+" - it asks for one or more
// const digits = "I bought the pen for N200 and sold it N250, I gained a profit of N50"
// console.log(digits.match(/[0-9]+/g))

// star symbol "*" - it does the same thing as the plus symbol other than making a string optional
const bond = "agentENG"
// console.log(/agentENG[0-9]*/.test(bond))

// parenthesis "()" is grouping
const apples = "pletle"
// console.log(/(ap)*le/.test(apples))

// question mark "?" - asks zero or one of the thing before it i.e it makes the character optional
const colour = "colotr"
// console.log(/colou?r/.test(colour))

// shortcut characters - are ways of writing text patterns without writing every possible character ; \d, \w, \s
// /d is [0-9]
// /w is letters, numbers and underscore
// /s is all types of spaces ; tab, space, line break
// \D is anything that is not a digit i.e letters, punctations and spaces
// \W is anything that is not a a word i.e @, !, # e.t.c and spaces
// \S is anything that is not a a space i.e every visible text

// \d  and \D
const digit = "26379273634829"
// console.log(/\d/.test(digit))
console.log(digit.match(/\d{5}/)[0])

// const specialCharacters = "&"
// console.log(/\D/.test(digit))

// const digit = "@"
// // console.log(/\w/.test(digit))
// console.log(/\W/.test(digit))


// const black = "         amina           "
// // console.log(/\s/.test(black))
// console.log(/\S/.test(black))

