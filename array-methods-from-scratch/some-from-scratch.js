// These exercises provide insight into how the Array methods work

// Array.prototype.some()
// per MDN: this method tests whether at least one element in the array
//          passed the test implemented by the provided function. It returns 
//          true if, in the array, it finds an element for which the provided 
//          function returns true; otherwise it returns false. It doesn't modify 
//          the array.

// Some features of some():
//    1. The callback function is called with the following 3 arguments: 
//          the element, the index and the object being traversed and returns
//          a value that is coercible to a Boolean value.
//    2. The callback is called once for each element in ascending order,
//          until it finds one where the callback returns true.
//    3. If such an element is found, some() immediately returns true,
//          otherwise it will continue to iterate.
//    4. If no element is found, some() returns false.
//    5. The callback function is called only for elements in the array
//          that actually exist, it is not called for missing elements
//          of an array (sparse array).
//    6. some() does not directly mutate the object on which it is called,
//          but may be mutated by the calls of the callback function.
//    7. The range of the elements is processed by some() before the first 
//          call to the callback function.
//    8. some() acts like the "exists" quantifier in mathematics. In particular,
//          for an empty array it returns false. 

class Arrays {

    constructor(array) {
        this.array = array;
        this.len = array.length
    }

    someElem (callbackFunction) {        
        
        for (let k = 0; k < this.len; k++) {

            // Evaluation is short-circuited when first condition is false (empty index), 
            // thereby not running the callback function for that index as per ECMAScript
            if(k in this.array == true && callbackFunction(this.array[k], k, this.array)) {   
                return true
            }
        }
        return false;
    }
}


//testing with a named callback function
function isBiggerThan3(element, index, array) {
    return element > 3;
}

const testArray1 = [1, 2, 3]
var myArray = new Arrays(testArray1)
console.log('Testing if an element is bigger than 3: ', myArray.someElem(isBiggerThan3))
// Expected output: Testing if an element is bigger than 3:  false


//testing with an anonymous arrow function
const testArray2 = [1, 'two', 3, 'four', 5]
myArray = new Arrays(testArray2)
console.log('Testing if there is a string: ', myArray.someElem(e => typeof(e) == 'string'))
// Expected output: Testing if there is a string:  true


// Mimicking the Arrays.prototype.includes() method
const fruits = ["apple", "banana", "mango", "guava"];
myArray = new Arrays(fruits)

function checkAvailability(arr, val) {
    return arr.someElem(e => val === e);
}

console.log('Is there kela fruit? ', checkAvailability(myArray, "kela"));
console.log('Is there a banana? ', checkAvailability(myArray, "banana")); 
//Expected output: Is there kela fruit?  false
//Expected output: Is there a banana?  true


// Converting any value to Boolean
const TRUTHY_VALUES = [true, "true", 1];
myArray = new Arrays(TRUTHY_VALUES)

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }
  return myArray.someElem((t) => t === value);
}

console.log(getBoolean(false));     // false
console.log(getBoolean("false"));   // false
console.log(getBoolean(1));         // true
console.log(getBoolean("true"));    // true


const testArray3 = [1, , 3];
myArray = new Arrays(testArray3);
console.log('Show that sparse array elements are not tested for undefined: ', myArray.someElem(e => e === undefined));
// Expected output: Show that sparse array elements are not tested for undefined: false

const testArray4 = [1, , 1];
myArray = new Arrays(testArray4);
console.log('Show that sparse array elements dont get tested at all: ', myArray.someElem(e => e !== 1));
// Expected output: Show that sparse array elements dont get tested at all: false

const testArray5 = [1, undefined, 1];
myArray = new Arrays(testArray5);
console.log('Undefined array elements do get tested: ', myArray.someElem(e => e !== 1));
// Expected output: Undefined array elements do get tested: true

// Testing with non-array objects
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
};
myArray = new Arrays(arrayLike)
console.log(myArray.someElem(e => typeof(e) === "number"));
