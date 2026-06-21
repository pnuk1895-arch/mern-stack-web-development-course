// parent class 
class car{
    constructor(brand,speed,price)
    {
        this.brand=brand;
        this.speed=speed;
        this.price=price;
    }

    start(userspeed=this.speed)
    {   this.speed=userspeed
        console.log(`your car is running at ${this.speed}km/h`)
    }

    stop()
    {
        console.log("your car has been stopped")
    }

}

let car1=new car("mercedes",360,39000)

//car1.start(500)

// child class 
class sportscar extends car{
          constructor(turbo,brand,speed,price)
          {   
              super(brand,speed,price)
              this.turbo=turbo
          }

          
}


let bmw=new sportscar(true,"bmw",450,1000000)
console.log(bmw)

