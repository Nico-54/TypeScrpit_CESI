"use strict";
// TrafficLight.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
var TrafficLight = /** @class */ (function () {
    function TrafficLight() {
        this.observers = [];
        this.currentState = '';
    }
    TrafficLight.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    TrafficLight.prototype.changeState = function (newState) {
        this.currentState = newState;
        console.log("Feu tricolore: ".concat(this.currentState));
        this.notifyObservers();
    };
    TrafficLight.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.currentState);
        });
    };
    return TrafficLight;
}());
exports.TrafficLight = TrafficLight;
