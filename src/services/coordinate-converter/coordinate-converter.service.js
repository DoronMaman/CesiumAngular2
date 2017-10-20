var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Injectable, Optional } from '@angular/core';
import { CesiumService } from '../cesium/cesium.service';
import * as geodesy from 'geodesy';
var UTM = geodesy.Utm;
var LatLonEllipsoidal = geodesy.LatLonEllipsoidal;
var CoordinateConverter = (function () {
    function CoordinateConverter(cesiumService) {
        this.cesiumService = cesiumService;
    }
    CoordinateConverter.prototype.screenToCartesian3 = function (screenPos, addMapCanvansBoundsToPos) {
        if (!this.cesiumService) {
            throw new Error('ANGULAR2-CESIUM - Cesium service should be provided in order to do screen position calculations');
        }
        else {
            var screenPosition = __assign({}, screenPos);
            if (addMapCanvansBoundsToPos) {
                var mapBounds = this.cesiumService.getViewer().canvas.getBoundingClientRect();
                screenPosition.x += mapBounds.left;
                screenPosition.y += mapBounds.top;
            }
            var camera = this.cesiumService.getViewer().camera;
            return camera.pickEllipsoid(screenPosition);
        }
    };
    CoordinateConverter.prototype.screenToCartographic = function (screenPos, ellipsoid) {
        return this.cartesian3ToCartographic(this.screenToCartesian3(screenPos), ellipsoid);
    };
    CoordinateConverter.prototype.cartesian3ToCartographic = function (cartesian, ellipsoid) {
        return Cesium.Cartographic.fromCartesian(cartesian, ellipsoid);
    };
    CoordinateConverter.prototype.degreesToCartographic = function (longitude, latitude, height) {
        return Cesium.Cartographic.fromDegrees(longitude, latitude, height);
    };
    CoordinateConverter.prototype.radiansToCartographic = function (longitude, latitude, height) {
        return Cesium.Cartographic.fromRadians(longitude, latitude, height);
    };
    CoordinateConverter.prototype.degreesToUTM = function (longitude, latitude, height) {
        return new LatLonEllipsoidal(latitude, longitude, undefined, height).toUtm();
    };
    CoordinateConverter.prototype.UTMToDegrees = function (zone, hemisphere, easting, northing) {
        return this.geodesyToCesiumObject(new UTM(zone, hemisphere, easting, northing).toLatLonE());
    };
    CoordinateConverter.prototype.geodesyToCesiumObject = function (geodesyRadians) {
        return {
            longitude: geodesyRadians.lon,
            latitude: geodesyRadians.lat,
            height: geodesyRadians.height ? geodesyRadians.height : 0
        };
    };
    CoordinateConverter.decorators = [
        { type: Injectable },
    ];
    CoordinateConverter.ctorParameters = function () { return [
        { type: CesiumService, decorators: [{ type: Optional },] },
    ]; };
    return CoordinateConverter;
}());
export { CoordinateConverter };
//# sourceMappingURL=coordinate-converter.service.js.map