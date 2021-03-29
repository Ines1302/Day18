function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1(){
    for (let i = 1; i < 6; i++) {
        let x = i;
        yield x;
    }
}
function* insideGenerator2(){
    for (let i = 10; i < 16; i++) {
        let x = i;
        yield x;
    }
}
function* insideGenerator3(){
    for (let i = 6; i < 10; i++) {
        let x = i;
        yield x;
    }
}


var iterator = myGenerator();
const fifteenArray = [];

for (let i = 0; i < 16; i++) {
    let iteratorValue = iterator.next();
    fifteenArray[i] = iteratorValue.value + (iteratorValue.done ? "!" : "#")
}

console.log(fifteenArray.join(", "));


module.exports = { fifteenArray, myGenerator };

