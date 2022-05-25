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

    reduced (callbackFunction, initialValue) {
        
        if (this.array === [] && initialValue === null)
            throw TypeError;

        if(initialValue === null) {
            const previousValue = this.array[0];
            const currentValue = this.array[1];
            let i = 1;

            for (; i < this.array.length; i++ ){
                previousValue = callbackFunction(previousValue, currentValue, i, this.array)
            }

        } else {
            const previousValue = initialValue;
            const currentValue = this.array[0];
            let i = 0;

            for (; i < this.array.length; i++ ){
                previousValue = callbackFunction(previousValue, currentValue, i, this.array)
            }
        }        
    }
}

// function chosen to use as callback
function elementsThatAreStrings (element) {
    return typeof(element) === 'string';
}

// test
const testArray = [10, 10, 10, 10, 10];
const myArray = new Arrays(testArray);

const sum = myArray.reduced(
    (prevVal, currVal) => prevVal + currVal
);
console.log(sum);

console.log("\nDisplay the original unmutated array after the call to filtered:")
console.log(myArray.array);
