// #1 import React
import React from 'react';
import Card from './card';

// #2 Create function
// function Greet({whom}) {
//     // React functions always return a single value written as HTML
//     return (
//         <p>Hello, {whom}</p>
//     );
// }

// fucntion Greet(props) {
//     return (
//         <p>Hello, {props.whom}</p>
//     );
// }

function Greet({whom}) {
    const greetingText = `Hello, ${whom}!`
    return (
        <div>
            <Card text={greetingText} />
        </div>
    );
}


// #3 Export function
export default Greet;