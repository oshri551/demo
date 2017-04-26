import { Phone, flightTicket } from "./interface";

const Max: number = 3000;
// Max = 2000;
let isReady: boolean = true;
let date: Date;
let number: number;
let firstName: string;

//union type
let numOrString: string | number;

//intersection type
function intersectionDemo(tmp: Phone & flightTicket) {
    tmp.manufacturer = "Samsung";
}
