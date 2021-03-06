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
import { Injectable } from '@angular/core';
import { PrimitivesDrawerService } from '../primitives-drawer/primitives-drawer.service';
import { CesiumService } from '../../cesium/cesium.service';
var PointDrawerService = (function (_super) {
    __extends(PointDrawerService, _super);
    function PointDrawerService(cesiumService) {
        return _super.call(this, Cesium.PointPrimitiveCollection, cesiumService) || this;
    }
    PointDrawerService.decorators = [
        { type: Injectable },
    ];
    PointDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PointDrawerService;
}(PrimitivesDrawerService));
export { PointDrawerService };
//# sourceMappingURL=point-drawer.service.js.map