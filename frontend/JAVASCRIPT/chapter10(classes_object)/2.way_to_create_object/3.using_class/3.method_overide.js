//Method overriding in inheritance means:

//The child class provides its own version of a method
//That already exists in the parent class

//So the child method replaces (overrides) the parent method when called on a child object.

// parent class
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}


// Child class overriding the method:
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let dog1=new Dog();
dog1.speak()

