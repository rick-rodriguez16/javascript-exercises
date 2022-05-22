// These exercises provide insight into how the Array methods work


// ForEach
// per MDN: this method executes a provided function once for each array element

// Some features of forEach:
//    1. the callback function is called with the following 3 arguments: the element, the index and the object being traversed
//    2. the callback is called once for each element in ascending order
//    3. the range of the elements is processed by forEach before the first call to the callback function
//    4. forEach always returns undefined
//    5. forEach is not chainable
//    6. forEach does not mutate the array upon which it is called, however
//    7. the callback function can mutate the array
//    8. once started, forEach cannot be stopped except by throwing an exception
//    9. forEach expects a synchronous function.  It does not work for promises or async/await

class Arrays {

  constructor(array = []) {
    this.array = array;
  }

  for_Each (callbackFunction) {
    for (let i = 0; i < this.array.length; i++) {
      console.log(callbackFunction(this.array[i], i, this.array));
    }
  }
}

// function chosen to use as callback
function elementsSquared (element) {
  return element * element;
}

// test
const myArray = new Arrays([1, 2, 3, 4, 5, 6, 7]);
console.log(myArray.for_Each(elementsSquared));
// Expected: 
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// undefined

console.log(myArray.array);
// Expected:
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
