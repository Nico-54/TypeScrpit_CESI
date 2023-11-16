// Pedestrian.ts

import { Observer } from './TrafficLight';

export class Pedestrian implements Observer {
  update(signal: string): void {
    console.log(`Le piéton a reçu le signal : ${signal}`);
    this.reactToSignal(signal);
  }

  reactToSignal(signal: string): void {
    console.log(`Le piéton réagit au signal : ${signal}`);
  }
}
