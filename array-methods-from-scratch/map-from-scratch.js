// These exercises provide insight into how the Array methods work


// map
// per MDN: this method creates a new array populated with the results of calling a provided
//          function on every element in the calling array

// Some features of map:
//    1. the callback function is called with the following 3 arguments: the element, the index and the object being traversed
//    2. the callback is called once for each element in ascending order
//    3. map returns a new array
//    3. the range of the elements is processed by map before the first call to the callback function
//    4. map is chainable
//    5. map does not mutate the array upon which it is called, however
//    6. the callback function can mutate the array
//    7. it is considered an anti-pattern if you do not use the returned array (use forEach or for... of)
//    8. if the array which map is called upon is sparse, the resulting array will be sparse as well keeping the same indices blank

class Arrays {

    constructor(array) {
        this.array = array;
    }

    map_It (callbackFunction) {
        
        const mappedArray = [];

        for (let i = 0; i < this.array.length; i++) {
            mappedArray.push(callbackFunction(this.array[i], i, this.array));
        }
        return mappedArray;
    }
}


// function chosen to use as callback
function elementsCubed (element) {
    return element * element * element;
}


// test
const testArray = [1, 2, 3, 4, 5, 6, 7];
const myArray = new Arrays(testArray);

console.log("\nDisplay a new array with each element added by 2:")
console.log(myArray.map_It(element => element + 2));
// Expected:
// Display a new array with each element added by 2:
// [
//   3, 4, 5, 6,
//   7, 8, 9
// ]

console.log("\nDisplay an array of cubes:");
const map1 = myArray.map_It(elementsCubed);
console.log(map1);
// Expected:
// Display an array of cubes:
// [
//     1,   8,  27, 64,
//   125, 216, 343
// ]

console.log("\nDisplay the original unmutated array after the call to map_It:")
console.log(myArray.array);
// Expected:
// Display the original unmutated array after the call to map_It:
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
