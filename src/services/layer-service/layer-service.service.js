import { Injectable } from '@angular/core';
var LayerService = (function () {
    function LayerService() {
        this.descriptions = [];
    }
    LayerService.prototype.registerDescription = function (descriptionComponent) {
        this.descriptions.push(descriptionComponent);
    };
    LayerService.prototype.unregisterDescription = function (descriptionComponent) {
        var index = this.descriptions.indexOf(descriptionComponent);
        if (index > -1) {
            this.descriptions.splice(index, 1);
        }
    };
    LayerService.prototype.getDescriptions = function () {
        return this.descriptions;
    };
    LayerService.decorators = [
        { type: Injectable },
    ];
    LayerService.ctorParameters = function () { return []; };
    return LayerService;
}());
export { LayerService };
//# sourceMappingURL=layer-service.service.js.map