"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CasterFormComponent = (function () {
    function CasterFormComponent() {
        this.submitted = false;
    }
    CasterFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(CasterFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.caster); },
        enumerable: true,
        configurable: true
    });
    CasterFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'caster-form',
            templateUrl: 'caster-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CasterFormComponent);
    return CasterFormComponent;
}());
exports.CasterFormComponent = CasterFormComponent;
//# sourceMappingURL=caster-form.component.js.map