function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const dogs = [{name: 'baloo', age: 2}, {name: 'Timon', age: 1}];

//Regular
console.log('hello ');

//Interpolated
console.log('hello I am a %s string!', '😃');

//Styled
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue');

//warning!
console.warn('oh noo')

//Error :!
console.error('shit')

//Info
console.info('crocodiles eat 3-4 people per year');

//Testing
console.assert(1 === 2, 'that is wrong !');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong !');

//Clearing
//console.clear()

// viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(dog => {
    console.log(`this is ${dog.name} is ${dog.age} years old `);
});

// counting
console.count('hey');
console.count('hey');
console.count('hey');
console.count('heyy');

//timing

// console.time('fetching data');
// fetch('https://github.com/')
// .then(data => data.json() )
// .then(data => {
//     console.timeEnd('fetching data');
//     console.log(data);
// });

// last

console.table(dogs);
