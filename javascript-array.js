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

// There are two arrays with individual values, write a JavaScript program to compute the sum 
// of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

function computeSum(first, second) {
    const longer = first.length >= second.length ? first : second;
    const shorter = first.length < second.length ? first : second;
    return longer.reduce((acc, cur, i) => {
        acc.push(shorter[i] ? cur + shorter[i] : cur);
        return acc
    }, [])
}

// Write a JavaScript program to find duplicate values in a JavaScript array.

// solution 1
function findDuplicate1(arr) {
    const obj = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {});
    const result = [];
    for (let key in obj) {
        if (obj[key] > 1) {
            result.push(key)
        }
    };
    return result
}

// solution 2
function findDuplicate2(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

// Write a JavaScript program to flatten a nested (any depth) array. 
// If you pass shallow, the array will only be flattened a single level. 
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// solution 1
function flatten1(arr, n = Infinity) {
    return arr.flat(n)
}

// solution 2
function flatten2(arr, n = Infinity) {
    const result = [];
    for (let el of arr) {
        if (Array.isArray(el) && n >= 0) {
            result.push(...flatten2(el,--n))
        } else {
            result.push(el)
        }
    }
    return result
}

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// solution 1
function union1(arr1, arr2) {
    return [...arr1, ...arr2]
}

// solution 2
function union2(arr1, arr2) {
    return arr1.concat(arr2)
}

// solution 3 
function union3(arr1, arr2) {
    const result = [];
    for (let el of arr1) {
        result.push(el)
    }
    for (let el of arr2) {
        result.push(el)
    }
    return result
}

// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// solution 1 
function difference1(arr1, arr2) {
    const spread1 = arr1.flat(Infinity);
    const spread2 = arr2.flat(Infinity);
    const result = [];
    for (let el of spread1) {
        if (!spread2.includes(el)) {
            result.push(el)
        }
    }
    for (let el of spread2) {
        if (!spread1.includes(el)) {
            result.push(el)
        }
    }
    return result
}

// solution 2
function difference2(arr1, arr2) {
    return [...arr1.flat(Infinity).filter((e , i) => {
        return !arr2.flat(Infinity).includes(e)
    }), ...arr2.flat(Infinity).filter((e , i) => {
        return !arr1.flat(Infinity).includes(e)
    })]
}

// solution 3
function difference3(arr1, arr2) {
    const obj = {};
    for (let el of arr1.flat(Infinity)) {
        obj[el] = (obj[el] || 0) + 1
    }    
    for (let el of arr2.flat(Infinity)) {
        obj[el] = (obj[el] || 0) + 1
    }

    return Object.entries(obj).filter(e => {
        if (e[1] === 1) {
            return e
        } 
    }).map(e => e[0])
}

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function remove(arr) {
    return arr.filter(e => e)
}

// Write a JavaScript program to find a pair of elements (indices of the two numbers)
// from an given array whose sum equals a specific target number. Go to the editor
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2,3

// solution 1 
function findPair1(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i+1] === target) {
            result.push(i, i+1)
            break;
        }
    }
    return result.join()
}

// solution 2
function findPair2(arr, target) {
    return [arr.findIndex((e, i) => e + arr[i+1] === target), arr.findIndex((e, i) => e + arr[i-1] === target)].join()
}


// Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeWithoutDuplicates(arr1, arr2) {
    return [... new Set([...arr1, ...arr2])]
}