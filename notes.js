// Numbers & Strings - Deep Dive...



// 1. How Numbers Work & Behave in JavaScript...

// In JS, every number is a FLOAT - a floating point number which means a number with an integer place - a decimal place.
// For eg - 4, -5, 23 would be stored as 4.0, -5.0, 23.0

// JS doens't know special integer type.
// Numbers are stored as 64 Bit floating point in JS.
// Bits are the things which can be 0 or 1.
// 1 bit is reserved for the positive or negative number sign.

// Other bits are basically there to represent the digit of the number and the dot(decimal) seperator.

// There's also the resources for the better understanding for numbers. They are on next lecture.

// We have max and min number in JS -  we use console for this.
Number.MAX_SAFE_INTEGER;
// This will give the biggest possible number in JS on the console.
// The calculation above this number isn't possible.

// We can see that this number is - power of 2 with 53 times - 1..
// In JS we have a power Of object -
Math.pow(2, 53) - 1;
// We will get the same answer as above.

// We have a min integar.
Number.MIN_SAFE_INTEGER;
// This will have the same number with - sign.

// We also have the Max value.
Number.MAX_VALUE;
// This is a decimal number.
// This is the largest number not the integer.

// These numbers shows how JS numbers are represented internally - how they are stored in 64 bit.

// We wanna be aware of the limits.
// We can't add anything to the largest integer or the number. We can't deduct from the smallest ones.

// JS works with binary system and always converts it to decimal system when it outputs the number.
// Also we rarely work with such large numbers.


---------------------------------------------------------------------------------------------------------


// 2. Floating Point (Im)Precision...

/* 
Resources...

https://en.wikipedia.org/wiki/Floating-point_arithmetic

https://2ality.com/2012/04/number-encoding.html

https://stackoverflow.com/questions/11695618/dealing-with-float-precision-in-javascript

*/

// Sometimes there's a strange behavior regarding numbers.
0.2 + 0.4 // should give 0.6 in the console but it shows a large decimal with 0.60000000001 something like this.
// And if we compare 0.2 + 0.4 === 0.6, it shows false in the console. Why is that in JS?

// It's all coming down to the binary system.
// When we as programmers type 0.2 or 0.4 we do it with decimal system.
// JS internally works with binary system. All the PL do that.

// JS converts the decimal with binary and then converts again to decimal for our understanding.

// To access a method on a number - we wrap it in () - (1).toString() - ToString takes an optional argument in which we can define the base to which we wanna convert that number.
(1).toString(2); // The answer will be 1 as in the binary system - 1 is 1.
// But let's use 5..
(5).toString(2);
// This will show 101 in the console.

// Now we get 0.2 as we divide - 1/5 .
// So if we enter this in the ().
(1/5).toString(2); 
// We will see in the console the binary system converted the calculation.
// Therefore the number we see which is converted to the binary system is the number of 0.2..

// And if we wanna see the binary conversion of 0.2 we don't put it in () as there are . in the number which JS can tell that this is a number.
0.2.toString(2);

// There are certain fractions where there is no perfect solutions in the binary system just as in the decimal system.
// As the 0.2 or 0.4 aren't perfect for Binary system, they can't be solved perfectly in JS.

// Often in JS, JS fixes this for us.
// It shows us the number that makes sense for us.

// As we enter 0.2 in console, JS will show 0.2 and not the imprecise number the binary system produced.
// We can see the imprecision of that number if we use toFixed(), in which we enter the decimal places we wanna see..
0.2.toFixed(20); // We entered 20 to see 20 decimal places of 0.2.
// We can see the number in the end is imprecise but JS shows it such that we can understand better by doing some smart rounding.

// For most calculation the automatic rounding works fine.
// To avoid the longer decimal number to be displayed to the user we can use the toFixed method and set the number to be rounded with the digits we set in the argument.
(0.2 + 0.4).toFixed(2);
// This will show us the perfect answer - 0.60..

// We can define any number of decimal places in the toFixed(). JS will round with it.

// There are situation where we need perfect precision.
// For eg user bought something of 20.2$ and in the server side or with the code we wrote - it will be displayed with 20.2.toFixed(20) which will show the imprecise amount.
// Now for big sellers like Amazon this will be a problem. No doubt the payment server which we send this to rounds it automatically but this problem is inappropriate.

// One common solution is simply multiply our number with 100 to convert it into interger.
// And as we know there are no integer in JS and all floating point number - the number itself will be the floating point number which binary system could understand better.
// There are certain JS packages and libraries we can add to our app which provides tools to fix such imprecision.

// To outputting to the user we can use toFixed() but where precision matters we should be aware of the workarounds.


----------------------------------------------------------------------------------------------------------


// 3. The BigInt Type....

// There is alternative to normal number we work with.
// The BigInt or big integer is a primitive value whose goal is to allow us to represent numbers that are bigger than the max safe interger value we saw earlier.

// We create a bigInt by adding n after the number.
// That number won't be managed as 64 bit floating point number but instead as a string.

// It is also helpful with -ve numbers.

// But there are no decimal places in here.

