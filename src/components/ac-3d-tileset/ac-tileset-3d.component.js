import { Component, Input } from '@angular/core';
import { CesiumService } from '../../services/cesium/cesium.service';
import { Checker } from '../../utils/checker';
var AcTileset3dComponent = (function () {
    function AcTileset3dComponent(cesiumService) {
        this.cesiumService = cesiumService;
        this.options = {};
        this.show = true;
        this._layerInstance = null;
    }
    AcTileset3dComponent.prototype.ngOnInit = function () {
        if (!Checker.present(this.options.url)) {
            throw new Error('Options must have a url');
        }
        this._3dtilesCollection = new Cesium.PrimitiveCollection();
        this.cesiumService.getScene().primitives.add(this._3dtilesCollection);
        if (this.show) {
            this._layerInstance = this._3dtilesCollection.add(new Cesium.Cesium3DTileset(this.options), this.index);
        }
    };
    AcTileset3dComponent.prototype.ngOnChanges = function (changes) {
        if (changes['show'] && !changes['show'].isFirstChange()) {
            var showValue = changes['show'].currentValue;
            if (showValue) {
                if (this._layerInstance) {
                    this._3dtilesCollection.add(this._layerInstance, this.index);
                }
                else {
                    this._layerInstance = this._3dtilesCollection.add(new Cesium.Cesium3DTileset(this.options), this.index);
                }
            }
            else if (this._layerInstance) {
                this._3dtilesCollection.remove(this._layerInstance, false);
            }
        }
    };
    AcTileset3dComponent.prototype.ngOnDestroy = function () {
        if (this._layerInstance) {
            this._3dtilesCollection.remove(this._layerInstance, false);
        }
    };
    AcTileset3dComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ac-3d-tile-layer',
                    template: '',
                },] },
    ];
    AcTileset3dComponent.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    AcTileset3dComponent.propDecorators = {
        'options': [{ type: Input },],
        'index': [{ type: Input },],
        'show': [{ type: Input },],
    };
    return AcTileset3dComponent;
}());
export { AcTileset3dComponent };
//# sourceMappingURL=ac-tileset-3d.component.js.map