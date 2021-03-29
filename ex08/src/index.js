let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set([...one, ...two]);

let intersectionSet = new Set([]);

for (let item of one) {
    if ([...two].indexOf(item) !== -1){
        intersectionSet.add(item);
    }
  
}
let differenceSet = new Set([]);

for (let item of one) {
    if ([...two].indexOf(item) == -1){
        differenceSet.add(item);
    }
  
}
console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);
module.exports = { unionSet, intersectionSet, differenceSet } ;