// We can perform typical calculations with the bigInt numbers with n at the end.
// When we divide bigInt numbers the decimal places would not be there as we learned. So the numbers we divide which has the answer of decimal places won't show it here for eg: 5n/2n = 2n and not 2.5n.

// We can't mix bigInt with other numbers without n.

// We can convert a big integer number to a normal number with parseInt(12345n) - 4 so to say = 12341 will be the answer.
// Or we can convert the normal number to bigInt by - 
BigInt(4);


---------------------------------------------------------------------------------------------------------


// 4. The Global "Number" and "Math" Objects...

Number // & 
Math // global objects. 

// We see the features of these.

Infinity
-Infinity // These values available on the Global object.
// These are the values we will get if we divide something by 0 cause it basically approximates the result.

// We can use isFinite() to find out the number is finite or infinite. 
// This value can be used globally as well as with Number.
Number.isFinite(1); // Will give TRUE as answer in console.

// We also have isNaN - globally and Number. 
// ParseInt, ParseFloat - globally & Number.

// For Math object....
// We get various methods and properties or consts that help us with Mathematical operations.

Math.E; // It's the value for PI...
Math.sqrt // For working with square root.
Math.abs(-4); // Will give an absolute number = 4.
Math.random() // We know it.

// We must look at MDN or scroll through the properties...


----------------------------------------------------------------------------------------------------------


// 5. Example: Generate Random Number Between Min/ Max...

// Demo with Math object.
Math.random() // Produces number between 0 and 1.
// But what if we want number between 10 and 20.
// We build a function that allows us to set upper and lower boundary to math random.

function randomInBetween(min, max){
  return Math.random() + min;
}
// We return math random and to respect the minimum boundary we add the min number that we will set to the math random number created.
// If we call a number for min = 4 then we will get the min random of 4 onwards.

// For our max number...
// We will go with - 
Math.random() * (max - min) + min;

// We do this cause if we multiply the max with the random and add min, the number will go above the max and min value which we don't want cause we set the max and min value.
// So if we substract the min value from max then the addition of the total of math.random * (max-min) would certainly be lower than the max value and then if we add the min - it would not be lower than the min value...
function randomInBetween(min, max){
  return Math.random() * (max - min) + min;
}

// Now for random() - as it would be in between 0 and 1, we won't ever get 1.
// It would always be 0.99999999.

// And let's say the max and min number are 10 and 5...
// So the biggest number we can get here is max-min = 5.
// 0.99999 * 5 is almost 5.
// Almost 5 + 5 is almost 10 but not 10.
// And we want both the min and max number to be yielded.

// To get the maximum we can add 1 to the max - min.
// Therefore the biggest number we can reach is 10.999999 as 5+1 = 6, 6*0.99999 + 5 = 10.999999.
// But we wanna stop at 10 and not 10.999999

// Therefore we will leverage math.random with another function - the Floor function.
// We wrap the entire random function with floor function...
function randomInBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Now if we have 10.99999999 as a result, Floor will cut all the decimal places and the answer will be => 10....
// So now we have a number which yields 5 to 10 random numbers.

// If we google JS random numbers function we will get something to play with.


------------------------------------------------------------------------------------------------------


// 6. Exploring String Methods...

// Strings can be created in 3 ways = '', "" & ``
// On any strings we will get many methods and properties.

'hello'.length // Property to find out how many characters are in the string.
'hello'.toUpperCase() // Method to convert lowercase to uppercase.
'hello'.startsWith('he') // To check if the string starts with a certain sequence - this will yield true in console.

// MDN is great place to learn all about it.

// The interesting part is what we can do with Template Literals.


----------------------------------------------------------------------------------------------------


// 7. Tagged Templates...

// We have the simple example for template literal - 
const name = 'Max';
`My name is ${name}`;
// Any expression which yields a value can be output as a string.
// We can't put an if check in there, it should only be an expression.

// Now we can create Tagged Template...
// It's a function which works together with a template literal.

// We will create a function which will hold 3 args.
// We will understand a bit later about these 3 args.
function productDescription(strings, productName, productPrice){
  return 'This is a product!'
}

// Now we will create a new const.
const productOutput = productDescription``;

// Yes, we called the function with `` template literals.
// BTS, JS will call this function and kinda pass in the Template Literal but not just as a single string but will split it up into 3 arguments.
// Then it will send it into the function.
// Amount of args depends of our template literal.

