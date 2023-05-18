const items = [{price: 10.99}, {price:5.99}, {price:29.99}];
const sum = items.reduce((totalPrice, item) => totalPrice + item.price, 0);

console.log(sum);

const colors = ["Red", "Yellow", "Blue", "Orange", "Violet"];
colors.reverse();

const points = [1, 245, 73, 5, 56];
points.sort(function(a, b){return a-b});

const fruits = [
    {type: "apples", pieces: 5},
    {type: "bananas", pieces: 8},
    {type: "oranges", pieces: 14},
    {type: "pears", pieces: 12}
]
fruits.sort(function(a,b){return a.pieces - b.pieces})