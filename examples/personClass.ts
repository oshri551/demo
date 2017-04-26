export class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
        this.ageInterval();
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set name(name: string) {
        this._name = name;
    }

    set age(age: number) {
        this._age = age;
    }

    private ageInterval() {
        setInterval(() => this._age++, 3000);
    }

    public personInformation(): string {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}