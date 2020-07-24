import { add } from './example.js'
console.log(add(2,3))

/* Classes challenges*/
export class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    
    get birthplace() {
        return `${this.name} was born in ${this.country}`;
    }
}

export class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    get age() {
        return `${this.name} is ${age} years old and knows how to play Tennis`
    }
}

/*Promise challenge*/
/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


const getUserData = () => {
    return new Promise ((resolve, reject) => {
       setTimeout (() => {
           const error = false;
            const user = {name : "Amish"}
            
            if( error ) {
                reject("Could not retrieve user data")
            } else {
                resolve(user.name);
            }
       }, 3000);
    });
}

getUserData().then((data) => console.log(data)).catch((message) => console.log(message

	/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */


fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({
        postId: 1, 
        id: 1, 
        name: "id labore ex et quam laborum", 
        email: "Eliseo@gardner.biz", 
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        })
})
     .then(response => response.json())
     .then(data => console.log(data))