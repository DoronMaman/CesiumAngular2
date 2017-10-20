var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { BasicDesc } from '../../services/basic-desc/basic-desc.service';
import { LayerService } from '../../services/layer-service/layer-service.service';
import { ComputationCache } from '../../services/computation-cache/computation-cache.service';
import { CesiumProperties } from '../../services/cesium-properties/cesium-properties.service';
import { ModelDrawerService } from '../../services/drawers/model-drawer/model-drawer.service';
var AcModelDescComponent = (function (_super) {
    __extends(AcModelDescComponent, _super);
    function AcModelDescComponent(modelDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, modelDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcModelDescComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ac-model-desc',
                    template: ''
                },] },
    ];
    AcModelDescComponent.ctorParameters = function () { return [
        { type: ModelDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcModelDescComponent;
}(BasicDesc));
export { AcModelDescComponent };
//# sourceMappingURL=ac-model-desc.component.js.map