import { Person } from "./personClass";
import { pilotType } from "./enums";

export class Pilot extends Person {
    private _flightHours: number;
    public type: string;

    constructor(name: string, age: number, flightHours: number, type: number) {
        super(name, age);
        this._flightHours = flightHours;
        this.type = pilotType[type];
    }

    get flightHours() {
        return this._flightHours;
    }

    set flightHours(flightHours: number) {
        this._flightHours = flightHours;
    }

    public addFlightHours(hours: number): this {
        this._flightHours += hours;
        return this;
    }

    public printPilotDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, FlightHours: ${this._flightHours}, Type: ${this.type}`
    }
}
