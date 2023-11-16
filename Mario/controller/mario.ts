export class Mario {
    private name: string;

    constructor() {
        this.name = "Mario";
    }

    jump(): string{
        console.log(`${this.name} is jumping!`);
        return "Hit";
    }

    hit(): string {
        console.log(`${this.name} got hit!`);
        return "Jump"
    }
}
