function Mean(arr) {
 return Math.round((arr.reduce((a,b) => a+b, 0))/ arr.length);
}

console.log(Mean([1, 2, 3, 4, 5])); // 3
console.log(Mean([3, 5, 7, 5, 3])); // 5
console.log(Mean([6, 5, 4, 7, 3])); // 5
console.log(Mean([1, 3, 3])); // 2
console.log(Mean([7, 7, 7, 7, 7])); // 7