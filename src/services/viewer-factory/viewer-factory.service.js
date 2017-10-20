import { Injectable } from '@angular/core';
var ViewerFactory = (function () {
    function ViewerFactory() {
        this.cesium = Cesium;
    }
    ViewerFactory.prototype.createViewer = function (mapContainer, options) {
        if (!window['CESIUM_BASE_URL']) {
            window['CESIUM_BASE_URL'] = '/node_modules/cesium/Build/Cesium';
        }
        var viewer = null;
        if (options) {
            viewer = new this.cesium.Viewer(mapContainer, options);
        }
        else {
            viewer = new this.cesium.Viewer(mapContainer, {
                imageryProvider: Cesium.createTileMapServiceImageryProvider({
                    url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
                }),
                baseLayerPicker: false,
                geocoder: false
            });
        }
        return viewer;
    };
    ViewerFactory.decorators = [
        { type: Injectable },
    ];
    ViewerFactory.ctorParameters = function () { return []; };
    return ViewerFactory;
}());
export { ViewerFactory };
//# sourceMappingURL=viewer-factory.service.js.map