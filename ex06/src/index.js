let rockStar = new Map([
    ['artist', 'The Rolling Stones'],
    ['song', 'Angie'],
    ['album', 'Goats Head Soup'],
    ['singer', 'Mick Jagger']
]);

let array = [...rockStar].filter(x=>x[0][0]>'a');

let newRock = new Map(array);
 
console.log(newRock);


module.exports = { rockStar, newRock };
