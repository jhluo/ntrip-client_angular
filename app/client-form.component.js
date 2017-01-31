"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClientFormComponent = (function () {
    function ClientFormComponent() {
        this.submitted = false;
    }
    ClientFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    ClientFormComponent.prototype.getMountPt = function (host, port, user, password) {
        console.log("Getting mount points from " + host.value + " at " + port.value);
        alert("Getting mount points from " + host.value + " at " + port.value);
    };
    Object.defineProperty(ClientFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.client); },
        enumerable: true,
        configurable: true
    });
    return ClientFormComponent;
}());
ClientFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'client-form',
        //host: //mark up for this  element
        templateUrl: 'client-form.component.html'
    })
], ClientFormComponent);
exports.ClientFormComponent = ClientFormComponent;
//# sourceMappingURL=client-form.component.js.map