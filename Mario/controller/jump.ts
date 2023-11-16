import { Mario } from "../mario";

export class JumpController {
    private character: Mario;

    constructor(character: Mario) {
        this.character = character;
    }

    simulateEvent(): void {
        console.log("Simulating jump event.");
        this.character.jump();
    }
}
