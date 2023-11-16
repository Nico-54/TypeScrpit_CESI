import { Mario } from "./controller/mario";
import { JumpController } from "./controller/jump";
import { HitController } from "./controller/hit";


    const mario = new Mario();

    const jumpController = new JumpController(mario);
    const hitController = new HitController(mario);

    // Simulate jump event
    const jumpResult = jumpController.simulateEvent();

    // Simulate hit event
    const hitResult = hitController.simulateEvent();

console.log(jumpResult);
console.log(hitResult);