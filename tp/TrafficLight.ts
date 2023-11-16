// TrafficLight.ts

export interface Observer {
    update(signal: string): void;
  }
  
  export class TrafficLight {
    private observers: Observer[] = [];
    private currentState: string = '';
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    changeState(newState: string): void {
      this.currentState = newState;
      console.log(`Feu tricolore: ${this.currentState}`);
      this.notifyObservers();
    }
  
    private notifyObservers(): void {
      this.observers.forEach(observer => {
        observer.update(this.currentState);
      });
    }
  }
  