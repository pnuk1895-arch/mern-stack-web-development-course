// Nested Objects
// Property values in an object can be other objects:

//Example
person={
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}


//You can access nested objects using the dot notation or the bracket notation:

//Examples

person.myCars.car2;
person.myCars["car2"];
pserson["myCars"]["car2"];