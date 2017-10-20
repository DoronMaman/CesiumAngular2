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
import { CesiumService } from '../../cesium/cesium.service';
import { StaticPrimitiveDrawer } from '../static-dynamic/static-primitive-drawer/static-primitive-drawer.service';
var ArcDrawerService = (function (_super) {
    __extends(ArcDrawerService, _super);
    function ArcDrawerService(cesiumService) {
        return _super.call(this, Cesium.PolylineGeometry, cesiumService) || this;
    }
    ArcDrawerService.prototype.add = function (geometryProps, instanceProps, primitiveProps) {
        geometryProps.positions = this.generatePositions(geometryProps);
        return _super.prototype.add.call(this, geometryProps, instanceProps, primitiveProps);
    };
    ArcDrawerService.prototype.generatePositions = function (cesiumProps) {
        var arcPositions = [];
        var defaultGranularity = 0.004;
        var numOfSamples = 1 / (cesiumProps.granularity || defaultGranularity);
        for (var i = 0; i < numOfSamples + 1; i++) {
            var currentAngle = cesiumProps.angle + cesiumProps.delta * i / numOfSamples;
            var distance = cesiumProps.radius / Cesium.Ellipsoid.WGS84.maximumRadius;
            var curLat = Cesium.Cartographic.fromCartesian(cesiumProps.center).latitude;
            var curLon = Cesium.Cartographic.fromCartesian(cesiumProps.center).longitude;
            var destinationLat = Math.asin(Math.sin(curLat) * Math.cos(distance) +
                Math.cos(curLat) * Math.sin(distance) * Math.cos(currentAngle));
            var destinationLon = curLon + Math.atan2(Math.sin(currentAngle) * Math.sin(distance) * Math.cos(curLat), Math.cos(distance) - Math.sin(curLat) * Math.sin(destinationLat));
            destinationLon = (destinationLon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
            arcPositions.push(Cesium.Cartesian3.fromRadians(destinationLon, destinationLat));
        }
        return arcPositions;
    };
    ArcDrawerService.prototype.update = function (primitive, geometryProps, instanceProps, primitiveProps) {
        if (instanceProps && instanceProps.attributes && instanceProps.attributes.color) {
            var color_1 = instanceProps.attributes.color.value;
            if (primitive.ready) {
                primitive.getGeometryInstanceAttributes().color = color_1;
            }
            else {
                Cesium.when(primitive.readyPromise).then(function (readyPrimitive) {
                    readyPrimitive.getGeometryInstanceAttributes().color.value = color_1;
                });
            }
        }
        if (primitiveProps.appearance) {
            primitive.appearance = primitiveProps.appearance;
        }
        return primitive;
    };
    ArcDrawerService.decorators = [
        { type: Injectable },
    ];
    ArcDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return ArcDrawerService;
}(StaticPrimitiveDrawer));
export { ArcDrawerService };
//# sourceMappingURL=arc-drawer.service.js.map