//create and access any object and property of object using for of loop
//that's very easy loop

// let object={
//     name:"Priyanshu",
//     age:12,
//     "Roll no.":21,
//     city:"delhi"
// }

// for(let key in object)
// {
//        console.log(key)
// }

const user = { name: "Alice", age: 25 };

for (let key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(`${key}: ${user[key]}`);
  }
}
