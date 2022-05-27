// These exercises provide insight into how the Array methods work

// reduce
// per MDN: The reduce() method executes a user-supplied "reducer" callback 
//          function on each element of the array, in order, passing in the 
//          return value from the calculation on the preceding element. The 
//          final result of running the reducer across all elements of the 
//          array is a single value.


// Some features of reduce:
//  1. The callback function is called with the following 4 arguments: 
//      -   the accumulator (aka, the previousValue) which holds the value 
//          of the previous call to the callback function,
//      -   the currentValue (the value of the current element),
//      -   the currentIndex, and,
//      -   the array being traversed
//  2. When the callback function is called for the first time, one of two
//     sets of assignments are made to the accumulator and the currentValue:
//      -  If an initialValue was provided, then:
//          • accumulator is set to the initialValue; currentValue is set to 
//            the first element in the array
//      -  If an initialValue was NOT provided, then:
//          • accumulator is set to the first element in the array; currentValue
//            is set to the second element in the array
//  3. If a call to reduce is made with an empty array and no initialValue, 
//     a TypeError is thrown.
//  4. reduce does not mutate the array upon which it is called, however
//  5. the callback function can mutate the array
//  6. The range of the elements is processed by reduce before the first
//     call to the callback function
//  7. reduce is chainable

class Arrays {
    
    constructor(array) {
        this.array = array;
    }

    reduceIt (callbackFunction, initialValue) {
        
        try {
            if (this.array.length === 0 && initialValue === undefined)
                throw TypeError;
        } catch(err) {
            console.log("TypeError: reduceIt using an empty array and no initial value");
        }

        let accumulator = initialValue;

        if (accumulator === undefined) {
            
            accumulator = this.array[0];
            for (let currentIndex = 1; currentIndex < this.array.length; currentIndex++) {
                let currentValue = this.array[currentIndex];
                accumulator = callbackFunction(accumulator, currentValue, currentIndex, this.array)
            }            
        } else {

            for (let currentIndex = 0; currentIndex < this.array.length; currentIndex++) {
                let currentValue = this.array[currentIndex];
                accumulator = callbackFunction(accumulator, currentValue, currentIndex, this.array)
            }
        }
        return accumulator;
    }
}

// function chosen to use as callback
const factorial = (product, currValue) => product * currValue;

// test
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ['hi', 'bye', 'good', 'bad'];
const arr3 = [1, 'hi', 3, 'bye', 5, 'good', 7]
const arr4 = [];
const myArr1 = new Arrays(arr1);
const myArr2 = new Arrays(arr2);
const myArr3 = new Arrays(arr3);
const myArr4 = new Arrays(arr4);

// display sum of arrays with initializer
console.log("\nVarious sums using numbers, strings, combos, etc.")
console.log('Array 1: ', myArr1.reduceIt((acc, curr) => acc + curr, 5));
// Expected: 33

console.log('Array 2: ', myArr2.reduceIt((acc, curr) => acc + curr, 'sky'));
// Expected: skyhibyegoodbad (concatenation)

console.log('Array 3: ', myArr3.reduceIt((acc, curr) => acc + curr, 'baby'));
// Expected: baby1hi3bye5good7 (integers coerced to strings, then concatenated)

console.log('Array 4: ', myArr4.reduceIt((acc, curr) => acc + curr, 12000));
// Expected: 12000 (empty array with just initializer)

// display factorials without initializer
console.log("\nVarious factorials using numbers, strings, combos, etc.")
console.log('Array 1: ', myArr1.reduceIt(factorial));
// Expected: 5040

console.log('Array 2: ', myArr2.reduceIt(factorial));
// Expected: NaN

console.log('Array 3: ', myArr3.reduceIt(factorial));
// Expected: NaN

console.log('Array 4:  Would throw TypeError');

console.log("\nDisplay the original unmutated arrays after the calls to reduceIt:")
console.log(myArr1.array);
console.log(myArr2.array);
console.log(myArr3.array);
console.log(myArr4.array);

// display TypeError when reduceIt is given an empty array and no initializer
console.log("\n\nHere is the program crashing using myArr4...")
console.log(myArr4.reduceIt((acc, curr) => acc + curr));
// Expected: TypeError: reduceIt using an empty array and no initial value undefined
