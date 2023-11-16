// Vehicles.ts

import { Observer, TrafficLight } from './TrafficLight';

abstract class Vehicle implements Observer {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  update(signal: string): void {
    console.log(`${this.type} a reçu le signal : ${signal}`);
    this.reactToSignal(signal);
  }

  abstract reactToSignal(signal: string): void;
}

export class Car extends Vehicle {
  constructor() {
    super('Voiture');
  }

  reactToSignal(signal: string): void {
    console.log(`La ${this.type} réagit au signal : ${signal}`);
  }
}

export class Bicycle extends Vehicle {
  constructor() {
    super('Vélo');
  }

  reactToSignal(signal: string): void {
    console.log(`Le ${this.type} réagit au signal : ${signal}`);
  }
}

export class Ambulance extends Vehicle {
  constructor() {
    super('Ambulance');
  }

  reactToSignal(signal: string): void {
    console.log(`L'${this.type} réagit au signal : ${signal}`);
  }
}
