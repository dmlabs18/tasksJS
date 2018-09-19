//TASK#3
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
	let res = names.map(function(item){return item.name})
	res.splice(names.length-2, 2, res.slice(names.length-2).join(' & '))
	return res.join(', ')
}
// Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
// returns ''
///**************************///

//TASK#4
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Note that the Java version expects a return value of null for an empty string or null.

String.prototype.toJadenCase = function () {
	if (!this) return this;
	return this.split(' ').map((item)=> item[0].toUpperCase() + item.slice(1)).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()
///**************************///

//TASK#5
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// ##Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
	let arrNum = numbers.split(' ').map((item)=>item%2)
	let sumElem = arrNum.reduce((a, b) => a + b, 0)
	let res
	if(sumElem === 1) {
		arrNum.forEach(function (item,index) {
			if(item === 1) {
				return res = index+1
			}
		})
	} else {
		arrNum.forEach(function (item,index) {
			if(item === 0) {
				return res = index+1
			}
		})
	}
	return res
}
///**************************///

//TASK#6
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
	var re = /[aeiou]/gi;
	str = str.replace(re, '');
	return str;
}
disemvowel("This website is for losers LOL!") // => "Ths wbst s fr lsrs LL!"
///**************************///

//TASK#7
// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid,
// and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
	let pos = parens.indexOf('()')
	if(pos !== -1 && parens.length !== 0) {
		parens = parens.substring(0,(pos = 1 ? pos : pos - 1)) + parens.substring(pos+2, parens.length);
		return validParentheses(parens)
	} else if (pos === -1 && parens.length !== 0) return false
	if(parens.length === 0) return true
}
///**************************///

//TASK#8
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	let hrs = +(seconds / 3600 + '').split('.')[0]
	let min = +(seconds % 3600 / 60 + '').split('.')[0]
	let sec = seconds % 60
	hrs >= 10 ? hrs : hrs = "0"+ hrs
	min >= 10 ? min : min = "0"+ min
	sec >= 10 ? sec : sec = "0"+ sec
	return `${hrs}:${min}:${sec}`
}
///**************************///

//TASK#9
// Your task is to sort a given string.
//Each word in the String will contain a single number.
//This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input String is empty, return an empty String.
//The words in the input String will only contain valid consecutive numbers.
// For an input: "is2 Thi1s T4est 3a"
//the function should return "Thi1s is2 3a T4est"
// your_order("is2 Thi1s T4est 3a")
// [1] "Thi1s is2 3a T4est"

function order(words) {
	words = words.split(' ').sort( function (a, b) {
		if (a[a.search(/[1-9]/)] > b[b.search(/[1-9]/)]) return 1;
		if (a[a.search(/[1-9]/)] < b[b.search(/[1-9]/)]) return -1;
	}).join(' ')
	return words
}

// Находит цифры в предложениях и ставит их по порядку в словах
// function stringConvert (str) {
// 	if(!str) return str;
// 	str = str.replace(/[1-9]/g, '*');
// 	let count = 1;
// 	while (str.indexOf('*') !== -1) {
// 		str = str.replace(/\*/, count++);
// 	}
// 	return str
// }
///**************************///

//TASK#10
// Move the first letter of each word to the end of it,
//then add "ay" to the end of the word.
//Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str) {
	str = str.split(' ').map(function (item) {
		if(item.search(/\w/) !== -1) {
			return item = item.slice(1) + item[0] + 'ay'
		} else {
			return item
		}
	}).join(' ')
	return str
}
///**************************///

//арифметическая прогрессия на генераторе
function* arith (stop, start=0, step=1) {
	for (let i = start; i<=stop; i+=step) {
		yield i;
	}
}

for (let a of arith(10)) {
	console.log(a)
}

///**************************///

//TASK#11
// Write a function, persistence, 
// that takes in a positive parameter num 
// and returns its multiplicative persistence, 
// which is the number of times you must multiply 
// the digits in num until you reach a single digit.
// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
	let count = 0;
	if(String(num).length === 1) return 0;
	else {
		calcOp (num);
		return count;
	}
	function calcOp (num) {
		count++;
		let number = String(num).split('').reduce((a, b) => a * b);
		if(String(number).length !== 1) return calcOp (number);
		else return count;
	}
}
///**************************///

