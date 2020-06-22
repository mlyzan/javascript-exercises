// Write a JavaScript function to check whether an `input` is an array or not.

// solusion 1
function isArray1(arr) {
    return Array.isArray(arr)
}

// solusion 2
function isArray2(arr) {
    return !!(typeof(arr) !== 'string' && typeof(arr.length))
} 

// solusion 3
function isArray3(arr) {
    return toString.call(arr) === '[object Array]'
}

// Write a JavaScript function to clone an array.

//solution 1
function cloneArray1(arr) {
    return [...arr]
}

// solution 2
function cloneArray2(arr) {
    let newArr = [];
        for (let el of arr) {
            newArr.push(el)
        }
    return newArr
}

// solution 3
function cloneArray3(arr) {
    return arr.slice(0)
}

// Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr, n = 1) {
    const newArr = arr.filter((e, i) => i < n);
    return newArr.length === 1 ? newArr[0] : newArr 
}

// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array

function last(arr, n = 1) {
    const newArr = arr.reverse().filter((e, i) => i < n).reverse();
    return newArr.length === 1 ? newArr[0] : newArr
}

// Write a simple JavaScript program to join all elements of the following array into a string.
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
myColor.join(',')
myColor.toString()
myColor.join('+')

// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8. 

// solution 1
function dashes1(n) {
    let str = '';
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0 && n[i+1] % 2 === 0) {
            str += `${n[i]}-`
        } else {
            str += n[i]
        }
    }
    return str
}

// solution 2
function dashes2(n) {
    const arr = [...n];
    return arr.reduce((acc, cur, i) => {
                    if (cur % 2 === 0 && arr[i+1] % 2 === 0) {
                        acc += `${cur}-`
                    } else {
                        acc += cur
                    }
                return acc
            }, '')
}

// Write a JavaScript program to sort the items of an array.

// solution 1
function sortArray1(arr) {
    return arr.sort((a, b) => a-b)
}

// solution 2
Array.prototype.quickSort = function () {
    if (this.length <= 1 ) {
        return this
    };
    let pivot = this[this.length-1];
    let left = [];
    let right = [];

    for(let i = 0; i < this.length - 1; i++) {
        if(this[i] < pivot) {
            left.push(this[i])
        } else {
            right.push(this[i])
        }
    }
    return [...left.quickSort(), pivot, ...right.quickSort()]
};

function sortArray2(arr) {
    return arr.quickSort()
}

// Write a JavaScript program to find the most frequent item of an array.
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a (5 times)

function frequent(arr) {
    const obj = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {})
    const item = Object.entries(obj).sort((a, b) => b[1] - a[1])[0];
    return `${item[0]} (${item[1]} times)`
}

// Write a JavaScript program which accept a string as input and swap the case of each character.
//  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function character(str) {
    let newStr = '';
    for (let i = 0; i< str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i].toLowerCase()
        }
    }
    return newStr
}

//  Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// solution 1
function duplicate1(arr) {
    return [...new Set(arr)]
}

// solution 2
function duplicate2(arr) {
    return arr.filter((e, i) => arr.indexOf(e) === i)
}

// solution 3
function duplicate3(arr) {
    const newArr = [];
    const obj = {};
    for (let el of arr) {
        obj[el] = (obj[el] || 0) + 1;
    };
    for (let key in obj) {
        if (obj[key] === 1) {
            newArr.push(key)
        }
    }
    return newArr
}

// Find the leap years in a given range of years

function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0) ? year : false
}

function yearsRange(start, end) {
    const arr = [];
    while (start <= end) {
        let leap = leapYear(start);
        if (leap) {
            arr.push(leap);
        }
        start++;
    }
    return arr
}

// Write a JavaScript program to shuffle an array

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * arr.length);
        if (random !== i) {
            [arr[i], arr[random]] = [arr[random], arr[i]]
        }
    }
    return arr
}