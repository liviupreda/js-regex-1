// const user = { email: 'jdoe@gmail.com' };

// try {
//   // Produce a ReferenceError
//   // myFunc();
//   // Produce a TypeError
//   // null.myFunc();
//   // Produce SyntaxError
//   // eval('Hello World');
//   // Produce URIError (Uniform Resource Identifier)
//   // decodeURIComponent('%');

//   if (!user.name) {
//     // throw 'User has no name';
//     throw new SyntaxError('User has no name');
//   }
// } catch (e) {
//   // console.log(`${e.name}: NULL`);
//   console.log(e);
//   // console.log(e.message);
//   // console.log(e.name);
//   // console.log(e instanceof ReferenceError);
//   // console.log(e instanceof TypeError);
// } finally {
//   console.log('Finally runs regardless of result...');
// }

// console.log('Program continues...');

// REGEX
// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// // re = /hello/g; // g = global search

// // console.log(re);
// // console.log(re.source);

// // exec() - Return result in an array if match or return null if no match
// // const result = re.exec('oh hello world');

// // console.log(result);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);

// // test() - Returns true or false
// // const result = re.test('Hello');
// // console.log(result);

// // match() - Return result array or null
// // const str = 'Hello There';
// // const result = str.match(re);
// // console.log(result);

// // search() - return index of the first match else returns -1
// // const str = 'Helasdas There';
// // const result = str.search(re);
// // console.log(result);

// // replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// METACHARACTER SYMBOLS
let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metachars
re = /^h/i; // caret char - Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Start & end
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or MORE times
re = /gre?a?y/i; // gray / grey ; e?a? is optional
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; // [ae] one of a or e
re = /[GF]ray/;
re = /[^GF]ray/; // Match anything EXCEPT G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Exactly {amount} times 'l'
re = /Hel{2,4}$/i;
re = /Hel{2,}o/i; // Occur at least {m} times

// Parantheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more word characters - alphanumeric or _
re = /\W/; // NOT word characters
re = /^\d{4}$/; // Match any digit + start + end + occuring 4 times
re = /\D/; // Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Non-whitespace
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y

// String to match
const str = 'dasdasxysdada';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