//TASK#12
// Title Case
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// ###Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


// Second Solution
// function titleCase(title, minorWords) {
// 	if(minorWords === undefined) return title = title.toLowerCase().split(' ').map(el=> el[0].toUpperCase() + el.slice(1)).join(' ')
// 	else {
// 		title = title.toLowerCase().split(' ').map(el=> el[0].toUpperCase() + el.slice(1))
// 		minorWords = minorWords.toLowerCase().split(' ').map(el=> el[0].toUpperCase() + el.slice(1))
// console.log(title)
// console.log(minorWords)
// 		for (let i = 0; i < minorWords.length; i++) {
// 			for (let j = 0; j < title.length; j++) {
// 				if (title[j] === minorWords[i]) title[j] = title[j].toLowerCase()
// 			}
// 	}
// 	title[0] = title[0][0].toUpperCase() + title[0].slice(1);
// 	return title.join(' ');
// }
// }

function titleCase(title, minorWords) {
	if(title === '') return ''
		if(minorWords === undefined) return title.toLowerCase().replace(/\b\w/g, el => el.toUpperCase());
	title = title.toLowerCase().replace(/\b\w/g, el => el.toUpperCase()).split(' ');
	minorWords = minorWords.toLowerCase().replace(/\b\w/g, el => el.toUpperCase()).split(' ');
	for (let i = 0; i < minorWords.length; i++) {
		for (let j = 0; j < title.length; j++) {
			if (title[j] === minorWords[i]) title[j] = title[j].toLowerCase()
		}
}
title[0] = title[0][0].toUpperCase() + title[0].slice(1);
return title.join(' ');
}

console.log(titleCase('the quick brown fox'))
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
///**************************///

//TASK#13
// Complete the solution so that it strips all text that
// follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:
// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution (input, markers) {
	markers.forEach(item => input = input.replace(new RegExp(`\\s\\${item}(.+)`, 'g'),""))
	return input
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
///**************************///

//TASK#14
// Did you mean ...?
// I'm sure, you know Google's "Did you mean ...?",
//when you entered a search term and mistyped a word.
//In this kata we want to implement something similar.
// You'll get an entered term (lowercase string)
//and an array of known words (also lowercase strings).
//Your task is to find out, which word from the dictionary
//is most similar to the entered one. The similarity is described by the minimum
//number of letters you have to add, remove or replace in order to get from
//the entered word to one of the dictionary. The lower the number of required changes,
//the higher the similarity between each two words.
// Same words are obviously the most similar ones.
//A word that needs one letter to be changed is more similar to another word
//that needs 2 (or more) letters to be changed. E.g.
//the mistyped term berr is more similar to beer (1 letter to be replaced)
//than to barrel (3 letters to be changed in total).
// Extend the dictionary in a way, that it is able to return you
//the most similar word from the list of known words.

// Code Examples:
// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"
// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"
// languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// languages.findMostSimilar('heaven'); // must return "java"
// languages.findMostSimilar('javascript'); // must return "javascript"
//(same words are obviously the most similar ones)
// I know, many of you would disagree that java is more similar to heaven than all
//the other ones, but in this kata it is ;)
// Additional notes:
// there is always exactly one possible solution


// //First decision
// function Dictionary(words) {
// 	this.words = words;
// }

// Dictionary.prototype.findMostSimilar = function(term) {
// 	var resArr = []
// 	this.words.forEach(function (item, index) {
// 		var count = 0;
// 		for (var i=0; i<term.length; i++) {
// 			if(item[i] === term[i]) {
// 				count++
// 			}
// 		}
// 		resArr.push(count)
// 	})
// 	var num = resArr.indexOf(Math.max.apply(Math,resArr))
// 	return this.words[num]
// }


//Second decision
function Dictionary(words) {
	this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
	var resArr = []
	this.words.forEach(function (item, index) {
		if(term.length + 1 >= item.length) {
			var count = item.match(new RegExp(`[${term}]`, 'gi'))
			count == null ? resArr.push(-1) : resArr.push(count.length)
		} else resArr.push(-1)
	})
	return this.words[resArr.indexOf(Math.max.apply(Math,resArr))]
}


// //Third decision
// function Dictionary(words) {
// 	this.words = words;
// }

