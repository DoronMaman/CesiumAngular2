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
import { WallDrawerService } from '../../services/drawers/wall-dawer/wall-drawer.service';
var AcWallDescComponent = (function (_super) {
    __extends(AcWallDescComponent, _super);
    function AcWallDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcWallDescComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ac-wall-desc',
                    template: ''
                },] },
    ];
    AcWallDescComponent.ctorParameters = function () { return [
        { type: WallDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcWallDescComponent;
}(BasicDesc));
export { AcWallDescComponent };
//# sourceMappingURL=ac-wall-desc.component.js.map