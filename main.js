//1.  Map through the array and console.log everyone's first and last name. Using .map
let users1 = [
    {
    firstName: 'Joe',
    lastName:'Orin',
    car: 'Porsche',
    dog:'Shitzu',
    },
    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },
    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },
    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
    ];


let fullName = users1
.map(users => `${users1.firstName} ${users1.lastName}`);
console.log(fullName);

//2.  a. Create an array of objects where the value from the name key in each object in users is the key in the new object index and the likes value is the value in the new object index.
   // b. Calculate age based on the number of letters in the name multiplied by 10

    const users = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
    ];
    //Should look like:
    //[
    //{ pan: 'lasagne', age: 30 },
    //{ lena: 'wine', age: 40 },
    //{ jill: 'tacos', age: 40 },
    //{ conner: 'turkey', age: 60 }
    //]

    let changeKey = users.map((person) => {
    let newObj = {};
    newObj[person.name] = person.likes;
    newObj.age = person.name.length * 10;
    return newObj
    });

console.log(changeKey)