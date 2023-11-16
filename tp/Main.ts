// Main.ts

import { TrafficLight } from './TrafficLight';
import { Car, Bicycle, Ambulance } from './Vehicles';
import { Pedestrian } from './Pedestrian';

const trafficLight = new TrafficLight();
const car = new Car();
const bicycle = new Bicycle();
const ambulance = new Ambulance();
const pedestrian = new Pedestrian();

trafficLight.addObserver(car);
trafficLight.addObserver(bicycle);
trafficLight.addObserver(ambulance);
trafficLight.addObserver(pedestrian);

trafficLight.changeState('Vert');
trafficLight.changeState('Orange');
trafficLight.changeState('Rouge');
