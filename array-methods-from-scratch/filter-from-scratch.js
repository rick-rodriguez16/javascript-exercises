// These exercises provide insight into how the Array methods work

// filter
// per MDN: this method creates a new array with all the elements
//          that pass the test implemented by the provided function.

// Some features of filter:
//    1. the callback function is called with the following 3 arguments: 
//          the element, the index and the object being traversed and returns
//          a value that is coercible to a Boolean value
//    2. the callback is called once for each element in ascending order
//    3. filter uses the returned coercible Boolean value to construct a 
//          new array of all values for which the callback function
//          returns true
//    4. the range of the elements is processed by filter before the first 
//          call to the callback function
//    5. filter is chainable
//    6. filter does not mutate the array upon which it is called, however
//    7. the callback function can mutate the array

class Arrays {

    constructor(array) {
        this.array = array;
    }

    filtered (callbackFunction) {
        
        const filteredArray = [];

        for (let i = 0; i < this.array.length; i++) {
            if(callbackFunction(this.array[i], i, this.array)) {
                filteredArray.push(this.array[i]);
            };
        }
        return filteredArray;
    }
}


// function chosen to use as callback
function elementsThatAreStrings (element) {
    return typeof(element) === 'string';
}


// test
const testArray = [1, 'two', 3, 'four', 5, 'six', 'seven', 8, 9, 'ten'];
const myArray = new Arrays(testArray);

console.log("\nDisplay a filtered array that holds elements > 4:")
console.log(myArray.filtered(element => element > 4));
// Expected:
// Display a filtered array that holds elements > 4:
// [ 5, 8, 9 ]

console.log("\nDisplay a filtered array of strings:");
const filter1 = myArray.filtered(elementsThatAreStrings);
console.log(filter1);
// Expected:
// Display a filtered array of strings:
// [ 'two', 'four', 'six', 'seven', 'ten' ]

console.log("\nDisplay the original unmutated array after the call to filtered:")
console.log(myArray.array);
// Expected:
// Display the original unmutated array after the call to filtered:
// [
//   1,       'two',
//   3,       'four',
//   5,       'six',
//   'seven', 8,
//   9,       'ten'
// ]
