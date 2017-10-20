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
import { EntityOnMapComponent } from '../../services/entity-on-map/entity-on-map.component';
import { PointDrawerService } from '../../services/drawers/point-drawer/point-drawer.service';
var AcPointComponent = (function (_super) {
    __extends(AcPointComponent, _super);
    function AcPointComponent(pointDrawer) {
        return _super.call(this, pointDrawer) || this;
    }
    AcPointComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ac-point',
                    template: '',
                },] },
    ];
    AcPointComponent.ctorParameters = function () { return [
        { type: PointDrawerService, },
    ]; };
    return AcPointComponent;
}(EntityOnMapComponent));
export { AcPointComponent };
//# sourceMappingURL=ac-point.component.js.map