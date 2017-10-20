import { Component, ElementRef, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CesiumService } from '../../services/cesium/cesium.service';
import { BillboardDrawerService } from '../../services/drawers/billboard-drawer/billboard-drawer.service';
import { MapEventsManagerService } from '../../services/map-events-mananger/map-events-manager';
import { CesiumEventBuilder } from '../../services/map-events-mananger/cesium-event-builder';
import { PlonterService } from '../../services/plonter/plonter.service';
import { LabelDrawerService } from '../../services/drawers/label-drawer/label-drawer.service';
import { PolylineDrawerService } from '../../services/drawers/polyline-drawer/polyline-drawer.service';
import { PointDrawerService } from '../../services/drawers/point-drawer/point-drawer.service';
import { ArcDrawerService } from '../../services/drawers/arc-drawer/arc-drawer.service';
import { MapsManagerService } from '../../services/maps-manager/maps-manager.service';
import { EllipseDrawerService } from '../../services/drawers/ellipse-drawer/ellipse-drawer.service';
import { PolygonDrawerService } from '../../services/drawers/polygon-drawer/polygon-drawer.service';
import { KeyboardControlService } from '../../services/keyboard-control/keyboard-control.service';
import { CameraService } from '../../services/camera/camera.service';
import { MapLayersService } from '../../services/map-layers/map-layers.service';
import { ConfigurationService } from '../../cesium-enhancements/ConfigurationService';
var AcMapComponent = (function () {
    function AcMapComponent(_cesiumService, _cameraService, _elemRef, document, mapsManagerService, billboardDrawerService, labelDrawerService, ellipseDrawerService, polylineDrawerService, polygonDrawerService, arcDrawerService, pointDrawerService, mapEventsManager, keyboardControlService, mapLayersService, configurationService) {
        this._cesiumService = _cesiumService;
        this._cameraService = _cameraService;
        this._elemRef = _elemRef;
        this.document = document;
        this.mapsManagerService = mapsManagerService;
        this.billboardDrawerService = billboardDrawerService;
        this.labelDrawerService = labelDrawerService;
        this.ellipseDrawerService = ellipseDrawerService;
        this.polylineDrawerService = polylineDrawerService;
        this.polygonDrawerService = polygonDrawerService;
        this.arcDrawerService = arcDrawerService;
        this.pointDrawerService = pointDrawerService;
        this.mapEventsManager = mapEventsManager;
        this.keyboardControlService = keyboardControlService;
        this.mapLayersService = mapLayersService;
        this.configurationService = configurationService;
        this.disableDefaultPlonter = false;
        this.mapContainer = this.document.createElement('div');
        this.mapContainer.className = 'map-container';
        this._elemRef.nativeElement.appendChild(this.mapContainer);
        this._cesiumService.init(this.mapContainer);
        this._cameraService.init(this._cesiumService);
    }
    AcMapComponent.prototype.ngOnInit = function () {
        this.mapsManagerService.registerMap(this.id, this);
        this.mapEventsManager.init();
        this.billboardDrawerService.init();
        this.labelDrawerService.init();
        this.ellipseDrawerService.init();
        this.polylineDrawerService.init();
        this.polygonDrawerService.init();
        this.arcDrawerService.init();
        this.pointDrawerService.init();
        this.keyboardControlService.init();
    };
    AcMapComponent.prototype.ngOnChanges = function (changes) {
        if (changes['sceneMode']) {
            this._cameraService.setSceneMode(changes['sceneMode'].currentValue);
        }
        if (changes['flyTo']) {
            this._cameraService.cameraFlyTo(changes['flyTo'].currentValue);
        }
    };
    AcMapComponent.prototype.ngAfterViewInit = function () {
        this.mapLayersService.drawAllLayers();
    };
    AcMapComponent.prototype.getCesiumSerivce = function () {
        return this._cesiumService;
    };
    AcMapComponent.prototype.getCesiumViewer = function () {
        return this._cesiumService.getViewer();
    };
    AcMapComponent.prototype.getCameraService = function () {
        return this._cameraService;
    };
    AcMapComponent.prototype.getId = function () {
        return this.id;
    };
    AcMapComponent.prototype.getMapEventsManager = function () {
        return this.mapEventsManager;
    };
    AcMapComponent.prototype.getKeyboardControlService = function () {
        return this.keyboardControlService;
    };
    AcMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ac-map',
                    template: "\n      <ac-default-plonter *ngIf=\"!disableDefaultPlonter\"></ac-default-plonter>\n      <ng-content></ng-content>",
                    providers: [
                        CesiumService,
                        BillboardDrawerService,
                        CesiumEventBuilder,
                        KeyboardControlService,
                        MapEventsManagerService,
                        PlonterService,
                        LabelDrawerService,
                        PolylineDrawerService,
                        EllipseDrawerService,
                        PointDrawerService,
                        ArcDrawerService,
                        PolygonDrawerService,
                        MapLayersService,
                        CameraService,
                    ]
                },] },
    ];
    AcMapComponent.ctorParameters = function () { return [
        { type: CesiumService, },
        { type: CameraService, },
        { type: ElementRef, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: MapsManagerService, },
        { type: BillboardDrawerService, },
        { type: LabelDrawerService, },
        { type: EllipseDrawerService, },
        { type: PolylineDrawerService, },
        { type: PolygonDrawerService, },
        { type: ArcDrawerService, },
        { type: PointDrawerService, },
        { type: MapEventsManagerService, },
        { type: KeyboardControlService, },
        { type: MapLayersService, },
        { type: ConfigurationService, },
    ]; };
    AcMapComponent.propDecorators = {
        'disableDefaultPlonter': [{ type: Input },],
        'id': [{ type: Input },],
        'flyTo': [{ type: Input },],
        'sceneMode': [{ type: Input },],
    };
    return AcMapComponent;
}());
export { AcMapComponent };
//# sourceMappingURL=ac-map.component.js.map