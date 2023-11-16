"use strict";
// Pedestrian.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedestrian = void 0;
var Pedestrian = /** @class */ (function () {
    function Pedestrian() {
    }
    Pedestrian.prototype.update = function (signal) {
        console.log("Le pi\u00E9ton a re\u00E7u le signal : ".concat(signal));
        this.reactToSignal(signal);
    };
    Pedestrian.prototype.reactToSignal = function (signal) {
        console.log("Le pi\u00E9ton r\u00E9agit au signal : ".concat(signal));
    };
    return Pedestrian;
}());
exports.Pedestrian = Pedestrian;
