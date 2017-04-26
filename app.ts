import { Person, Pilot } from "./examples";

let p1 = new Person("Oshri", 33);
let p2 = new Pilot("Dan", 30, 3000, 2);

console.log(p1.personInformation());
console.log(p2.printPilotDetails());