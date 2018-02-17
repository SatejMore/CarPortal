"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var carinfofilter = /** @class */ (function () {
    function carinfofilter() {
    }
    carinfofilter.prototype.transform = function (inputArray, searchstring) {
        searchstring = searchstring ? searchstring.toLowerCase() : null;
        return searchstring ?
            inputArray.filter(function (car) { return car.brand.toLowerCase().indexOf(searchstring) != -1; }) : inputArray;
    };
    carinfofilter = __decorate([
        core_1.Pipe({
            name: 'carfilter'
        })
    ], carinfofilter);
    return carinfofilter;
}());
exports.carinfofilter = carinfofilter;
//# sourceMappingURL=carinfo.pipe.js.map