// Dictionary.prototype.findMostSimilar = function(term) {
// 	var resArr = []
// 	var resArr2 = []
// 	this.words.forEach(function (item, index) {
// 		var count = 0;
// 		for (var i=0; i<term.length; i++) {
// 			if(item[i] === term[i]) {
// 				count++
// 			}
// 		}
// 		resArr.push(count)
// 	})
// 	this.words.forEach(function (item, index) {
// 		if(term.length+1 >= item.length) {
// 			var count = item.match(new RegExp(`[${term}]`, 'gi'))
// 			count === null ? resArr2.push(0) : resArr2.push(count.length)
// 		} else resArr2.push(0)
// 	})
// 	var res = resArr.map(function(item, index){ return item + resArr2[index] })
// 	return this.words[res.indexOf(Math.max.apply(Math,res))]
// }
///**************************///

//TASK#15
// Write a function named firstNonRepeatingLetter† that takes a string input,
//and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't',
//since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character,
//but the function should return the correct case for the initial letter. For example,
//the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").
// † Note: the function is called firstNonRepeatingLetter for historical reasons,
//but your function should handle any Unicode character.

//First decision
function firstNonRepeatingLetter(s) {
	var res = Array.from(new Set(s.split('')))
	var result = []
	res.forEach(function (item, index) {
		var simArr = s.match(new RegExp(`[${item}]`, 'gi'))
		if(simArr.length === 1) result.push(simArr[0])
	})
	if(result.length !== 0) return result[0]
		else return ''
	}

//Second decision
function firstNonRepeatingLetter (str) {
	var lowStr = str.toLowerCase();
	for (var i=0; i<lowStr.length; i++) {
		if(lowStr.indexOf(lowStr[i]) === lowStr.lastIndexOf(lowStr[i])) return str[i]
	}
return ''
}

///**************************///

//TASK#16
// Given the string representations of two integers,
// return the string representation of the sum of those integers.
// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will
// contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
	var firstNum = a.split('')
	var secNum = b.split('')
	var accum;
	var res;
	var result = []
	var count = 0
	var numLength = Math.abs(firstNum.length-secNum.length);
	for (var j=0; j <= numLength-1; j++) {
		if(firstNum.length > secNum.length) secNum.unshift('0')
			else firstNum.unshift('0')
		}
	firstNum.length > secNum.length ? accum = firstNum.length-1 : accum = secNum.length-1
	for (var i= accum; i >= 0; i--) {
		if(firstNum[i] === undefined) firstNum[i] = 0;
		if(secNum[i] === undefined) secNum[i] = 0;
		if(i === 0) {
			res = (+firstNum[i]) + (+secNum[i]) + (+count)
			res = res + ''
			result.unshift(res)
		} else {
			res = (+firstNum[i]) + (+secNum[i]) + (+count)
			if(res <=9 ) {
				res = res + ''
				result.unshift(res)
				count = 0
			} else {
				res = res + ''
				result.unshift(res[1])
				count = res[0]+''
			}
		}
	}
	return result.join('').replace(/^0+/, '') // Удалить ноль в начале числа
}
///**************************///

//TASK#17
// As breadcrumb menùs are quite popular today, I won't digress much on explaining them,
// leaving the wiki link to do all the dirty work in my place.
// What might not be so trivial is instead to get a decent breadcrumb from your current url.
// For this kata, your purpose is to create a function that takes a url,
// strips the first part (labelling it always HOME) and then builds it making
// each element but the last a <a> element linking to the relevant path;
// last has to be a <span> element getting the active class.
// All elements need to be turned to uppercase and separated by a separator,
// given as the second parameter of the function;
// the last element can terminate in some common extension like .html, .htm, .php or .asp;
// if the name of the last element is index.something, you treat it as if it wasn't there,
// 	sending users automatically to the upper level folder.
// A few examples can be more helpful than thousands of words of explanation, so here you have them:
// generateBC("mysite.com/pictures/holidays.html", " : ")
// == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ")
// == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ")
// == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
// Seems easy enough?
// Well, probably not so much, but we have one last extra rule:
// if one element (other than the root/home) is longer than 30 characters,
// 	you have to shorten it, acronymizing it (i.e.: taking just the initials of every word);
// 	url will be always given in the format this-is-an-element-of-the-url
// 	and you should ignore words in this array while
// 	acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
// 	a url composed of more words separated by - and equal or less than 30 characters
// 	long needs to be just uppercased with hyphens replaced by spaces.
// Ignore anchors (www.url.com#lameAnchorExample) and
// parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.
// Examples:
// generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ")
// == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
// generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ")
// == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
// You will always be provided valid url to webpages in common formats,
// so you probably shouldn't bother validating them.
// If you like to test yourself with actual work/interview related kata,
// please also consider this one about building a string filter for Angular.js.
// Special thanks to the colleague that, seeing my code and commenting that
// I worked on that as if it was I was on CodeWars, made me realize that it could be indeed a good idea for a kata :)

