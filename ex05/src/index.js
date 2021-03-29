let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],

]);
 let arrKey = [];
 for (let col of shoppingList.keys()) {
     arrKey.push(`grocerise: ${col}`);
     
 }

 let arrValue = [];
 for (let col of shoppingList.values()) {
    arrValue.push(`amount: ${col}`);  
}

 
for (let item of arrKey) {
    console.log(item);
}

for (let item of arrValue) {
    console.log(item);
}

for (let col of shoppingList.entries()) {

   console.log(`[ '${col[0]}', ${col[1]} ]`);  
}
module.exports = { shoppingList, arrKey, arrValue };