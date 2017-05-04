import { Person, Phone, Pilot, flightTicket } from "./examples";

let p1: Person = new Person("Oshri", 33);
let p2 = new Pilot("Dan", 30, 3000, 2);

let tst = {
    a: 1,
    b: 2
}

console.log(p1.personInformation());