function generateBC(url, separator) {
	let arrElem = url.replace(/(https?:\/\/)|(\#\w+)/g, '').replace(/^(.*?)\/index.*$/, '$1').split('?')[0].split('/')
	url = url.replace(/(https?:\/\/)|(\#\w+)/g, '').replace(/^(.*?)\/index.*$/, '$1').replace(/\?\w+/g, '')
	if(url[0] === '/') return `<span class="active">HOME</span>`
	if(arrElem.length === 2 && arrElem[1] === "") return `<span class="active">HOME</span>`
  if(arrElem.length === 1) return `<span class="active">HOME</span>`
		let link = ''
	let newStr = arrElem.map(function (item, index) { 
		if(index !== 0) link += (item + '/')
		if(index === 0) return `<a href="/">HOME</a>`
		if(item.length > 30 && index === arrElem.length-1) {
			let lnk = item.replace(/\b(the|of|in|from|by|with|and|or|for|to|at|a)\-|(\-the|\-of|\-from|\-by|\-with|\-and|\-or|\-for|\-to|\-at|\-a)/g, '').split('-').map(elem => elem[0].toUpperCase()).join('')
			return `<span class="active">${lnk}</span>`
		}
		if(item.length > 30 && index < arrElem.length-1) {
			let lnk = item.replace(/\b(the|of|in|from|by|with|and|or|for|to|at|a)\-|(\-the|\-of|\-from|\-by|\-with|\-and|\-or|\-for|\-to|\-at|\-a)/g, '').split('-').map(elem => elem[0].toUpperCase()).join('')
			return `<a href="/${link}">${lnk}</a>`
		}
		if(index === arrElem.length-1) return item = `<span class="active">${item.replace(/^(.*?)\..*$/, '$1').replace(/\-/g, ' ').toUpperCase()}</span>`
		else return item = item.replace(/(.+)/g, function(match, contents, offset, input_string) { 
			return `<a href="/${link}">${contents.replace(/\-/g, ' ').toUpperCase()}</a>`
		})
	})
	return newStr.join(separator)
}



///**************************///

//TASK#18
// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero,
// it just returns "now". Otherwise,
// the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.
// In general, a positive integer and one of the valid units of time, separated by a space.
// The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", ").
// Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one.
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times.
// So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero.
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible".
// It means that the function should not return 61 seconds, but 1 minute and 1 second instead.
// Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
	if(seconds === 0) return 'now'
	let days = +(seconds % 31536000 / 86400 + '').split('.')[0]
	let hrs = +(seconds % 31536000 % 86400 / 3600+ '').split('.')[0]
	let min = +(seconds % 31536000 % 86400 % 3600 / 60 + '').split('.')[0]
	let sec = seconds % 60
	let res = []
	let years = ''
	if(seconds>=31536000) {
		years = +(seconds / 31536000 + '').split('.')[0]
		years === 1 ? res.push('1 year') : res.push(`${years} years`)
	}
	days = (days === 0) ? '': days === 1 ? res.push('1 day') : res.push(`${days} days`)
	hrs = (hrs === 0) ? '': hrs === 1 ? res.push('1 hour') : res.push(`${hrs} hours`)
	min = (min === 0) ? '': min === 1 ? res.push('1 minute') : res.push(`${min} minutes`)
	sec = (sec === 0) ? '': sec === 1 ? res.push('1 second') : res.push(`${sec} seconds`)

	return res.join(', ').replace(/,(?![^,]*,)/m, ' and');
}

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

///**************************///