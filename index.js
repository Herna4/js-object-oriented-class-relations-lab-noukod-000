let store = {drivers: [], trips: [], passengers: []}

let driverId = 0;
let tripId = 0;
let passengerId = 0;


<<<<<<< HEAD
class Driver {
    constructor(name){
        this.id = ++driverId;
        this.name = name;
     
        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }

    passengers() {
        return this.trips().map(trip => trip.passenger());
    }
}

class Passenger{
    constructor(name){
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    }

    trips(){
        return store.trips.filter(trip => trip.passengerId === this.id);
    }

    drivers(){
        return this.trips().map(trip => trip.driver());
    }
}
class Trip{
    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = ++tripId;

        store.trips.push(this);
    }

    driver(){
        return store.drivers.find(driver => driver.id === this.driverId);
    }

    passenger(){
        return store.passengers.find(function(passenger){
            return passenger.id === this.passengerId;
        }.bind(this));
    }
}



























=======
class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name
  }
  
  setTrip(trip){
    this.driverId = driver.id
  }
 
}
>>>>>>> 30000b27927b7e6801d89e583f8245389e0e35ed
