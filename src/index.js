// FUNCTIONAL FLAVORED JAVASCRIPT

// console.log('Hewwo?');
// console.log('Waaaaah');

//#1 Accept arguments instead of using global variables
    // const {name} = whom;
    // const name = whome.name;
    // console.log(person);
    // #2 always return a value 



function greet({    
// function greet({name})
    // console.log(typeof name);
    name,
    address,
    age
})
    {
    return `Hello, ${name}! You're from ${address} and are ${age} years old`;
}

// console.log(greet('Greta'));

const person = {
    name: 'Greta',
    address: 'Alpha Centari',
    // address:'Earth',
    occupation: 'Hero'
};


function fromEarth(originalObject) {
    // debugger;
    // somebody.address = 'Earth'
    // const theAddress = originalObject.address || 'Earth';
    // also use an if/else
    const modifiedVersionOfObject = {
        address: 'Earth',
        ...originalObject, //object spread syntax // take all the key value pairs from the original and sprinkle them right here
        // name: somebody.name,
        // occupation: somebody.occupation,
        // address: theAddress,
        age: '10000',
        // overwrites go after the
        // the object spread operator
        name: 'Oakley'
    }
    return modifiedVersionOfObject;

    // return somebody;
}

// console.log(greet(fromEarth(person)));


const persons = [
    { name: 'Alice', address: 'Atlanta'},
    { name: 'Bob', address: 'Atlanta'},
    { name: 'Cthulu', address: 'Pacific'}, // can use trailing comma
];

const modifiedPersons = [
    'Daria', // appears first in array because before persons
    ...persons,
    // 'Daria' // appear at end of array
];

function addressIsNotPacific(person) {
    return person.address !== 'Pacific';
}

// const noPacifics = persons.filter((person) =>{
//     return person.address !== 'Pacific';

// const noPacifics = persons.filter(person => person.address !== 'Pacific'); // probably use this one
// const noPacifics = persons.filter(({address}) => address !== 'Pacific');  // <-- fancy 


console.log(persons.filter(({address}) => address !== 'Pacific').map(greet));



// console.log(persons.map(greet));

// const newArray = [];
// for (let onePerson of persons) {
//     newArray.push(greet(onePerson));
// }
// console.log(newArray);



// console.log(modifiedPersons);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
