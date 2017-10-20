import { Input } from '@angular/core';
var EntityOnMapComponent = (function () {
    function EntityOnMapComponent(_drawer) {
        this._drawer = _drawer;
    }
    EntityOnMapComponent.prototype.ngOnInit = function () {
        this.selfPrimitiveIsDraw = false;
        this.drawOnMap();
    };
    EntityOnMapComponent.prototype.ngOnChanges = function (changes) {
        var props = changes['props'];
        if (props.currentValue !== props.previousValue) {
            this.updateOnMap();
        }
    };
    EntityOnMapComponent.prototype.drawOnMap = function () {
        this.selfPrimitiveIsDraw = true;
        return this.selfPrimitive = this._drawer.add(this.props);
    };
    EntityOnMapComponent.prototype.removeFromMap = function () {
        this.selfPrimitiveIsDraw = false;
        return this._drawer.remove(this.selfPrimitive);
    };
    EntityOnMapComponent.prototype.updateOnMap = function () {
        if (this.selfPrimitiveIsDraw) {
            return this._drawer.update(this.selfPrimitive, this.props);
        }
    };
    EntityOnMapComponent.prototype.ngOnDestroy = function () {
        this.removeFromMap();
    };
    EntityOnMapComponent.propDecorators = {
        'props': [{ type: Input },],
    };
    return EntityOnMapComponent;
}());
export { EntityOnMapComponent };
//# sourceMappingURL=entity-on-map.component.js.map