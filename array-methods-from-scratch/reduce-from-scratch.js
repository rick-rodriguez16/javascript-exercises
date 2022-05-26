// These exercises provide insight into how the Array methods work

// reduce
// per MDN: 

// Some features of reduce:
//    1. 

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