const prodName = 'JS Course';
const prodPrice = 29.99;
// We added the name and price of the product. 
// Now we add them into the template literal function..

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`
console.log(productOutput)

// With console, we see This is a product!

// Now as the function is stored in the const we will check the function for all the args.
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice)
  return "This is a product!";
}

// In the console we see the strings as an array with the string from `` as in the elements in the array make up all the text in the function tagged template literal without the dynamic parts.
// For productName we see JS course and for price we see 29.99

// JS calls that function and the 1st arg of that function always is an Array of string segments taken from template literals.
// Our dynamic segments are passed in as additional args in the order they appear in the template literal.


// But where can this be useful?
// Tagged template can be useful where we have a scenario in which we conviently wanna create some output, could be a string but could be something totally different based on some string input.

// For eg: we could be using it to take some input text and convert this to different text where we replace some value.
// For eg: we use if check for productPrice.
// We use it inside of the function.
let priceCategory = 'cheap';
  if(productPrice > 20){
    priceCategory = 'fairly priced';
  }

// Now we change the return inside the function to a more dynamic structure.
// We will inject the first string segment - the array - which we have defined in the global scope.
// Then we will inject the product name and then the 2nd string segment, and then we will inject the priceCategory instead of the product price cause we made it dynamic...
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'cheap';
  if(productPrice > 20){
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
}

// Here we generate a fully dynamic string where we swap a value with some included logic.

// If we had some complex logic for encoding a numeric price into a category - then we would be better off with the tagged template function rather than using ternary expression. 

// We can also return an object instead of the string.
return {
  name: productName, price: productPrice
}
// This will show an object in the console and not error cause we're not forced to return a string in a tagged template....


------------------------------------------------------------------------------------------------------


// 8. Introducing Regular Expressions ("RegEx")...

// These help us work with strings.

// For eg: we would have the user input for email address...

const userInput = 'test@test.com';
// But let's say there's a mistake and the email is missing @..
const userInput = 'testtest.com'
// We wanna verify what user provided to us in our code.
// Whether it is an email address or not.

// We can use a string method - includes('@');
userInput.includes('@') // This would show us False.

// The valid email address isn't determined with just @ symbol but the domain in the end, or . or something...
// Now if we check of the . symbol - the email name might also be te.st@test - so the includes() won't recognise it's in the wrong place.

// That's where RegEx helps us....
// They helps us search the patterns in strings.

// We create RegEx with one of 2 ways...
// We can create with a new RegEx() constructor in which we can pass the string which we wanna look for.

// Or we use a literal notation - // - in between the double slashes we can define a pattern - a simple email validation pattern should look like...
const regex = /^\S+@\S+\.\S+$/
// Now with that we can use this - as it is an object and call a method on this object. 

regex.test(userInput);
// To the test method we pass a string to validate if it meets the above pattern and there we could pass in the user input.
// If the user input is of error - there we would get false.
// On the other hand if we test a valid email address - it would give true.
regex.test('test@test.com');

// The expression above states this -
/* 

^ - means starts from the left.
S - any kind of words.
@ - the @ symbol.
S - any kind of words.
. - the . notation.
S - any kind of words.
$ - we end this string with it.

*/ 

// The string from the regex.test('test@test.com') fits the pattern we stated above.
// It's a syntax of it's own.
// We have extra resources in the next lecture...


--------------------------------------------------------------------------------------------------------


// 9. More on Regular Expression...

YouTube = // https://www.youtube.com/watch?v=0LKdKixl5Ug&list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE

MDN Doc = // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// We can create a new regular expression by new RegEx() and pass the pattern as a string.
// Or we can use the literal notation with //.
// We find a pattern in here.
// A simple pattern could be /hello/.

const regex = /hello/;
// Just a couple of normal characters.
// If we test any string with hello - this RegEx will yield true...
regex.test('hello there, Milan'); // true
// So if hello is part of the string - it will yield true.
// Because we are checking if the combination of letters - hello - is part of the string we're validating.
regex.test('Hello'); //Yields False...

// RegEx are case sensitive..
// Now we can make the case sensitive matter better.
const regex1 = /(h|H)ello/
// The (h|H) means the string 'ello' can start with any of the cases. 
// | this pipe symbols is used in there.
regex1.test('hi - hello...') // Yields true.
regex1.test('hi - Hello...') // Yields true.
regex1.test('hi - ello') // Yields false.

// There also are other modifiers.
// We can also work with wildcards..

const regex = /.ello/
// This says we don't really care about the starting character but we wanna have ello in the string.
// . notation is used for this...
// But if we check just ello - it will yield false.

regex.test('hello') ; // Yield true.
regex.test('fellow') ; // Yield true.
regex.test('Hello') ; // Yield true.
regex.test('ello') ; // Yield false.
regex.test('carmello') ; // Yield true.
// We just need the starting character for this to yield true..

// We can also escape in RegEx.
const emailRegex = /^\S+@\S+\./ 
// We used this \ before the . notation - this is how we say we are not looking for any character but the . character cause above we learned . notation is used as a special meaning -  a wild card - in the RegEx.
// We can escape some character in here.
// For eg: \S means we are not looking for the word S but any word in whole cause it have a special meaning.

// RegEx are complex if we write on our own - look for the needed patterns with google.
// We can look up in MDN or stack overflow.
// If we wanna validate the url we can find it on google too.

// We have exec() method too.
regex.exec('jello') // the regex = /.ello/
// Then we get an array with some info about the pattern and where it matched the string.
regex.exec('hi! jello') 
// This will show in the array where our pattern started - as in index number - here it's index: 4.
// So we got exec() to find where in our string the pattern is matched.

// We can also do it the other way around...
'hi jello'.match(regex);
// We passed our regex cosnt with RegEx pattern in the match method and we will get the same output.


---------------------------------------------------------------------------------------------------------


More on Numbers in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Tagged templates (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates