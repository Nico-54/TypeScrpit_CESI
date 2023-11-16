import { Mario } from "../mario";

export class HitController {
    private character: Mario;

    constructor(character: Mario) {
        this.character = character;
    }

    simulateEvent(): void {
        console.log("Simulating hit event.");
        this.character.hit();
    }
}
