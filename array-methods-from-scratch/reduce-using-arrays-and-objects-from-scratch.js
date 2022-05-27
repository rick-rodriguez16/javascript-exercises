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


const topSix = [
    { name: "Nigeria", position: "1st", points: 43 },
    { name: "England", position: "2nd", points: 37 },
    { name: "USA", position: "3rd", points: 35 },
    { name: "South Africa", position: "4th", points: 30 },
    { name: "Brazil", position: "5th", points: 27 },
    { name: "Korea", position: "6th", points: 23 }
];
const topSixArr = new Arrays(topSix); 
const totalPoints = topSixArr.reduceIt((acc, currTeam) => acc + currTeam.points, 0); 
console.log('Total points: ', totalPoints);


const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana'];
const fruitsArr = new Arrays(fruits);
const occurrences = fruitsArr.reduceIt((acc, currFruit) => {
    return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
}, {}); 
console.log('\nObject containing each fruit and its count:\n', occurrences);


const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
];
const studentsArr1 = new Arrays(students);
const names = studentsArr1.reduceIt((acc, student) => [...acc, student.name], []); 
console.log('\nArray containing only the names of each student object:\n', names);


const studentsArray = [
    { name: "Kingsley", score: 70, position: "1st" },
    { name: "Jack", score: 80, position: "2nd" },
    { name: "Joe", score: 63, position: "3rd" },
    { name: "Beth", score: 75, position: "4rd" },
    { name: "Kareem", score: 59, position: "5th" },
    { name: "Sarah", score: 93, position: "6th" }
];
const studentsArr2 = new Arrays(studentsArray); 
const studentObj = studentsArr2.reduceIt((acc, student) => {
    return {...acc, [student.name]: student.position}
}, {});
console.log('\nReducing an array of student objects into 1 object with names and positions:\n', studentObj);


const students1 = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
];
const studentsArr3 = new Arrays(students1);
const max = studentsArr3.reduceIt((acc, student) => {
    if(acc === null || student.score > acc) 
        return student.score
    return acc
}, null);
console.log('\nGet the max score from a set a scores:\n', max);


const arrOfArrs = [
    ['aaron', 'ake', 'anna', 'aje'],
    ['becky', 'ben', 'bright'],
    ['cara', 'chris'],
    ['david', 'daniel', 'danielle', 'djenue'],
];
const flattedArr = new Arrays(arrOfArrs);
const flattened = flattedArr.reduceIt((acc, array) => acc.concat(array));
console.log('\nA flattened array of arrays:\n', flattened);