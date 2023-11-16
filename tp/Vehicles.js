"use strict";
// Vehicles.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ambulance = exports.Bicycle = exports.Car = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(type) {
        this.type = type;
    }
    Vehicle.prototype.update = function (signal) {
        console.log("".concat(this.type, " a re\u00E7u le signal : ").concat(signal));
        this.reactToSignal(signal);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this, 'Voiture') || this;
    }
    Car.prototype.reactToSignal = function (signal) {
        console.log("La ".concat(this.type, " r\u00E9agit au signal : ").concat(signal));
    };
    return Car;
}(Vehicle));
exports.Car = Car;
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle() {
        return _super.call(this, 'Vélo') || this;
    }
    Bicycle.prototype.reactToSignal = function (signal) {
        console.log("Le ".concat(this.type, " r\u00E9agit au signal : ").concat(signal));
    };
    return Bicycle;
}(Vehicle));
exports.Bicycle = Bicycle;
var Ambulance = /** @class */ (function (_super) {
    __extends(Ambulance, _super);
    function Ambulance() {
        return _super.call(this, 'Ambulance') || this;
    }
    Ambulance.prototype.reactToSignal = function (signal) {
        console.log("L'".concat(this.type, " r\u00E9agit au signal : ").concat(signal));
    };
    return Ambulance;
}(Vehicle));
exports.Ambulance = Ambulance;
