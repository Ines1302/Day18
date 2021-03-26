let myArr = [];

function* multiplication(x) {
  for (let i = 0; i < ; i++) {
    x *= 2;
  }
    yield x;
    myArr.push(x);
  
  
}

var num = multiplication(3);

for (number of num) {
  console.log(num.next().value);
}
module.exports = multiplication;
