// inheritence in class:Class inheritance in JavaScript means one class (child) can acquire the properties and methods of another class (parent) using the extends keyword.

//Child class = subclass
//Parent class = superclass

class Car {

  constructor(brand,speed,price) {
    this.brand=brand;
    this.speed = speed;
    this.price= price;
  }

  start(speed) {
    this.speed=speed
    console.log(`${this.brand} is running at ${this.speed}km/h...`);
  }
  stop() {
    console.log(`${this.brand} car is stopping...`);
  }
}


//Sports car has all features of Car + extra:

class sportsCar extends Car {
  constructor(brand,speed,price,turbo=false) {
    super(brand,speed, price);   // Inherit properties from Car
     this.myturbo = turbo;        // special property
  }

  activateTurbo() {
    this.turbo=true
    console.log(`${this.brand} activated succesffully`);
  }

  deactivateTurbo()
  {   
      this.turbo=false
      console.log(`${this.brand} is deactivated successfully`)
  }

  isActivated()
  {  if(this.turbo==false)
     console.log("your turbo is currently deactivated")
     else
     console.log("your turbo is currently activated ")
  }

  

}


let bmw=new sportsCar("bmw",200,39000,true)
bmw.deactivateTurbo()
bmw.isActivated()
bmw.activateTurbo()
bmw.isActivated()
bmw.start(40)


