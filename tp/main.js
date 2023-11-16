"use strict";
// Main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var TrafficLight_1 = require("./TrafficLight");
var Vehicles_1 = require("./Vehicles");
var Pedestrian_1 = require("./Pedestrian");
var trafficLight = new TrafficLight_1.TrafficLight();
var car = new Vehicles_1.Car();
var bicycle = new Vehicles_1.Bicycle();
var ambulance = new Vehicles_1.Ambulance();
var pedestrian = new Pedestrian_1.Pedestrian();
trafficLight.addObserver(car);
trafficLight.addObserver(bicycle);
trafficLight.addObserver(ambulance);
trafficLight.addObserver(pedestrian);
trafficLight.changeState('Vert');
trafficLight.changeState('Orange');
trafficLight.changeState('Rouge');
