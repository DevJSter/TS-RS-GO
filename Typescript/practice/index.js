"use strict";
// // <T> and T[] are known as generics
// function getfirstElement<T> (arr: T[]) {
//     return arr[0];
// }
// let ans1 = getfirstElement([1,2,3]);
// let ans2 = getfirstElement(['hello','haribol']);
// console.log(ans1);
// console.log(ans2)
function swap(a, b) {
    return [b, a];
}
console.log(swap('Hello', 'There'));
console.log(swap(1,2));
