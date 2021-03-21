// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.lenth = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});



function destructivelyAppendCat(name) {
    cats.push(name)
}
    destructivelyAppendCat('Ralph');
    
    destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(name);
}