(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/add/operator/filter'), require('rxjs/add/operator/map'), require('rxjs/add/observable/of'), require('rxjs/add/operator/switchMap'), require('rxjs/add/operator/takeUntil'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/delay'), require('rxjs/add/operator/publish'), require('rxjs/add/operator/merge'), require('rxjs/add/operator/do'), require('rxjs/add/observable/from'), require('rxjs/add/observable/merge'), require('@angular/core'), require('@angular/common'), require('rxjs/Subject'), require('rxjs/Observable'), require('util'), require('primitive-primitives'), require('json-string-mapper'), require('angular2parse'), require('geodesy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', 'rxjs/add/observable/of', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/takeUntil', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/delay', 'rxjs/add/operator/publish', 'rxjs/add/operator/merge', 'rxjs/add/operator/do', 'rxjs/add/observable/from', 'rxjs/add/observable/merge', '@angular/core', '@angular/common', 'rxjs/Subject', 'rxjs/Observable', 'util', 'primitive-primitives', 'json-string-mapper', 'angular2parse', 'geodesy'], factory) :
	(factory((global.angularCesium = global.angularCesium || {}),global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observabl,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,null,global.Rx.Observable,global.Rx.Observable,global.ng.core,global.ng.common,global.Rx,global.Rx,global.util,global.primitive_primitives,global.jsonStringMapper,global.ng.parse,global.geodesy));
}(this, (function (exports,rxjs_add_operator_filter,rxjs_add_operator_map,rxjs_add_observable_of,rxjs_add_operator_switchMap,rxjs_add_operator_takeUntil,rxjs_add_operator_mergeMap,rxjs_add_operator_delay,rxjs_add_operator_publish,rxjs_add_operator_merge,rxjs_add_operator_do,rxjs_add_observable_from,rxjs_add_observable_merge,_angular_core,_angular_common,rxjs_Subject,rxjs_Observable,util,primitivePrimitives,jsonStringMapper,angular2parse,geodesy) { 'use strict';

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
        { type: _angular_core.Injectable },
    ];
    ViewerFactory.ctorParameters = function () { return []; };
    return ViewerFactory;
}());

var ViewerConfiguration = (function () {
    function ViewerConfiguration() {
    }
    Object.defineProperty(ViewerConfiguration.prototype, "viewerOptions", {
        get: function () {
            return this._viewerOptions;
        },
        set: function (value) {
            this._viewerOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerConfiguration.prototype, "viewerModifier", {
        get: function () {
            return this._viewerModifier;
        },
        set: function (value) {
            this._viewerModifier = value;
        },
        enumerable: true,
        configurable: true
    });
    ViewerConfiguration.decorators = [
        { type: _angular_core.Injectable },
    ];
    ViewerConfiguration.ctorParameters = function () { return []; };
    return ViewerConfiguration;
}());

var CesiumService = (function () {
    function CesiumService(ngZone, viewerFactory, viewerConfiguration) {
        this.ngZone = ngZone;
        this.viewerFactory = viewerFactory;
        this.viewerConfiguration = viewerConfiguration;
    }
    CesiumService.prototype.init = function (mapContainer) {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            var options = _this.viewerConfiguration ? _this.viewerConfiguration.viewerOptions : undefined;
            _this.cesiumViewer = _this.viewerFactory.createViewer(mapContainer, options);
            if (_this.viewerConfiguration && _this.viewerConfiguration.viewerModifier &&
                typeof _this.viewerConfiguration.viewerModifier === 'function') {
                _this.viewerConfiguration.viewerModifier(_this.cesiumViewer);
            }
        });
    };
    CesiumService.prototype.getViewer = function () {
        return this.cesiumViewer;
    };
    CesiumService.prototype.getScene = function () {
        return this.cesiumViewer.scene;
    };
    CesiumService.prototype.getCanvas = function () {
        return this.cesiumViewer.canvas;
    };
    CesiumService.decorators = [
        { type: _angular_core.Injectable },
    ];
    CesiumService.ctorParameters = function () { return [
        { type: _angular_core.NgZone, },
        { type: ViewerFactory, },
        { type: ViewerConfiguration, decorators: [{ type: _angular_core.Optional },] },
    ]; };
    return CesiumService;
}());

var BasicDrawerService = (function () {
    function BasicDrawerService() {
    }
    BasicDrawerService.prototype.setPropsAssigner = function (assigner) {
        this._propsAssigner = assigner;
    };
    return BasicDrawerService;
}());

var GraphicsType;
(function (GraphicsType) {
    GraphicsType[GraphicsType["ellipse"] = Cesium.EllipseGraphics] = "ellipse";
    GraphicsType[GraphicsType["ellipsoid"] = Cesium.EllipsoidGraphics] = "ellipsoid";
    GraphicsType[GraphicsType["polygon"] = Cesium.PolygonGraphics] = "polygon";
    GraphicsType[GraphicsType["polyline"] = Cesium.PolylineGraphics] = "polyline";
    GraphicsType[GraphicsType["polylineVolume"] = Cesium.PolylineVolumeGraphics] = "polylineVolume";
    GraphicsType[GraphicsType["box"] = Cesium.BoxGraphics] = "box";
    GraphicsType[GraphicsType["corridor"] = Cesium.CorridorGraphics] = "corridor";
    GraphicsType[GraphicsType["cylinder"] = Cesium.CylinderGraphics] = "cylinder";
    GraphicsType[GraphicsType["label"] = Cesium.LabelGraphics] = "label";
    GraphicsType[GraphicsType["billboard"] = Cesium.BillboardGraphics] = "billboard";
    GraphicsType[GraphicsType["model"] = Cesium.ModelGraphics] = "model";
    GraphicsType[GraphicsType["path"] = Cesium.PathGraphics] = "path";
    GraphicsType[GraphicsType["point"] = Cesium.PointGraphics] = "point";
    GraphicsType[GraphicsType["rectangle"] = Cesium.RectangleGraphics] = "rectangle";
    GraphicsType[GraphicsType["wall"] = Cesium.WallGraphics] = "wall";
})(GraphicsType || (GraphicsType = {}));

var OptimizedEntityCollection = (function () {
    function OptimizedEntityCollection(entityCollection, collectionSize, updateRate) {
        if (collectionSize === void 0) { collectionSize = -1; }
        if (updateRate === void 0) { updateRate = -1; }
        this.entityCollection = entityCollection;
        this._isSuspended = false;
        this._isHardSuspend = false;
        this._updateRate = updateRate;
        this._collectionSize = collectionSize;
    }
    OptimizedEntityCollection.prototype.setShow = function (show) {
        this.entityCollection.show = show;
    };
    Object.defineProperty(OptimizedEntityCollection.prototype, "isSuspended", {
        get: function () {
            return this._isSuspended;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptimizedEntityCollection.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (value) {
            this._updateRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptimizedEntityCollection.prototype, "collectionSize", {
        get: function () {
            return this._collectionSize;
        },
        set: function (value) {
            this._collectionSize = value;
        },
        enumerable: true,
        configurable: true
    });
    OptimizedEntityCollection.prototype.collection = function () {
        return this.entityCollection;
    };
    OptimizedEntityCollection.prototype.isFree = function () {
        return this._collectionSize < 1 || this.entityCollection.values.length < this._collectionSize;
    };
    OptimizedEntityCollection.prototype.add = function (entity) {
        this.suspend();
        return this.entityCollection.add(entity);
    };
    OptimizedEntityCollection.prototype.remove = function (entity) {
        this.suspend();
        return this.entityCollection.remove(entity);
    };
    OptimizedEntityCollection.prototype.removeNoSuspend = function (entity) {
        this.entityCollection.remove(entity);
    };
    OptimizedEntityCollection.prototype.removeAll = function () {
        this.suspend();
        this.entityCollection.removeAll();
    };
    OptimizedEntityCollection.prototype.onEventSuspension = function (callback, once) {
        var _this = this;
        if (once === void 0) { once = false; }
        this._onEventSuspensionCallback = { callback: callback, once: once };
        return function () {
            _this._onEventSuspensionCallback = undefined;
        };
    };
    OptimizedEntityCollection.prototype.onEventResume = function (callback, once) {
        var _this = this;
        if (once === void 0) { once = false; }
        this._onEventResumeCallback = { callback: callback, once: once };
        if (!this._isSuspended) {
            this.triggerEventResume();
        }
        return function () {
            _this._onEventResumeCallback = undefined;
        };
    };
    OptimizedEntityCollection.prototype.triggerEventSuspension = function () {
        if (this._onEventSuspensionCallback !== undefined) {
            var callback = this._onEventSuspensionCallback.callback;
            if (this._onEventSuspensionCallback.once) {
                this._onEventSuspensionCallback = undefined;
            }
            callback();
        }
    };
    OptimizedEntityCollection.prototype.triggerEventResume = function () {
        if (this._onEventResumeCallback !== undefined) {
            var callback = this._onEventResumeCallback.callback;
            if (this._onEventResumeCallback.once) {
                this._onEventResumeCallback = undefined;
            }
            callback();
        }
    };
    OptimizedEntityCollection.prototype.suspend = function () {
        var _this = this;
        if (this._updateRate < 0) {
            return;
        }
        if (this._isHardSuspend) {
            return;
        }
        if (!this._isSuspended) {
            this._isSuspended = true;
            this.entityCollection.suspendEvents();
            this.triggerEventSuspension();
            this._suspensionTimeout = setTimeout(function () {
                _this.entityCollection.resumeEvents();
                _this.triggerEventResume();
                _this._isSuspended = false;
                _this._suspensionTimeout = undefined;
            }, this._updateRate);
        }
    };
    OptimizedEntityCollection.prototype.hardSuspend = function () {
        this.entityCollection.suspendEvents();
        this._isHardSuspend = true;
    };
    OptimizedEntityCollection.prototype.hardResume = function () {
        this.entityCollection.resumeEvents();
        this._isHardSuspend = false;
    };
    return OptimizedEntityCollection;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EntitiesDrawerService = (function (_super) {
    __extends$1(EntitiesDrawerService, _super);
    function EntitiesDrawerService(cesiumService, graphicsType, defaultOptions) {
        if (defaultOptions === void 0) { defaultOptions = {
            collectionMaxSize: -1,
            collectionSuspensionTime: -1,
            collectionsNumber: 1
        }; }
        var _this = _super.call(this) || this;
        _this.cesiumService = cesiumService;
        _this.graphicsType = graphicsType;
        _this.defaultOptions = defaultOptions;
        _this.entityCollections = new Map();
        _this.graphicsTypeName = GraphicsType[_this.graphicsType];
        return _this;
    }
    EntitiesDrawerService.prototype.getFreeEntitiesCollection = function () {
        var freeEntityCollection = null;
        this.entityCollections.forEach(function (entityCollection) {
            if (entityCollection.isFree()) {
                freeEntityCollection = entityCollection;
            }
        });
        return freeEntityCollection;
    };
    EntitiesDrawerService.prototype.init = function (options) {
        var finalOptions = options || this.defaultOptions;
        var dataSources = [];
        for (var i = 0; i < finalOptions.collectionsNumber; i++) {
            var dataSource = new Cesium.CustomDataSource();
            dataSources.push(dataSource);
            this.entityCollections.set(dataSource.entities, new OptimizedEntityCollection(dataSource.entities, finalOptions.collectionMaxSize, finalOptions.collectionSuspensionTime));
        }
        return dataSources;
    };
    EntitiesDrawerService.prototype.add = function (cesiumProps) {
        var optimizedEntityCollection = this.getFreeEntitiesCollection();
        if (optimizedEntityCollection === null) {
            throw new Error('No more free entity collections');
        }
        var graphicsClass = this.graphicsType;
        var entityObject = (_a = {
                position: cesiumProps.position !== undefined ? cesiumProps.position : undefined,
                show: cesiumProps.show !== undefined ? cesiumProps.show : true,
                description: cesiumProps.description !== undefined ? cesiumProps.description : undefined,
                orientation: cesiumProps.orientation !== undefined ? cesiumProps.orientation : undefined,
                viewFrom: cesiumProps.viewFrom !== undefined ? cesiumProps.viewFrom : undefined
            },
            _a[this.graphicsTypeName] = new graphicsClass(cesiumProps),
            _a);
        if (cesiumProps.name !== undefined) {
            entityObject.name = cesiumProps.name;
        }
        return optimizedEntityCollection.add(entityObject);
        var _a;
    };
    EntitiesDrawerService.prototype.update = function (entity, cesiumProps) {
        this.suspendEntityCollection(entity);
        entity.position = cesiumProps.position !== undefined ? cesiumProps.position : undefined;
        entity.show = cesiumProps.show !== undefined ? cesiumProps.show : entity.show;
        entity.name = cesiumProps.name !== undefined ? cesiumProps.name : entity.name;
        entity.description = cesiumProps.description !== undefined ? cesiumProps.description : entity.description;
        entity.orientation = cesiumProps.orientation !== undefined ? cesiumProps.orientation : entity.orientation;
        entity.viewFrom = cesiumProps.viewFrom !== undefined ? cesiumProps.viewFrom : entity.viewFrom;
        if (this._propsAssigner) {
            this._propsAssigner(entity[this.graphicsTypeName], cesiumProps);
        }
        else {
            Object.assign(entity[this.graphicsTypeName], cesiumProps);
        }
    };
    EntitiesDrawerService.prototype.remove = function (entity) {
        var optimizedEntityCollection = this.entityCollections.get(entity.entityCollection);
        optimizedEntityCollection.remove(entity);
    };
    EntitiesDrawerService.prototype.removeAll = function () {
        this.entityCollections.forEach(function (entityCollection) {
            entityCollection.removeAll();
        });
    };
    EntitiesDrawerService.prototype.setShow = function (showValue) {
        this.entityCollections.forEach(function (entityCollection) {
            entityCollection.setShow(showValue);
        });
    };
    EntitiesDrawerService.prototype.suspendEntityCollection = function (entity) {
        var id = entity.entityCollection;
        if (!this.entityCollections.has(id)) {
            throw new Error('No EntityCollection for entity.entityCollection');
        }
        var entityCollection = this.entityCollections.get(id);
        entityCollection.suspend();
    };
    EntitiesDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    EntitiesDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
        { type: GraphicsType, },
        null,
    ]; };
    return EntitiesDrawerService;
}(BasicDrawerService));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BillboardDrawerService = (function (_super) {
    __extends(BillboardDrawerService, _super);
    function BillboardDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.billboard) || this;
    }
    BillboardDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    BillboardDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return BillboardDrawerService;
}(EntitiesDrawerService));

(function (CesiumEvent) {
    CesiumEvent[CesiumEvent["MOUSE_MOVE"] = Cesium.ScreenSpaceEventType.MOUSE_MOVE] = "MOUSE_MOVE";
    CesiumEvent[CesiumEvent["LEFT_CLICK"] = Cesium.ScreenSpaceEventType.LEFT_CLICK] = "LEFT_CLICK";
    CesiumEvent[CesiumEvent["LEFT_DOUBLE_CLICK"] = Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK] = "LEFT_DOUBLE_CLICK";
    CesiumEvent[CesiumEvent["LEFT_DOWN"] = Cesium.ScreenSpaceEventType.LEFT_DOWN] = "LEFT_DOWN";
    CesiumEvent[CesiumEvent["LEFT_UP"] = Cesium.ScreenSpaceEventType.LEFT_UP] = "LEFT_UP";
    CesiumEvent[CesiumEvent["MIDDLE_CLICK"] = Cesium.ScreenSpaceEventType.MIDDLE_CLICK] = "MIDDLE_CLICK";
    CesiumEvent[CesiumEvent["MIDDLE_DOUBLE_CLICK"] = Cesium.ScreenSpaceEventType.MIDDLE_DOUBLE_CLICK] = "MIDDLE_DOUBLE_CLICK";
    CesiumEvent[CesiumEvent["MIDDLE_DOWN"] = Cesium.ScreenSpaceEventType.MIDDLE_DOWN] = "MIDDLE_DOWN";
    CesiumEvent[CesiumEvent["MIDDLE_UP"] = Cesium.ScreenSpaceEventType.MIDDLE_UP] = "MIDDLE_UP";
    CesiumEvent[CesiumEvent["PINCH_START"] = Cesium.ScreenSpaceEventType.PINCH_START] = "PINCH_START";
    CesiumEvent[CesiumEvent["PINCH_END"] = Cesium.ScreenSpaceEventType.PINCH_END] = "PINCH_END";
    CesiumEvent[CesiumEvent["PINCH_MOVE"] = Cesium.ScreenSpaceEventType.PINCH_MOVE] = "PINCH_MOVE";
    CesiumEvent[CesiumEvent["RIGHT_CLICK"] = Cesium.ScreenSpaceEventType.RIGHT_CLICK] = "RIGHT_CLICK";
    CesiumEvent[CesiumEvent["RIGHT_DOUBLE_CLICK"] = Cesium.ScreenSpaceEventType.RIGHT_DOUBLE_CLICK] = "RIGHT_DOUBLE_CLICK";
    CesiumEvent[CesiumEvent["RIGHT_DOWN"] = Cesium.ScreenSpaceEventType.RIGHT_DOWN] = "RIGHT_DOWN";
    CesiumEvent[CesiumEvent["RIGHT_UP"] = Cesium.ScreenSpaceEventType.RIGHT_UP] = "RIGHT_UP";
    CesiumEvent[CesiumEvent["WHEEL"] = Cesium.ScreenSpaceEventType.WHEEL] = "WHEEL";
    CesiumEvent[CesiumEvent["LONG_LEFT_PRESS"] = 110] = "LONG_LEFT_PRESS";
    CesiumEvent[CesiumEvent["LONG_RIGHT_PRESS"] = 111] = "LONG_RIGHT_PRESS";
    CesiumEvent[CesiumEvent["LONG_MIDDLE_PRESS"] = 112] = "LONG_MIDDLE_PRESS";
    CesiumEvent[CesiumEvent["LEFT_CLICK_DRAG"] = 113] = "LEFT_CLICK_DRAG";
    CesiumEvent[CesiumEvent["RIGHT_CLICK_DRAG"] = 114] = "RIGHT_CLICK_DRAG";
    CesiumEvent[CesiumEvent["MIDDLE_CLICK_DRAG"] = 115] = "MIDDLE_CLICK_DRAG";
})(exports.CesiumEvent || (exports.CesiumEvent = {}));

var CesiumPureEventObserver = (function () {
    function CesiumPureEventObserver(event, modifier) {
        this.event = event;
        this.modifier = modifier;
    }
    CesiumPureEventObserver.prototype.init = function (eventsHandler) {
        var _this = this;
        this.observer = rxjs_Observable.Observable.create(function (observer) {
            eventsHandler.setInputAction(function (movement) {
                if (movement.position) {
                    movement.startPosition = movement.position;
                    movement.endPosition = movement.position;
                }
                observer.next(movement);
            }, _this.event, _this.modifier);
        });
        return this.observer;
    };
    return CesiumPureEventObserver;
}());

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CesiumLongPressObserver = (function (_super) {
    __extends$2(CesiumLongPressObserver, _super);
    function CesiumLongPressObserver(event, modifier, eventFactory) {
        var _this = _super.call(this, event, modifier) || this;
        _this.event = event;
        _this.modifier = modifier;
        _this.eventFactory = eventFactory;
        return _this;
    }
    
    CesiumLongPressObserver.prototype.init = function () {
        var startEvent;
        var stopEvent;
        if (this.event === exports.CesiumEvent.LONG_LEFT_PRESS) {
            startEvent = exports.CesiumEvent.LEFT_DOWN;
            stopEvent = exports.CesiumEvent.LEFT_UP;
        }
        else if (this.event === exports.CesiumEvent.LONG_RIGHT_PRESS) {
            startEvent = exports.CesiumEvent.RIGHT_DOWN;
            stopEvent = exports.CesiumEvent.RIGHT_UP;
        }
        else if (this.event === exports.CesiumEvent.LONG_MIDDLE_PRESS) {
            startEvent = exports.CesiumEvent.MIDDLE_DOWN;
            stopEvent = exports.CesiumEvent.MIDDLE_UP;
        }
        var startEventObservable = this.eventFactory.get(startEvent, this.modifier);
        var stopEventObservable = this.eventFactory.get(stopEvent, this.modifier);
        var longPressObservable = startEventObservable
            .flatMap(function (e) { return rxjs_Observable.Observable.of(e).delay(CesiumLongPressObserver.LONG_PRESS_EVENTS_DURATION).takeUntil(stopEventObservable); }).publish();
        return longPressObservable;
    };
    CesiumLongPressObserver.LONG_PRESS_EVENTS_DURATION = 250;
    return CesiumLongPressObserver;
}(CesiumPureEventObserver));

var CesiumEventBuilder = (function () {
    function CesiumEventBuilder(cesiumService) {
        this.cesiumService = cesiumService;
        this.cesiumEventsObservables = new Map();
    }
    CesiumEventBuilder.getEventFullName = function (event, modifier) {
        if (modifier) {
            return event + "_" + modifier;
        }
        else {
            return event.toString();
        }
    };
    CesiumEventBuilder.prototype.init = function () {
        this.eventsHandler = this.cesiumService.getViewer().screenSpaceEventHandler;
    };
    CesiumEventBuilder.prototype.get = function (event, modifier) {
        if (modifier === void 0) { modifier = undefined; }
        var eventName = CesiumEventBuilder.getEventFullName(event, modifier);
        if (this.cesiumEventsObservables.has(eventName)) {
            return this.cesiumEventsObservables.get(eventName);
        }
        else {
            var eventObserver = this.createCesiumEventObservable(event, modifier);
            this.cesiumEventsObservables.set(eventName, eventObserver);
            return eventObserver;
        }
    };
    CesiumEventBuilder.prototype.createCesiumEventObservable = function (event, modifier) {
        var cesiumEventObservable = undefined;
        if (CesiumEventBuilder.longPressEvents.has(event)) {
            cesiumEventObservable = this.createSpecialCesiumEventObservable(event, modifier);
        }
        else {
            cesiumEventObservable = new CesiumPureEventObserver(event, modifier).init(this.eventsHandler).publish();
        }
        cesiumEventObservable.connect();
        return cesiumEventObservable;
    };
    CesiumEventBuilder.prototype.createSpecialCesiumEventObservable = function (event, modifier) {
        return new CesiumLongPressObserver(event, modifier, this).init();
    };
    CesiumEventBuilder.longPressEvents = new Set([
        exports.CesiumEvent.LONG_LEFT_PRESS,
        exports.CesiumEvent.LONG_RIGHT_PRESS,
        exports.CesiumEvent.LONG_MIDDLE_PRESS
    ]);
    CesiumEventBuilder.decorators = [
        { type: _angular_core.Injectable },
    ];
    CesiumEventBuilder.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return CesiumEventBuilder;
}());

(function (PickOptions) {
    PickOptions[PickOptions["NO_PICK"] = 0] = "NO_PICK";
    PickOptions[PickOptions["PICK_FIRST"] = 1] = "PICK_FIRST";
    PickOptions[PickOptions["PICK_ONE"] = 2] = "PICK_ONE";
    PickOptions[PickOptions["PICK_ALL"] = 3] = "PICK_ALL";
})(exports.PickOptions || (exports.PickOptions = {}));

var PlonterService = (function () {
    function PlonterService() {
        this._entitesToPlonter = [];
        this._plonterChangeNotifier = new _angular_core.EventEmitter();
        this._plonterObserver = new rxjs_Subject.Subject();
    }
    Object.defineProperty(PlonterService.prototype, "plonterChangeNotifier", {
        get: function () {
            return this._plonterChangeNotifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlonterService.prototype, "plonterShown", {
        get: function () {
            return this._plonterShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlonterService.prototype, "entitesToPlonter", {
        get: function () {
            return this._entitesToPlonter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlonterService.prototype, "plonterClickPosition", {
        get: function () {
            return this._eventResult.movement;
        },
        enumerable: true,
        configurable: true
    });
    PlonterService.prototype.plonterIt = function (eventResult) {
        this._eventResult = eventResult;
        this._entitesToPlonter = eventResult.entities;
        this._plonterShown = true;
        this._plonterChangeNotifier.emit();
        return this._plonterObserver;
    };
    PlonterService.prototype.resolvePlonter = function (entity) {
        this._plonterShown = false;
        this._eventResult.entities = [entity];
        this._plonterChangeNotifier.emit();
        this._plonterObserver.next(this._eventResult);
    };
    PlonterService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PlonterService.ctorParameters = function () { return []; };
    return PlonterService;
}());

var UtilsService = {
    unique: function (array) {
        return array.reduce(function (accumulator, currentValue) {
            if (accumulator.indexOf(currentValue) < 0) {
                accumulator.push(currentValue);
            }
            return accumulator;
        }, []);
    }
};

var CesiumDragDropHelper = (function () {
    function CesiumDragDropHelper() {
    }
    CesiumDragDropHelper.getDragEventTypes = function (dragEvent) {
        var mouseDownEvent;
        var mouseUpEvent;
        if (dragEvent === exports.CesiumEvent.LEFT_CLICK_DRAG) {
            mouseDownEvent = exports.CesiumEvent.LEFT_DOWN;
            mouseUpEvent = exports.CesiumEvent.LEFT_UP;
        }
        else if (dragEvent === exports.CesiumEvent.RIGHT_CLICK_DRAG) {
            mouseDownEvent = exports.CesiumEvent.RIGHT_DOWN;
            mouseUpEvent = exports.CesiumEvent.RIGHT_UP;
        }
        else if (dragEvent === exports.CesiumEvent.MIDDLE_CLICK_DRAG) {
            mouseDownEvent = exports.CesiumEvent.MIDDLE_DOWN;
            mouseUpEvent = exports.CesiumEvent.MIDDLE_UP;
        }
        return { mouseDownEvent: mouseDownEvent, mouseUpEvent: mouseUpEvent };
    };
    CesiumDragDropHelper.dragEvents = new Set([
        exports.CesiumEvent.LEFT_CLICK_DRAG,
        exports.CesiumEvent.RIGHT_CLICK_DRAG,
        exports.CesiumEvent.MIDDLE_CLICK_DRAG
    ]);
    return CesiumDragDropHelper;
}());

var Registration = (function () {
    function Registration(observable, stopper, priority, isPaused) {
        this.observable = observable;
        this.stopper = stopper;
        this.priority = priority;
        this.isPaused = isPaused;
    }
    return Registration;
}());
var MapEventsManagerService = (function () {
    function MapEventsManagerService(cesiumService, eventBuilder, plonterService) {
        this.cesiumService = cesiumService;
        this.eventBuilder = eventBuilder;
        this.plonterService = plonterService;
        this.eventRegistrations = new Map();
    }
    MapEventsManagerService.prototype.init = function () {
        this.eventBuilder.init();
        this.scene = this.cesiumService.getScene();
    };
    MapEventsManagerService.prototype.register = function (input) {
        var _this = this;
        if (this.scene === undefined) {
            throw new Error('CesiumService has not been initialized yet - MapEventsManagerService must be injected  under ac-map');
        }
        input.pick = input.pick || exports.PickOptions.NO_PICK;
        input.priority = input.priority || 0;
        if (input.entityType && input.pick === exports.PickOptions.NO_PICK) {
            throw new Error('MapEventsManagerService: can\'t register an event ' +
                'with entityType and PickOptions.NO_PICK - It doesn\'t make sense ');
        }
        var eventName = CesiumEventBuilder.getEventFullName(input.event, input.modifier);
        if (!this.eventRegistrations.has(eventName)) {
            this.eventRegistrations.set(eventName, []);
        }
        var eventRegistration = this.createEventRegistration(input.event, input.modifier, input.entityType, input.pick, input.priority);
        var registrationObservable = eventRegistration.observable;
        registrationObservable.dispose = function () { return _this.disposeObservable(eventRegistration, eventName); };
        this.eventRegistrations.get(eventName).push(eventRegistration);
        this.sortRegistrationsByPriority(eventName);
        return registrationObservable;
    };
    MapEventsManagerService.prototype.disposeObservable = function (eventRegistration, eventName) {
        eventRegistration.stopper.next(1);
        var registrations = this.eventRegistrations.get(eventName);
        var index = registrations.indexOf(eventRegistration);
        if (index !== -1) {
            registrations.splice(index, 1);
        }
        this.sortRegistrationsByPriority(eventName);
    };
    MapEventsManagerService.prototype.sortRegistrationsByPriority = function (eventName) {
        var registrations = this.eventRegistrations.get(eventName);
        registrations.sort(function (a, b) { return b.priority - a.priority; });
        if (registrations.length === 0) {
            return;
        }
        var currentPriority = registrations[0].priority;
        registrations.forEach(function (registration) {
            registration.isPaused = registration.priority < currentPriority;
        });
    };
    MapEventsManagerService.prototype.createEventRegistration = function (event, modifier, entityType, pickOption, priority) {
        var _this = this;
        var cesiumEventObservable = this.eventBuilder.get(event, modifier);
        var stopper = new rxjs_Subject.Subject();
        var registration = new Registration(undefined, stopper, priority, false);
        var observable;
        if (!CesiumDragDropHelper.dragEvents.has(event)) {
            observable = cesiumEventObservable
                .filter(function () { return !registration.isPaused; })
                .map(function (movement) { return _this.triggerPick(movement, pickOption); })
                .filter(function (result) { return result.cesiumEntities !== null || entityType === undefined; })
                .map(function (picksAndMovement) { return _this.addEntities(picksAndMovement, entityType, pickOption); })
                .filter(function (result) { return result.entities !== null || entityType === undefined; })
                .switchMap(function (entitiesAndMovement) { return _this.plonter(entitiesAndMovement, pickOption); })
                .takeUntil(stopper);
        }
        else {
            observable = this.createDragEvent(event, modifier, entityType, pickOption, priority);
        }
        registration.observable = observable;
        return registration;
    };
    MapEventsManagerService.prototype.createDragEvent = function (event, modifier, entityType, pickOption, priority) {
        var _a = CesiumDragDropHelper.getDragEventTypes(event), mouseDownEvent = _a.mouseDownEvent, mouseUpEvent = _a.mouseUpEvent;
        var mouseUpObservable = this.eventBuilder.get(mouseUpEvent);
        var mouseMoveObservable = this.eventBuilder.get(exports.CesiumEvent.MOUSE_MOVE);
        var mouseDownRegistration = this.createEventRegistration(mouseDownEvent, modifier, entityType, pickOption, priority);
        var dropSubject = new rxjs_Subject.Subject();
        var dragObserver = mouseDownRegistration.observable.mergeMap(function (e) {
            var lastMove = null;
            var dragStartPositionX = e.movement.startPosition.x;
            var dragStartPositionY = e.movement.startPosition.y;
            return mouseMoveObservable.map(function (movement) {
                lastMove = {
                    movement: {
                        drop: false,
                        startPosition: {
                            x: dragStartPositionX,
                            y: dragStartPositionY,
                        },
                        endPosition: movement.endPosition,
                    },
                    entities: e.entities,
                    cesiumEntities: e.cesiumEntities
                };
                return lastMove;
            }).takeUntil(mouseUpObservable).do(undefined, undefined, function () {
                if (lastMove) {
                    var dropEvent = Object.assign({}, lastMove);
                    dropEvent.movement.drop = true;
                    dropSubject.next(dropEvent);
                }
            });
        });
        return dragObserver.merge(dropSubject);
    };
    MapEventsManagerService.prototype.triggerPick = function (movement, pickOptions) {
        var picks = [];
        switch (pickOptions) {
            case exports.PickOptions.PICK_ONE:
            case exports.PickOptions.PICK_ALL:
                picks = this.scene.drillPick(movement.endPosition);
                picks = picks.length === 0 ? null : picks;
                break;
            case exports.PickOptions.PICK_FIRST:
                var pick = this.scene.pick(movement.endPosition);
                picks = pick === undefined ? null : [pick];
                break;
            case exports.PickOptions.NO_PICK:
                break;
            default:
                break;
        }
        if (picks) {
            picks = picks.map(function (pick) { return pick.id && pick.id instanceof Cesium.Entity ? pick.id : pick.primitive; });
        }
        return { movement: movement, cesiumEntities: picks };
    };
    MapEventsManagerService.prototype.addEntities = function (picksAndMovement, entityType, pickOption) {
        if (picksAndMovement.cesiumEntities === null) {
            picksAndMovement.entities = null;
            return picksAndMovement;
        }
        var entities = [];
        if (pickOption !== exports.PickOptions.NO_PICK) {
            if (entityType) {
                entities = picksAndMovement.cesiumEntities.map(function (pick) { return pick.acEntity; }).filter(function (acEntity) {
                    return acEntity && acEntity instanceof entityType;
                });
            }
            else {
                entities = picksAndMovement.cesiumEntities.map(function (pick) { return pick.acEntity; });
            }
            entities = UtilsService.unique(entities);
            if (entities.length === 0) {
                entities = null;
            }
        }
        picksAndMovement.entities = entities;
        return picksAndMovement;
    };
    MapEventsManagerService.prototype.plonter = function (entitiesAndMovement, pickOption) {
        if (pickOption === exports.PickOptions.PICK_ONE && entitiesAndMovement.entities !== null && entitiesAndMovement.entities.length > 1) {
            return this.plonterService.plonterIt(entitiesAndMovement);
        }
        else {
            return rxjs_Observable.Observable.of(entitiesAndMovement);
        }
    };
    MapEventsManagerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    MapEventsManagerService.ctorParameters = function () { return [
        { type: CesiumService, },
        { type: CesiumEventBuilder, },
        { type: PlonterService, },
    ]; };
    return MapEventsManagerService;
}());

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LabelDrawerService = (function (_super) {
    __extends$3(LabelDrawerService, _super);
    function LabelDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.label) || this;
    }
    LabelDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    LabelDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return LabelDrawerService;
}(EntitiesDrawerService));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PolylineDrawerService = (function (_super) {
    __extends$4(PolylineDrawerService, _super);
    function PolylineDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.polyline) || this;
    }
    PolylineDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PolylineDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PolylineDrawerService;
}(EntitiesDrawerService));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrimitivesDrawerService = (function (_super) {
    __extends$6(PrimitivesDrawerService, _super);
    function PrimitivesDrawerService(drawerType, cesiumService) {
        var _this = _super.call(this) || this;
        _this.drawerType = drawerType;
        _this.cesiumService = cesiumService;
        _this._show = true;
        return _this;
    }
    PrimitivesDrawerService.prototype.init = function () {
        this._cesiumCollection = new this.drawerType();
        this._primitiveCollectionWrap = new Cesium.PrimitiveCollection();
        this._primitiveCollectionWrap.add(this._cesiumCollection);
        this.cesiumService.getScene().primitives.add(this._primitiveCollectionWrap);
    };
    PrimitivesDrawerService.prototype.add = function (cesiumProps) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this._cesiumCollection.add(cesiumProps);
    };
    PrimitivesDrawerService.prototype.update = function (entity, cesiumProps) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this._propsAssigner) {
            this._propsAssigner(entity, cesiumProps);
        }
        else {
            Object.assign(entity, cesiumProps);
        }
    };
    PrimitivesDrawerService.prototype.remove = function (entity) {
        this._cesiumCollection.remove(entity);
    };
    PrimitivesDrawerService.prototype.removeAll = function () {
        this._cesiumCollection.removeAll();
    };
    PrimitivesDrawerService.prototype.setShow = function (showValue) {
        this._show = showValue;
        this._primitiveCollectionWrap.show = showValue;
    };
    PrimitivesDrawerService.prototype.getShow = function () {
        return this._show;
    };
    return PrimitivesDrawerService;
}(BasicDrawerService));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PointDrawerService = (function (_super) {
    __extends$5(PointDrawerService, _super);
    function PointDrawerService(cesiumService) {
        return _super.call(this, Cesium.PointPrimitiveCollection, cesiumService) || this;
    }
    PointDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PointDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PointDrawerService;
}(PrimitivesDrawerService));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StaticPrimitiveDrawer = (function (_super) {
    __extends$8(StaticPrimitiveDrawer, _super);
    function StaticPrimitiveDrawer(geometryType, cesiumService) {
        var _this = _super.call(this, Cesium.PrimitiveCollection, cesiumService) || this;
        _this.geometryType = geometryType;
        return _this;
    }
    StaticPrimitiveDrawer.prototype.add = function (geometryProps, instanceProps, primitiveProps) {
        instanceProps.geometry = new this.geometryType(geometryProps);
        primitiveProps.geometryInstances = new Cesium.GeometryInstance(instanceProps);
        return _super.prototype.add.call(this, new Cesium.Primitive(primitiveProps));
    };
    StaticPrimitiveDrawer.prototype.update = function (primitive, geometryProps, instanceProps, primitiveProps) {
    };
    return StaticPrimitiveDrawer;
}(PrimitivesDrawerService));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ArcDrawerService = (function (_super) {
    __extends$7(ArcDrawerService, _super);
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
        { type: _angular_core.Injectable },
    ];
    ArcDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return ArcDrawerService;
}(StaticPrimitiveDrawer));

var MapsManagerService = (function () {
    function MapsManagerService() {
        this.defaultIdCounter = 0;
        this._Maps = new Map();
    }
    MapsManagerService.prototype.getMap = function (id) {
        if (!id) {
            return this.firstMap;
        }
        return this._Maps.get(id);
    };
    MapsManagerService.prototype.registerMap = function (id, acMap) {
        if (!this.firstMap) {
            this.firstMap = acMap;
        }
        var mapId = id ? id : this.generateDefaultId();
        this._Maps.set(mapId, acMap);
    };
    MapsManagerService.prototype.generateDefaultId = function () {
        this.defaultIdCounter++;
        return 'default-map-id-' + this.defaultIdCounter;
    };
    MapsManagerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    MapsManagerService.ctorParameters = function () { return []; };
    return MapsManagerService;
}());

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EllipseDrawerService = (function (_super) {
    __extends$9(EllipseDrawerService, _super);
    function EllipseDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.ellipse, {
            collectionsNumber: 100,
            collectionMaxSize: 100,
            collectionSuspensionTime: 100
        }) || this;
    }
    EllipseDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    EllipseDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return EllipseDrawerService;
}(EntitiesDrawerService));

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PolygonDrawerService = (function (_super) {
    __extends$10(PolygonDrawerService, _super);
    function PolygonDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.polygon) || this;
    }
    PolygonDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PolygonDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PolygonDrawerService;
}(EntitiesDrawerService));

(function (KeyboardAction) {
    KeyboardAction[KeyboardAction["CAMERA_FORWARD"] = 0] = "CAMERA_FORWARD";
    KeyboardAction[KeyboardAction["CAMERA_BACKWARD"] = 1] = "CAMERA_BACKWARD";
    KeyboardAction[KeyboardAction["CAMERA_RIGHT"] = 2] = "CAMERA_RIGHT";
    KeyboardAction[KeyboardAction["CAMERA_LEFT"] = 3] = "CAMERA_LEFT";
    KeyboardAction[KeyboardAction["CAMERA_UP"] = 4] = "CAMERA_UP";
    KeyboardAction[KeyboardAction["CAMERA_DOWN"] = 5] = "CAMERA_DOWN";
    KeyboardAction[KeyboardAction["CAMERA_LOOK_RIGHT"] = 6] = "CAMERA_LOOK_RIGHT";
    KeyboardAction[KeyboardAction["CAMERA_LOOK_LEFT"] = 7] = "CAMERA_LOOK_LEFT";
    KeyboardAction[KeyboardAction["CAMERA_LOOK_UP"] = 8] = "CAMERA_LOOK_UP";
    KeyboardAction[KeyboardAction["CAMERA_LOOK_DOWN"] = 9] = "CAMERA_LOOK_DOWN";
    KeyboardAction[KeyboardAction["CAMERA_TWIST_RIGHT"] = 10] = "CAMERA_TWIST_RIGHT";
    KeyboardAction[KeyboardAction["CAMERA_TWIST_LEFT"] = 11] = "CAMERA_TWIST_LEFT";
    KeyboardAction[KeyboardAction["CAMERA_ROTATE_RIGHT"] = 12] = "CAMERA_ROTATE_RIGHT";
    KeyboardAction[KeyboardAction["CAMERA_ROTATE_LEFT"] = 13] = "CAMERA_ROTATE_LEFT";
    KeyboardAction[KeyboardAction["CAMERA_ROTATE_UP"] = 14] = "CAMERA_ROTATE_UP";
    KeyboardAction[KeyboardAction["CAMERA_ROTATE_DOWN"] = 15] = "CAMERA_ROTATE_DOWN";
    KeyboardAction[KeyboardAction["CAMERA_ZOOM_IN"] = 16] = "CAMERA_ZOOM_IN";
    KeyboardAction[KeyboardAction["CAMERA_ZOOM_OUT"] = 17] = "CAMERA_ZOOM_OUT";
})(exports.KeyboardAction || (exports.KeyboardAction = {}));

var CAMERA_MOVEMENT_DEFAULT_FACTOR = 100.0;
var CAMERA_LOOK_DEFAULT_FACTOR = 0.01;
var CAMERA_TWIST_DEFAULT_FACTOR = 0.01;
var CAMERA_ROTATE_DEFAULT_FACTOR = 0.01;
var PREDEFINED_KEYBOARD_ACTIONS = (_a = {},
    _a[exports.KeyboardAction.CAMERA_FORWARD] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveForward(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_BACKWARD] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveBackward(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_UP] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveUp(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_DOWN] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveDown(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_RIGHT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveRight(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_LEFT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var scene = cesiumService.getScene();
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / (params.moveRate || CAMERA_MOVEMENT_DEFAULT_FACTOR);
        camera.moveLeft(moveRate);
    },
    _a[exports.KeyboardAction.CAMERA_LOOK_RIGHT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var currentPosition = camera.positionCartographic;
        var lookFactor = params.lookFactor || CAMERA_LOOK_DEFAULT_FACTOR;
        camera.lookRight(currentPosition.latitude * lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_LOOK_LEFT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var currentPosition = camera.positionCartographic;
        var lookFactor = params.lookFactor || CAMERA_LOOK_DEFAULT_FACTOR;
        camera.lookLeft(currentPosition.latitude * lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_LOOK_UP] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var currentPosition = camera.positionCartographic;
        var lookFactor = params.lookFactor || CAMERA_LOOK_DEFAULT_FACTOR;
        camera.lookUp(currentPosition.longitude * (lookFactor * -1));
    },
    _a[exports.KeyboardAction.CAMERA_LOOK_DOWN] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var currentPosition = camera.positionCartographic;
        var lookFactor = params.lookFactor || CAMERA_LOOK_DEFAULT_FACTOR;
        camera.lookDown(currentPosition.longitude * (lookFactor * -1));
    },
    _a[exports.KeyboardAction.CAMERA_TWIST_RIGHT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.amount || CAMERA_TWIST_DEFAULT_FACTOR;
        camera.twistRight(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_TWIST_LEFT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.amount || CAMERA_TWIST_DEFAULT_FACTOR;
        camera.twistLeft(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_ROTATE_RIGHT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.angle || CAMERA_ROTATE_DEFAULT_FACTOR;
        camera.rotateRight(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_ROTATE_LEFT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.angle || CAMERA_ROTATE_DEFAULT_FACTOR;
        camera.rotateLeft(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_ROTATE_UP] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.angle || CAMERA_ROTATE_DEFAULT_FACTOR;
        camera.rotateUp(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_ROTATE_DOWN] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var lookFactor = params.angle || CAMERA_ROTATE_DEFAULT_FACTOR;
        camera.rotateDown(lookFactor);
    },
    _a[exports.KeyboardAction.CAMERA_ZOOM_IN] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var amount = params.amount;
        camera.zoomIn(amount);
    },
    _a[exports.KeyboardAction.CAMERA_ZOOM_OUT] = function (cesiumService, params) {
        var camera = cesiumService.getViewer().camera;
        var amount = params.amount;
        camera.zoomOut(amount);
    },
    _a);
var _a;

var KeyEventState;
(function (KeyEventState) {
    KeyEventState[KeyEventState["IGNORED"] = 0] = "IGNORED";
    KeyEventState[KeyEventState["NOT_PRESSED"] = 1] = "NOT_PRESSED";
    KeyEventState[KeyEventState["PRESSED"] = 2] = "PRESSED";
})(KeyEventState || (KeyEventState = {}));
var KeyboardControlService = (function () {
    function KeyboardControlService(ngZone, cesiumService, document) {
        this.ngZone = ngZone;
        this.cesiumService = cesiumService;
        this.document = document;
        this._currentDefinitions = null;
        this._activeDefinitions = {};
        this._keyMappingFn = this.defaultKeyMappingFn;
    }
    KeyboardControlService.prototype.init = function () {
        var canvas = this.cesiumService.getCanvas();
        canvas.addEventListener('click', function () {
            canvas.focus();
        });
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
        this.handleTick = this.handleTick.bind(this);
    };
    KeyboardControlService.prototype.setKeyboardControls = function (definitions, keyMappingFn, outsideOfAngularZone) {
        var _this = this;
        if (outsideOfAngularZone === void 0) { outsideOfAngularZone = false; }
        if (!definitions) {
            return this.removeKeyboardControls();
        }
        if (!this._currentDefinitions) {
            this.registerEvents(outsideOfAngularZone);
        }
        this._currentDefinitions = definitions;
        this._keyMappingFn = keyMappingFn || this.defaultKeyMappingFn;
        Object.keys(this._currentDefinitions).forEach(function (key) {
            _this._activeDefinitions[key] = {
                state: KeyEventState.NOT_PRESSED,
                action: null,
                keyboardEvent: null,
            };
        });
    };
    KeyboardControlService.prototype.removeKeyboardControls = function () {
        this.unregisterEvents();
        this._currentDefinitions = null;
    };
    KeyboardControlService.prototype.getAction = function (char) {
        return this._currentDefinitions[char] || null;
    };
    KeyboardControlService.prototype.defaultKeyMappingFn = function (keyEvent) {
        return String.fromCharCode(keyEvent.keyCode);
    };
    KeyboardControlService.prototype.handleKeydown = function (e) {
        var char = this._keyMappingFn(e);
        var action = this.getAction(char);
        if (action) {
            var actionState = this._activeDefinitions[char];
            if (actionState.state !== KeyEventState.IGNORED) {
                var execute = true;
                var params = this.getParams(action.params, e);
                if (action.validation) {
                    execute = action.validation(this.cesiumService, params, e);
                }
                if (execute === true) {
                    this._activeDefinitions[char] = {
                        state: KeyEventState.PRESSED,
                        action: action,
                        keyboardEvent: e,
                    };
                }
            }
        }
    };
    KeyboardControlService.prototype.handleKeyup = function (e) {
        var char = this._keyMappingFn(e);
        var action = this.getAction(char);
        if (action) {
            this._activeDefinitions[char] = {
                state: KeyEventState.NOT_PRESSED,
                action: null,
                keyboardEvent: e,
            };
            if (action.done && typeof action.done === 'function') {
                action.done(this.cesiumService, e);
            }
        }
    };
    KeyboardControlService.prototype.handleTick = function () {
        var _this = this;
        var activeKeys = Object.keys(this._activeDefinitions);
        activeKeys.forEach(function (key) {
            var actionState = _this._activeDefinitions[key];
            if (actionState !== null && actionState.action !== null && actionState.state === KeyEventState.PRESSED) {
                _this.executeAction(actionState.action, key, actionState.keyboardEvent);
            }
        });
    };
    KeyboardControlService.prototype.getParams = function (paramsDef, keyboardEvent) {
        if (!paramsDef) {
            return {};
        }
        if (typeof paramsDef === 'function') {
            return paramsDef(this.cesiumService, keyboardEvent);
        }
        return paramsDef;
    };
    KeyboardControlService.prototype.executeAction = function (execution, key, keyboardEvent) {
        if (!this._currentDefinitions) {
            return;
        }
        var params = this.getParams(execution.params, keyboardEvent);
        if (util.isNumber(execution.action)) {
            var predefinedAction = PREDEFINED_KEYBOARD_ACTIONS[execution.action];
            if (predefinedAction) {
                predefinedAction(this.cesiumService, params, keyboardEvent);
            }
        }
        else if (typeof execution.action === 'function') {
            var shouldCancelEvent = execution.action(this.cesiumService, params, keyboardEvent);
            if (shouldCancelEvent === false) {
                this._activeDefinitions[key] = {
                    state: KeyEventState.IGNORED,
                    action: null,
                    keyboardEvent: null,
                };
            }
        }
    };
    KeyboardControlService.prototype.registerEvents = function (outsideOfAngularZone) {
        var _this = this;
        var registerToEvents = function () {
            _this.document.addEventListener('keydown', _this.handleKeydown);
            _this.document.addEventListener('keyup', _this.handleKeyup);
            _this.cesiumService.getViewer().clock.onTick.addEventListener(_this.handleTick);
        };
        if (outsideOfAngularZone) {
            this.ngZone.runOutsideAngular(registerToEvents);
        }
        else {
            registerToEvents();
        }
    };
    KeyboardControlService.prototype.unregisterEvents = function () {
        this.document.removeEventListener('keydown', this.handleKeydown);
        this.document.removeEventListener('keyup', this.handleKeyup);
        this.cesiumService.getViewer().clock.onTick.removeEventListener(this.handleTick);
    };
    KeyboardControlService.decorators = [
        { type: _angular_core.Injectable },
    ];
    KeyboardControlService.ctorParameters = function () { return [
        { type: _angular_core.NgZone, },
        { type: CesiumService, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_common.DOCUMENT,] },] },
    ]; };
    return KeyboardControlService;
}());

(function (SceneMode) {
    SceneMode[SceneMode["SCENE3D"] = 0] = "SCENE3D";
    SceneMode[SceneMode["COLUMBUS_VIEW"] = 1] = "COLUMBUS_VIEW";
    SceneMode[SceneMode["SCENE2D"] = 2] = "SCENE2D";
    SceneMode[SceneMode["PERFORMANCE_SCENE2D"] = 3] = "PERFORMANCE_SCENE2D";
})(exports.SceneMode || (exports.SceneMode = {}));

var CameraService = (function () {
    function CameraService() {
        this.isSceneModePerformance2D = false;
    }
    CameraService.prototype.init = function (cesiumService) {
        this.viewer = cesiumService.getViewer();
        this.scene = cesiumService.getScene();
        this.screenSpaceCameraController = this.scene.screenSpaceCameraController;
        this.camera = this.scene.camera;
        this.lastRotate = this.screenSpaceCameraController.enableRotate;
        this.lastTilt = this.screenSpaceCameraController.enableTilt;
        this.lastLook = this.screenSpaceCameraController.enableLook;
    };
    CameraService.prototype._listenToSceneModeMorph = function (callback) {
        this.morphListenerCancelFn = this.scene.morphStart.addEventListener(callback);
    };
    CameraService.prototype._revertCameraProperties = function () {
        this.isSceneModePerformance2D = false;
        this.enableTilt(this.lastTilt);
        this.enableRotate(this.lastRotate);
        this.enableLook(this.lastLook);
    };
    CameraService.prototype.getCamera = function () {
        return this.camera;
    };
    CameraService.prototype.getScreenSpaceCameraController = function () {
        return this.screenSpaceCameraController;
    };
    CameraService.prototype.getMinimumZoom = function () {
        return this.screenSpaceCameraController.minimumZoomDistance;
    };
    CameraService.prototype.setMinimumZoom = function (amount) {
        this.screenSpaceCameraController.minimumZoomDistance = amount;
    };
    CameraService.prototype.getMaximumZoom = function () {
        return this.screenSpaceCameraController.maximumZoomDistance;
    };
    CameraService.prototype.setMaximumZoom = function (amount) {
        this.screenSpaceCameraController.maximumZoomDistance = amount;
    };
    CameraService.prototype.enableTilt = function (tilt) {
        this.screenSpaceCameraController.enableTilt = tilt;
    };
    CameraService.prototype.enableRotate = function (rotate) {
        this.screenSpaceCameraController.enableRotate = rotate;
    };
    CameraService.prototype.enableLook = function (lock) {
        this.screenSpaceCameraController.enableLook = lock;
    };
    CameraService.prototype.enableTranslate = function (translate) {
        this.screenSpaceCameraController.enableTranslate = translate;
    };
    CameraService.prototype.enableZoom = function (zoom) {
        this.screenSpaceCameraController.enableZoom = zoom;
    };
    CameraService.prototype.enableInputs = function (inputs) {
        this.screenSpaceCameraController.enableInputs = inputs;
    };
    CameraService.prototype.setSceneMode = function (sceneMode, duration) {
        var _this = this;
        switch (sceneMode) {
            case exports.SceneMode.SCENE3D: {
                if (this.isSceneModePerformance2D) {
                    this._revertCameraProperties();
                }
                this.scene.morphTo3D(duration);
                break;
            }
            case exports.SceneMode.COLUMBUS_VIEW: {
                if (this.isSceneModePerformance2D) {
                    this._revertCameraProperties();
                }
                this.scene.morphToColumbusView(duration);
                break;
            }
            case exports.SceneMode.SCENE2D: {
                if (this.isSceneModePerformance2D) {
                    this._revertCameraProperties();
                }
                this.scene.morphTo2D(duration);
                break;
            }
            case exports.SceneMode.PERFORMANCE_SCENE2D: {
                this.isSceneModePerformance2D = true;
                this.lastLook = this.screenSpaceCameraController.enableLook;
                this.lastTilt = this.screenSpaceCameraController.enableTilt;
                this.lastRotate = this.screenSpaceCameraController.enableRotate;
                this.screenSpaceCameraController.enableTilt = false;
                this.screenSpaceCameraController.enableRotate = false;
                this.screenSpaceCameraController.enableLook = false;
                if (this.morphListenerCancelFn) {
                    this.morphListenerCancelFn();
                }
                this.scene.morphToColumbusView(duration);
                var morphCompleteEventListener_1 = this.scene.morphComplete.addEventListener(function () {
                    _this.camera.setView({
                        destination: Cesium.Cartesian3.fromDegrees(0.0, 0.0, Math.min(CameraService.PERFORMANCE_2D_ALTITUDE, _this.getMaximumZoom())),
                        orientation: {
                            pitch: Cesium.Math.toRadians(-90),
                        }
                    });
                    morphCompleteEventListener_1();
                    _this._listenToSceneModeMorph(_this._revertCameraProperties.bind(_this));
                });
                break;
            }
        }
    };
    CameraService.prototype.cameraFlyTo = function (options) {
        this.camera.flyTo(options);
    };
    CameraService.prototype.flyTo = function (target, options) {
        return this.viewer.flyTo(target, options);
    };
    CameraService.prototype.zoomTo = function (target, offset) {
        return this.viewer.zoomTo(target, offset);
    };
    CameraService.prototype.setView = function (options) {
        this.camera.setView(options);
    };
    CameraService.prototype.trackEntity = function (entity) {
        this.viewer.trackedEntity = entity;
    };
    CameraService.prototype.untrackEntity = function () {
        this.trackEntity();
    };
    CameraService.PERFORMANCE_2D_ALTITUDE = 25000000;
    CameraService.decorators = [
        { type: _angular_core.Injectable },
    ];
    CameraService.ctorParameters = function () { return []; };
    return CameraService;
}());

var MapLayersService = (function () {
    function MapLayersService(cesiumService) {
        this.cesiumService = cesiumService;
        this.layersDataSources = [];
    }
    MapLayersService.prototype.registerLayerDataSources = function (dataSources, zIndex) {
        var _this = this;
        dataSources.forEach(function (ds) {
            ds.zIndex = zIndex;
            _this.layersDataSources.push(ds);
        });
    };
    MapLayersService.prototype.drawAllLayers = function () {
        var _this = this;
        this.layersDataSources.sort(function (a, b) { return a.zIndex - b.zIndex; });
        this.layersDataSources.forEach(function (dataSource) {
            _this.cesiumService.getViewer().dataSources.add(dataSource);
        });
    };
    MapLayersService.prototype.updateAndRefresh = function (dataSources, newZIndex) {
        var _this = this;
        if (dataSources && dataSources.length) {
            dataSources.forEach(function (ds) {
                var index = _this.layersDataSources.indexOf(ds);
                if (index !== -1) {
                    _this.layersDataSources[index].zIndex = newZIndex;
                }
            });
            this.cesiumService.getViewer().dataSources.removeAll();
            this.drawAllLayers();
        }
    };
    MapLayersService.prototype.removeDataSources = function (dataSources) {
        var _this = this;
        dataSources.forEach(function (ds) {
            var index = _this.layersDataSources.indexOf(ds);
            if (index !== -1) {
                _this.layersDataSources.splice(index, 1);
                _this.cesiumService.getViewer().dataSources.remove(ds, true);
            }
        });
    };
    MapLayersService.decorators = [
        { type: _angular_core.Injectable },
    ];
    MapLayersService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return MapLayersService;
}());

var AssociativeArray = Cesium.AssociativeArray;
var Color = Cesium.Color;
var ColorGeometryInstanceAttribute = Cesium.ColorGeometryInstanceAttribute;
var defined = Cesium.defined;
var DistanceDisplayCondition = Cesium.DistanceDisplayCondition;
var DistanceDisplayConditionGeometryInstanceAttribute = Cesium.DistanceDisplayConditionGeometryInstanceAttribute;
var ShowGeometryInstanceAttribute = Cesium.ShowGeometryInstanceAttribute;
var Primitive = Cesium.Primitive;
var ShadowMode = Cesium.ShadowMode;
var BoundingSphereState = Cesium.BoundingSphereState;
var ColorMaterialProperty = Cesium.ColorMaterialProperty;
var MaterialProperty = Cesium.MaterialProperty;
var Property = Cesium.Property;
var colorScratch = new Color();
var distanceDisplayConditionScratch = new DistanceDisplayCondition();
function Batch(primitives, translucent, appearanceType, depthFailAppearanceType, depthFailMaterialProperty, closed, shadows) {
    this.translucent = translucent;
    this.appearanceType = appearanceType;
    this.depthFailAppearanceType = depthFailAppearanceType;
    this.depthFailMaterialProperty = depthFailMaterialProperty;
    this.depthFailMaterial = undefined;
    this.closed = closed;
    this.shadows = shadows;
    this.primitives = primitives;
    this.createPrimitive = false;
    this.waitingOnCreate = false;
    this.primitive = undefined;
    this.oldPrimitive = undefined;
    this.geometry = new AssociativeArray();
    this.updaters = new AssociativeArray();
    this.updatersWithAttributes = new AssociativeArray();
    this.attributes = new AssociativeArray();
    this.subscriptions = new AssociativeArray();
    this.showsUpdated = new AssociativeArray();
    this.itemsToRemove = [];
    this.invalidated = false;
    var removeMaterialSubscription;
    if (defined(depthFailMaterialProperty)) {
        removeMaterialSubscription = depthFailMaterialProperty.definitionChanged.addEventListener(Batch.prototype.onMaterialChanged, this);
    }
    this.removeMaterialSubscription = removeMaterialSubscription;
}
Batch.prototype.onMaterialChanged = function () {
    this.invalidated = true;
};
Batch.prototype.isMaterial = function (updater) {
    var material = this.depthFailMaterialProperty;
    var updaterMaterial = updater.depthFailMaterialProperty;
    if (updaterMaterial === material) {
        return true;
    }
    if (defined(material)) {
        return material.equals(updaterMaterial);
    }
    return false;
};
Batch.prototype.add = function (updater, instance) {
    var id = updater.entity.id;
    this.createPrimitive = true;
    this.geometry.set(id, instance);
    this.updaters.set(id, updater);
    if (!updater.hasConstantFill || !updater.fillMaterialProperty.isConstant || !Property.isConstant(updater.distanceDisplayConditionProperty)) {
        this.updatersWithAttributes.set(id, updater);
    }
    else {
        var that = this;
        this.subscriptions.set(id, updater.entity.definitionChanged.addEventListener(function (entity, propertyName, newValue, oldValue) {
            if (propertyName === 'isShowing') {
                that.showsUpdated.set(entity.id, updater);
            }
        }));
    }
};
Batch.prototype.remove = function (updater) {
    var id = updater.entity.id;
    this.createPrimitive = this.geometry.remove(id) || this.createPrimitive;
    if (this.updaters.remove(id)) {
        this.updatersWithAttributes.remove(id);
        var unsubscribe = this.subscriptions.get(id);
        if (defined(unsubscribe)) {
            unsubscribe();
            this.subscriptions.remove(id);
        }
    }
};
Batch.prototype.update = function (time) {
    var isUpdated = true;
    var removedCount = 0;
    var primitive = this.primitive;
    var primitives = this.primitives;
    var attributes;
    var i;
    if (this.createPrimitive) {
        var geometries = this.geometry.values;
        var geometriesLength = geometries.length;
        if (geometriesLength > 0) {
            if (defined(primitive)) {
                if (!defined(this.oldPrimitive)) {
                    this.oldPrimitive = primitive;
                }
                else {
                    primitives.remove(primitive);
                }
            }
            for (i = 0; i < geometriesLength; i++) {
                var geometryItem = geometries[i];
                var originalAttributes = geometryItem.attributes;
                attributes = this.attributes.get(geometryItem.id.id);
                if (defined(attributes)) {
                    if (defined(originalAttributes.show)) {
                        originalAttributes.show.value = attributes.show;
                    }
                    if (defined(originalAttributes.color)) {
                        originalAttributes.color.value = attributes.color;
                    }
                    if (defined(originalAttributes.depthFailColor)) {
                        originalAttributes.depthFailColor.value = attributes.depthFailColor;
                    }
                }
            }
            var depthFailAppearance;
            if (defined(this.depthFailAppearanceType)) {
                if (defined(this.depthFailMaterialProperty)) {
                    this.depthFailMaterial = MaterialProperty.getValue(time, this.depthFailMaterialProperty, this.depthFailMaterial);
                }
                depthFailAppearance = new this.depthFailAppearanceType({
                    material: this.depthFailMaterial,
                    translucent: this.translucent,
                    closed: this.closed
                });
            }
            primitive = new Primitive({
                asynchronous: true,
                geometryInstances: geometries,
                appearance: new this.appearanceType({
                    flat: this.shadows === ShadowMode.DISABLED || this.shadows === ShadowMode.CAST_ONLY,
                    translucent: this.translucent,
                    closed: this.closed
                }),
                depthFailAppearance: depthFailAppearance,
                shadows: this.shadows
            });
            primitives.add(primitive);
            isUpdated = false;
        }
        else {
            if (defined(primitive)) {
                primitives.remove(primitive);
                primitive = undefined;
            }
            var oldPrimitive = this.oldPrimitive;
            if (defined(oldPrimitive)) {
                primitives.remove(oldPrimitive);
                this.oldPrimitive = undefined;
            }
        }
        this.attributes.removeAll();
        this.primitive = primitive;
        this.createPrimitive = false;
        this.waitingOnCreate = true;
    }
    else if (defined(primitive) && primitive.ready) {
        if (defined(this.oldPrimitive)) {
            primitives.remove(this.oldPrimitive);
            this.oldPrimitive = undefined;
        }
        if (defined(this.depthFailAppearanceType) && !(this.depthFailMaterialProperty instanceof ColorMaterialProperty)) {
            this.depthFailMaterial = MaterialProperty.getValue(time, this.depthFailMaterialProperty, this.depthFailMaterial);
            this.primitive.depthFailAppearance.material = this.depthFailMaterial;
        }
        var updatersWithAttributes = this.updatersWithAttributes.values;
        var length = updatersWithAttributes.length;
        var waitingOnCreate = this.waitingOnCreate;
        for (i = 0; i < length; i++) {
            var updater = updatersWithAttributes[i];
            var instance = this.geometry.get(updater.entity.id);
            attributes = this.attributes.get(instance.id.id);
            if (!defined(attributes)) {
                attributes = primitive.getGeometryInstanceAttributes(instance.id);
                this.attributes.set(instance.id.id, attributes);
            }
            if (!updater.fillMaterialProperty.isConstant || waitingOnCreate) {
                var colorProperty = updater.fillMaterialProperty.color;
                colorProperty.getValue(time, colorScratch);
                if (!Color.equals(attributes._lastColor, colorScratch)) {
                    attributes._lastColor = Color.clone(colorScratch, attributes._lastColor);
                    attributes.color = ColorGeometryInstanceAttribute.toValue(colorScratch, attributes.color);
                    if ((this.translucent && attributes.color[3] === 255) || (!this.translucent && attributes.color[3] !== 255)) {
                        this.itemsToRemove[removedCount++] = updater;
                    }
                }
            }
            if (defined(this.depthFailAppearanceType) && this.depthFailAppearanceType instanceof ColorMaterialProperty && (!updater.depthFailMaterialProperty.isConstant || waitingOnCreate)) {
                var depthFailColorProperty = updater.depthFailMaterialProperty.color;
                depthFailColorProperty.getValue(time, colorScratch);
                if (!Color.equals(attributes._lastDepthFailColor, colorScratch)) {
                    attributes._lastDepthFailColor = Color.clone(colorScratch, attributes._lastDepthFailColor);
                    attributes.depthFailColor = ColorGeometryInstanceAttribute.toValue(colorScratch, attributes.depthFailColor);
                }
            }
            var show = updater.entity.isShowing && (updater.hasConstantFill || updater.isFilled(time));
            var currentShow = attributes.show[0] === 1;
            if (show !== currentShow) {
                attributes.show = ShowGeometryInstanceAttribute.toValue(show, attributes.show);
            }
            var distanceDisplayConditionProperty = updater.distanceDisplayConditionProperty;
            if (!Property.isConstant(distanceDisplayConditionProperty)) {
                var distanceDisplayCondition = distanceDisplayConditionProperty.getValue(time, distanceDisplayConditionScratch);
                if (!DistanceDisplayCondition.equals(distanceDisplayCondition, attributes._lastDistanceDisplayCondition)) {
                    attributes._lastDistanceDisplayCondition = DistanceDisplayCondition.clone(distanceDisplayCondition, attributes._lastDistanceDisplayCondition);
                    attributes.distanceDisplayCondition = DistanceDisplayConditionGeometryInstanceAttribute.toValue(distanceDisplayCondition, attributes.distanceDisplayCondition);
                }
            }
        }
        this.updateShows(primitive);
        this.waitingOnCreate = false;
    }
    else if (defined(primitive) && !primitive.ready) {
        isUpdated = false;
    }
    this.itemsToRemove.length = removedCount;
    return isUpdated;
};
Batch.prototype.updateShows = function (primitive) {
    var showsUpdated = this.showsUpdated.values;
    var length = showsUpdated.length;
    for (var i = 0; i < length; i++) {
        var updater = showsUpdated[i];
        var instance = this.geometry.get(updater.entity.id);
        var attributes = this.attributes.get(instance.id.id);
        if (!defined(attributes)) {
            attributes = primitive.getGeometryInstanceAttributes(instance.id);
            this.attributes.set(instance.id.id, attributes);
        }
        var show = updater.entity.isShowing;
        var currentShow = attributes.show[0] === 1;
        if (show !== currentShow) {
            attributes.show = ShowGeometryInstanceAttribute.toValue(show, attributes.show);
        }
    }
    this.showsUpdated.removeAll();
};
Batch.prototype.contains = function (entity) {
    return this.updaters.contains(entity.id);
};
Batch.prototype.getBoundingSphere = function (entity, result) {
    var primitive = this.primitive;
    if (!primitive.ready) {
        return BoundingSphereState.PENDING;
    }
    var attributes = primitive.getGeometryInstanceAttributes(entity);
    if (!defined(attributes) || !defined(attributes.boundingSphere) ||
        (defined(attributes.show) && attributes.show[0] === 0)) {
        return BoundingSphereState.FAILED;
    }
    attributes.boundingSphere.clone(result);
    return BoundingSphereState.DONE;
};
Batch.prototype.removeAllPrimitives = function () {
    var primitives = this.primitives;
    var primitive = this.primitive;
    if (defined(primitive)) {
        primitives.remove(primitive);
        this.primitive = undefined;
        this.geometry.removeAll();
        this.updaters.removeAll();
    }
    var oldPrimitive = this.oldPrimitive;
    if (defined(oldPrimitive)) {
        primitives.remove(oldPrimitive);
        this.oldPrimitive = undefined;
    }
};
Batch.prototype.destroy = function () {
    var primitive = this.primitive;
    var primitives = this.primitives;
    if (defined(primitive)) {
        primitives.remove(primitive);
    }
    var oldPrimitive = this.oldPrimitive;
    if (defined(oldPrimitive)) {
        primitives.remove(oldPrimitive);
    }
    if (defined(this.removeMaterialSubscription)) {
        this.removeMaterialSubscription();
    }
};
var wasFixed = false;
function fixCesiumEntitiesShadows() {
    if (wasFixed) {
        return;
    }
    Cesium.StaticGeometryColorBatch.prototype.add = function (time, updater) {
        var items;
        var translucent;
        var instance = updater.createFillGeometryInstance(time);
        if (instance.attributes.color.value[3] === 255) {
            items = this._solidItems;
            translucent = false;
        }
        else {
            items = this._translucentItems;
            translucent = true;
        }
        var length = items.length;
        for (var i = 0; i < length; i++) {
            var item = items[i];
            if (item.isMaterial(updater)) {
                item.add(updater, instance);
                return;
            }
        }
        var batch = new Batch(this._primitives, translucent, this._appearanceType, this._depthFailAppearanceType, updater.depthFailMaterialProperty, this._closed, this._shadows);
        batch.add(updater, instance);
        items.push(batch);
    };
    wasFixed = true;
}

var ConfigurationService = (function () {
    function ConfigurationService(config) {
        this.config = config;
        var fixEntitiesShadows = config ? config.fixEntitiesShadows : true;
        if (fixEntitiesShadows !== false) {
            fixCesiumEntitiesShadows();
        }
    }
    ConfigurationService.decorators = [
        { type: _angular_core.Injectable },
    ];
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: ['config',] },] },
    ]; };
    return ConfigurationService;
}());

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
        { type: _angular_core.Component, args: [{
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
        { type: _angular_core.ElementRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_common.DOCUMENT,] },] },
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
        'disableDefaultPlonter': [{ type: _angular_core.Input },],
        'id': [{ type: _angular_core.Input },],
        'flyTo': [{ type: _angular_core.Input },],
        'sceneMode': [{ type: _angular_core.Input },],
    };
    return AcMapComponent;
}());

var LayerService = (function () {
    function LayerService() {
        this.descriptions = [];
    }
    LayerService.prototype.registerDescription = function (descriptionComponent) {
        this.descriptions.push(descriptionComponent);
    };
    LayerService.prototype.unregisterDescription = function (descriptionComponent) {
        var index = this.descriptions.indexOf(descriptionComponent);
        if (index > -1) {
            this.descriptions.splice(index, 1);
        }
    };
    LayerService.prototype.getDescriptions = function () {
        return this.descriptions;
    };
    LayerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    LayerService.ctorParameters = function () { return []; };
    return LayerService;
}());

(function (ActionType) {
    ActionType[ActionType["ADD_UPDATE"] = 0] = "ADD_UPDATE";
    ActionType[ActionType["DELETE"] = 1] = "DELETE";
})(exports.ActionType || (exports.ActionType = {}));

var ComputationCache = (function () {
    function ComputationCache() {
        this._cache = new Map();
    }
    ComputationCache.prototype.get = function (expression, insertFn) {
        if (this._cache.has(expression)) {
            return this._cache.get(expression);
        }
        var value = insertFn();
        this._cache.set(expression, value);
        return value;
    };
    ComputationCache.prototype.clear = function () {
        this._cache.clear();
    };
    ComputationCache.decorators = [
        { type: _angular_core.Injectable },
    ];
    ComputationCache.ctorParameters = function () { return []; };
    return ComputationCache;
}());

var Checker = (function () {
    function Checker() {
    }
    Checker.throwIfAnyNotPresent = function (values, propertyNames) {
        propertyNames.forEach(function (propertyName) { return Checker.throwIfNotPresent(values, propertyName); });
    };
    Checker.throwIfNotPresent = function (value, name) {
        if (!Checker.present(value[name])) {
            throw new Error("Error: " + name + " was not given.");
        }
    };
    Checker.present = function (value) {
        return value !== undefined && value !== null;
    };
    return Checker;
}());

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicEllipseDrawerService = (function (_super) {
    __extends$11(DynamicEllipseDrawerService, _super);
    function DynamicEllipseDrawerService(cesiumService) {
        return _super.call(this, Cesium.PrimitiveCollection, cesiumService) || this;
    }
    DynamicEllipseDrawerService.prototype.add = function (cesiumProps) {
        Checker.throwIfAnyNotPresent(cesiumProps, ['center', 'semiMajorAxis', 'semiMinorAxis']);
        return _super.prototype.add.call(this, new primitivePrimitives.EllipsePrimitive(cesiumProps));
    };
    DynamicEllipseDrawerService.prototype.update = function (ellipse, cesiumProps) {
        ellipse.updateLocationData(cesiumProps);
        return ellipse;
    };
    DynamicEllipseDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    DynamicEllipseDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return DynamicEllipseDrawerService;
}(PrimitivesDrawerService));

var __extends$12 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicPolylineDrawerService = (function (_super) {
    __extends$12(DynamicPolylineDrawerService, _super);
    function DynamicPolylineDrawerService(cesiumService) {
        return _super.call(this, Cesium.PolylineCollection, cesiumService) || this;
    }
    DynamicPolylineDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    DynamicPolylineDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return DynamicPolylineDrawerService;
}(PrimitivesDrawerService));

var __extends$13 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StaticCircleDrawerService = (function (_super) {
    __extends$13(StaticCircleDrawerService, _super);
    function StaticCircleDrawerService(cesiumService) {
        return _super.call(this, Cesium.CircleGeometry, cesiumService) || this;
    }
    StaticCircleDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    StaticCircleDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return StaticCircleDrawerService;
}(StaticPrimitiveDrawer));

var __extends$14 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StaticPolylineDrawerService = (function (_super) {
    __extends$14(StaticPolylineDrawerService, _super);
    function StaticPolylineDrawerService(cesiumService) {
        return _super.call(this, Cesium.PolylineGeometry, cesiumService) || this;
    }
    StaticPolylineDrawerService.prototype.update = function (primitive, geometryProps, instanceProps, primitiveProps) {
        var color = instanceProps.attributes.color.value;
        if (primitive.ready) {
            primitive.getGeometryInstanceAttributes().color = color;
        }
        else {
            Cesium.when(primitive.readyPromise).then(function (readyPrimitive) {
                readyPrimitive.getGeometryInstanceAttributes().color.value = color;
            });
        }
        return primitive;
    };
    StaticPolylineDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    StaticPolylineDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return StaticPolylineDrawerService;
}(StaticPrimitiveDrawer));

var __extends$15 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StaticPolygonDrawerService = (function (_super) {
    __extends$15(StaticPolygonDrawerService, _super);
    function StaticPolygonDrawerService(cesiumService) {
        return _super.call(this, Cesium.PolygonGeometry, cesiumService) || this;
    }
    StaticPolygonDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    StaticPolygonDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return StaticPolygonDrawerService;
}(StaticPrimitiveDrawer));

var __extends$16 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StaticEllipseDrawerService = (function (_super) {
    __extends$16(StaticEllipseDrawerService, _super);
    function StaticEllipseDrawerService(cesiumService) {
        return _super.call(this, Cesium.EllipseGeometry, cesiumService) || this;
    }
    StaticEllipseDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    StaticEllipseDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return StaticEllipseDrawerService;
}(StaticPrimitiveDrawer));

var __extends$17 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ModelDrawerService = (function (_super) {
    __extends$17(ModelDrawerService, _super);
    function ModelDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.model) || this;
    }
    ModelDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    ModelDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return ModelDrawerService;
}(EntitiesDrawerService));

var __extends$18 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BoxDrawerService = (function (_super) {
    __extends$18(BoxDrawerService, _super);
    function BoxDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.box) || this;
    }
    BoxDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    BoxDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return BoxDrawerService;
}(EntitiesDrawerService));

var __extends$19 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CorridorDrawerService = (function (_super) {
    __extends$19(CorridorDrawerService, _super);
    function CorridorDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.corridor) || this;
    }
    CorridorDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    CorridorDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return CorridorDrawerService;
}(EntitiesDrawerService));

var __extends$20 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CylinderDrawerService = (function (_super) {
    __extends$20(CylinderDrawerService, _super);
    function CylinderDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.cylinder) || this;
    }
    CylinderDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    CylinderDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return CylinderDrawerService;
}(EntitiesDrawerService));

var __extends$21 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EllipsoidDrawerService = (function (_super) {
    __extends$21(EllipsoidDrawerService, _super);
    function EllipsoidDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.ellipsoid) || this;
    }
    EllipsoidDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    EllipsoidDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return EllipsoidDrawerService;
}(EntitiesDrawerService));

var __extends$22 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PolylineVolumeDrawerService = (function (_super) {
    __extends$22(PolylineVolumeDrawerService, _super);
    function PolylineVolumeDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.polylineVolume) || this;
    }
    PolylineVolumeDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PolylineVolumeDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PolylineVolumeDrawerService;
}(EntitiesDrawerService));

var __extends$23 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WallDrawerService = (function (_super) {
    __extends$23(WallDrawerService, _super);
    function WallDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.wall) || this;
    }
    WallDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    WallDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return WallDrawerService;
}(EntitiesDrawerService));

var __extends$24 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RectangleDrawerService = (function (_super) {
    __extends$24(RectangleDrawerService, _super);
    function RectangleDrawerService(cesiumService) {
        return _super.call(this, cesiumService, GraphicsType.rectangle) || this;
    }
    RectangleDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    RectangleDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return RectangleDrawerService;
}(EntitiesDrawerService));

var __extends$25 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PolylinePrimitiveDrawerService = (function (_super) {
    __extends$25(PolylinePrimitiveDrawerService, _super);
    function PolylinePrimitiveDrawerService(cesiumService) {
        return _super.call(this, Cesium.PolylineCollection, cesiumService) || this;
    }
    PolylinePrimitiveDrawerService.prototype.add = function (cesiumProps) {
        return this._cesiumCollection.add(this.withColorMaterial(cesiumProps));
    };
    PolylinePrimitiveDrawerService.prototype.update = function (cesiumObject, cesiumProps) {
        if (cesiumProps.material instanceof Cesium.Color) {
            if (cesiumObject.material && cesiumObject.material.uniforms &&
                cesiumObject.material.uniforms.color instanceof Cesium.Color) {
                this.withColorMaterial(cesiumProps);
            }
            else if (!cesiumObject.material.uniforms.color.equals(cesiumProps.material)) {
                cesiumObject.material.uniforms.color = cesiumProps.material;
            }
        }
        _super.prototype.update.call(this, cesiumObject, cesiumProps);
    };
    PolylinePrimitiveDrawerService.prototype.withColorMaterial = function (cesiumProps) {
        if (cesiumProps.material instanceof Cesium.Color) {
            var material = Cesium.Material.fromType('Color');
            material.uniforms.color = cesiumProps.material;
            cesiumProps.material = material;
        }
        return cesiumProps;
    };
    PolylinePrimitiveDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    PolylinePrimitiveDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return PolylinePrimitiveDrawerService;
}(PrimitivesDrawerService));

var __extends$26 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LabelPrimitiveDrawerService = (function (_super) {
    __extends$26(LabelPrimitiveDrawerService, _super);
    function LabelPrimitiveDrawerService(cesiumService) {
        return _super.call(this, Cesium.LabelCollection, cesiumService) || this;
    }
    LabelPrimitiveDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    LabelPrimitiveDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return LabelPrimitiveDrawerService;
}(PrimitivesDrawerService));

var __extends$27 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BillboardPrimitiveDrawerService = (function (_super) {
    __extends$27(BillboardPrimitiveDrawerService, _super);
    function BillboardPrimitiveDrawerService(cesiumService) {
        return _super.call(this, Cesium.BillboardCollection, cesiumService) || this;
    }
    BillboardPrimitiveDrawerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    BillboardPrimitiveDrawerService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return BillboardPrimitiveDrawerService;
}(PrimitivesDrawerService));

var AcLayerComponent = (function () {
    function AcLayerComponent(layerService, _computationCache, mapLayersService, billboardDrawerService, labelDrawerService, ellipseDrawerService, polylineDrawerService, polygonDrawerService, arcDrawerService, pointDrawerService, modelDrawerService, boxDrawerService, corridorDrawerService, cylinderDrawerService, ellipsoidDrawerSerice, polylineVolumeDrawerService, wallDrawerService, rectangleDrawerService, dynamicEllipseDrawerService, dynamicPolylineDrawerService, staticCircleDrawerService, staticPolylineDrawerService, staticPolygonDrawerService, staticEllipseDrawerService, polylinePrimitiveDrawerService, labelPrimitiveDrawerService, billboardPrimitiveDrawerService) {
        this.layerService = layerService;
        this._computationCache = _computationCache;
        this.mapLayersService = mapLayersService;
        this.show = true;
        this.store = false;
        this.zIndex = 0;
        this.acForRgx = /^let\s+.+\s+of\s+.+$/;
        this.stopObservable = new rxjs_Subject.Subject();
        this._updateStream = new rxjs_Subject.Subject();
        this.entitiesStore = new Map();
        this.layerDrawerDataSources = [];
        this._drawerList = new Map([
            ['billboard', billboardDrawerService],
            ['label', labelDrawerService],
            ['ellipse', ellipseDrawerService],
            ['polyline', polylineDrawerService],
            ['polygon', polygonDrawerService],
            ['arc', arcDrawerService],
            ['point', pointDrawerService],
            ['model', modelDrawerService],
            ['box', boxDrawerService],
            ['corridor', corridorDrawerService],
            ['cylinder', cylinderDrawerService],
            ['ellipsoid', ellipsoidDrawerSerice],
            ['polylineVolume', polylineVolumeDrawerService],
            ['rectangle', rectangleDrawerService],
            ['wall', wallDrawerService],
            ['polylinePrimitive', polylinePrimitiveDrawerService],
            ['labelPrimitive', labelPrimitiveDrawerService],
            ['billboardPrimitive', billboardPrimitiveDrawerService],
            ['dynamicEllipse', dynamicEllipseDrawerService],
            ['dynamicPolyline', dynamicPolylineDrawerService],
            ['staticCircle', staticCircleDrawerService],
            ['staticPolyline', staticPolylineDrawerService],
            ['staticPolygon', staticPolygonDrawerService],
            ['staticEllipse', staticEllipseDrawerService],
        ]);
    }
    AcLayerComponent.prototype.init = function () {
        var _this = this;
        this.initValidParams();
        rxjs_Observable.Observable.merge(this._updateStream, this.observable).takeUntil(this.stopObservable).subscribe(function (notification) {
            _this._computationCache.clear();
            var contextEntity = notification.entity;
            if (_this.store) {
                contextEntity = _this.updateStore(notification);
            }
            _this.context[_this.entityName] = contextEntity;
            _this.layerService.getDescriptions().forEach(function (descriptionComponent) {
                switch (notification.actionType) {
                    case exports.ActionType.ADD_UPDATE:
                        descriptionComponent.draw(_this.context, notification.id, contextEntity);
                        break;
                    case exports.ActionType.DELETE:
                        descriptionComponent.remove(notification.id);
                        break;
                    default:
                        console.error('[ac-layer] unknown AcNotification.actionType for notification: ' + notification);
                }
            });
        });
    };
    AcLayerComponent.prototype.updateStore = function (notification) {
        if (notification.actionType === exports.ActionType.DELETE) {
            this.entitiesStore.delete(notification.id);
            return undefined;
        }
        else {
            if (this.entitiesStore.has(notification.id)) {
                var entity = this.entitiesStore.get(notification.id);
                Object.assign(entity, notification.entity);
                return entity;
            }
            else {
                this.entitiesStore.set(notification.id, notification.entity);
                return notification.entity;
            }
        }
    };
    AcLayerComponent.prototype.initValidParams = function () {
        if (!this.context) {
            throw new Error('ac-layer: must initialize [context] ');
        }
        if (!this.acForRgx.test(this.acFor)) {
            throw new Error('ac-layer: must initialize [acFor] with a valid syntax \' [acFor]=\"let item of observer$\" \' '
                + 'instead received: ' + this.acFor);
        }
        var acForArr = this.acFor.split(' ');
        this.observable = this.context[acForArr[3]];
        this.entityName = acForArr[1];
        if (!this.observable || !(this.observable instanceof rxjs_Observable.Observable)) {
            throw new Error('ac-layer: must initailize [acFor] with rx observable, instead received: ' + this.observable);
        }
    };
    AcLayerComponent.prototype.ngAfterContentInit = function () {
        this.init();
    };
    AcLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._drawerList.forEach(function (drawer, drawerName) {
            var initOptions = _this.options ? _this.options[drawerName] : undefined;
            var drawerDataSources = drawer.init(initOptions);
            if (drawerDataSources) {
                _this.mapLayersService.registerLayerDataSources(drawerDataSources, _this.zIndex);
                (_a = _this.layerDrawerDataSources).push.apply(_a, drawerDataSources);
            }
            drawer.setShow(_this.show);
            var _a;
        });
    };
    AcLayerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.show && !changes.show.firstChange) {
            var showValue_1 = changes['show'].currentValue;
            this._drawerList.forEach(function (drawer) { return drawer.setShow(showValue_1); });
        }
        if (changes.zIndex && !changes.zIndex.firstChange) {
            var zIndexValue = changes['zIndex'].currentValue;
            this.mapLayersService.updateAndRefresh(this.layerDrawerDataSources, zIndexValue);
        }
    };
    AcLayerComponent.prototype.ngOnDestroy = function () {
        this.mapLayersService.removeDataSources(this.layerDrawerDataSources);
        this.stopObservable.next(true);
        this.removeAll();
    };
    AcLayerComponent.prototype.getStore = function () {
        return this.entitiesStore;
    };
    
    AcLayerComponent.prototype.removeAll = function () {
        this.layerService.getDescriptions().forEach(function (description) { return description.removeAll(); });
        this.entitiesStore.clear();
    };
    AcLayerComponent.prototype.remove = function (entityId) {
        this._updateStream.next({ id: entityId, actionType: exports.ActionType.DELETE });
        this.entitiesStore.delete(entityId);
    };
    AcLayerComponent.prototype.updateNotification = function (notification) {
        this._updateStream.next(notification);
    };
    AcLayerComponent.prototype.update = function (entity, id) {
        this._updateStream.next({ entity: entity, id: id, actionType: exports.ActionType.ADD_UPDATE });
    };
    AcLayerComponent.prototype.refreshAll = function (collection) {
        var _this = this;
        rxjs_Observable.Observable.from(collection).subscribe(function (entity) { return _this._updateStream.next(entity); });
    };
    AcLayerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-layer',
                    template: '',
                    providers: [
                        LayerService,
                        ComputationCache,
                        BillboardDrawerService,
                        LabelDrawerService,
                        EllipseDrawerService,
                        PolylineDrawerService,
                        ArcDrawerService,
                        PointDrawerService,
                        PolygonDrawerService,
                        ModelDrawerService,
                        BoxDrawerService,
                        CorridorDrawerService,
                        CylinderDrawerService,
                        EllipsoidDrawerService,
                        PolylineVolumeDrawerService,
                        WallDrawerService,
                        RectangleDrawerService,
                        PolylinePrimitiveDrawerService,
                        LabelPrimitiveDrawerService,
                        BillboardPrimitiveDrawerService,
                        DynamicEllipseDrawerService,
                        DynamicPolylineDrawerService,
                        StaticCircleDrawerService,
                        StaticPolylineDrawerService,
                        StaticPolygonDrawerService,
                        StaticEllipseDrawerService,
                    ]
                },] },
    ];
    AcLayerComponent.ctorParameters = function () { return [
        { type: LayerService, },
        { type: ComputationCache, },
        { type: MapLayersService, },
        { type: BillboardDrawerService, },
        { type: LabelDrawerService, },
        { type: EllipseDrawerService, },
        { type: PolylineDrawerService, },
        { type: PolygonDrawerService, },
        { type: ArcDrawerService, },
        { type: PointDrawerService, },
        { type: ModelDrawerService, },
        { type: BoxDrawerService, },
        { type: CorridorDrawerService, },
        { type: CylinderDrawerService, },
        { type: EllipsoidDrawerService, },
        { type: PolylineVolumeDrawerService, },
        { type: WallDrawerService, },
        { type: RectangleDrawerService, },
        { type: DynamicEllipseDrawerService, },
        { type: DynamicPolylineDrawerService, },
        { type: StaticCircleDrawerService, },
        { type: StaticPolylineDrawerService, },
        { type: StaticPolygonDrawerService, },
        { type: StaticEllipseDrawerService, },
        { type: PolylinePrimitiveDrawerService, },
        { type: LabelPrimitiveDrawerService, },
        { type: BillboardPrimitiveDrawerService, },
    ]; };
    AcLayerComponent.propDecorators = {
        'show': [{ type: _angular_core.Input },],
        'acFor': [{ type: _angular_core.Input },],
        'context': [{ type: _angular_core.Input },],
        'store': [{ type: _angular_core.Input },],
        'options': [{ type: _angular_core.Input },],
        'zIndex': [{ type: _angular_core.Input },],
    };
    return AcLayerComponent;
}());

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
        'props': [{ type: _angular_core.Input },],
    };
    return EntityOnMapComponent;
}());

var __extends$28 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcBillboardComponent = (function (_super) {
    __extends$28(AcBillboardComponent, _super);
    function AcBillboardComponent(billboardDrawer) {
        return _super.call(this, billboardDrawer) || this;
    }
    AcBillboardComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-billboard',
                    template: '',
                },] },
    ];
    AcBillboardComponent.ctorParameters = function () { return [
        { type: BillboardDrawerService, },
    ]; };
    return AcBillboardComponent;
}(EntityOnMapComponent));

var BasicDesc = (function () {
    function BasicDesc(_drawer, _layerService, _computationCache, _cesiumProperties) {
        this._drawer = _drawer;
        this._layerService = _layerService;
        this._computationCache = _computationCache;
        this._cesiumProperties = _cesiumProperties;
        this.onDraw = new _angular_core.EventEmitter();
        this.onRemove = new _angular_core.EventEmitter();
        this._cesiumObjectsMap = new Map();
    }
    BasicDesc.prototype._propsEvaluator = function (context) {
        return this._propsEvaluateFn(this._computationCache, context);
    };
    BasicDesc.prototype._getPropsAssigner = function () {
        var _this = this;
        return function (cesiumObject, desc) { return _this._propsAssignerFn(cesiumObject, desc); };
    };
    BasicDesc.prototype.ngOnInit = function () {
        if (!this.props) {
            console.error('ac-desc components error: [props] input is mandatory');
        }
        this._layerService.registerDescription(this);
        this._propsEvaluateFn = this._cesiumProperties.createEvaluator(this.props);
        this._propsAssignerFn = this._cesiumProperties.createAssigner(this.props);
    };
    BasicDesc.prototype.getCesiumObjectsMap = function () {
        return this._cesiumObjectsMap;
    };
    BasicDesc.prototype.draw = function (context, id, entity) {
        var cesiumProps = this._propsEvaluator(context);
        if (!this._cesiumObjectsMap.has(id)) {
            var cesiumObject = this._drawer.add(cesiumProps);
            this.onDraw.emit({
                acEntity: entity,
                cesiumEntity: cesiumObject,
                entityId: id,
            });
            cesiumObject.acEntity = entity;
            this._cesiumObjectsMap.set(id, cesiumObject);
        }
        else {
            var cesiumObject = this._cesiumObjectsMap.get(id);
            this.onDraw.emit({
                acEntity: entity,
                cesiumEntity: cesiumObject,
                entityId: id,
            });
            cesiumObject.acEntity = entity;
            this._drawer.setPropsAssigner(this._getPropsAssigner());
            this._drawer.update(cesiumObject, cesiumProps);
        }
    };
    BasicDesc.prototype.remove = function (id) {
        var cesiumObject = this._cesiumObjectsMap.get(id);
        this.onRemove.emit({
            acEntity: cesiumObject.acEntity,
            cesiumEntity: cesiumObject,
            entityId: id,
        });
        this._drawer.remove(cesiumObject);
        this._cesiumObjectsMap.delete(id);
    };
    BasicDesc.prototype.removeAll = function () {
        this._cesiumObjectsMap.clear();
        this._drawer.removeAll();
    };
    BasicDesc.prototype.ngOnDestroy = function () {
        this._layerService.unregisterDescription(this);
        this.removeAll();
    };
    BasicDesc.propDecorators = {
        'props': [{ type: _angular_core.Input },],
        'onDraw': [{ type: _angular_core.Output },],
        'onRemove': [{ type: _angular_core.Output },],
    };
    return BasicDesc;
}());

var JsonMapper = (function () {
    function JsonMapper() {
        this._mapper = new jsonStringMapper.JsonStringMapper();
    }
    JsonMapper.prototype.map = function (expression) {
        return this._mapper.map(expression);
    };
    JsonMapper.decorators = [
        { type: _angular_core.Injectable },
    ];
    JsonMapper.ctorParameters = function () { return []; };
    return JsonMapper;
}());

var SmartAssigner = (function () {
    function SmartAssigner() {
    }
    SmartAssigner.create = function (props, allowUndefined) {
        if (props === void 0) { props = []; }
        if (allowUndefined === void 0) { allowUndefined = true; }
        var fnBody = "";
        props.forEach(function (prop) {
            if (!allowUndefined) {
                fnBody += "if (obj2['" + prop + "'] !== undefined) { obj1['" + prop + "'] = obj2['" + prop + "']; } ";
            }
            else {
                fnBody += "obj1['" + prop + "'] = obj2['" + prop + "']; ";
            }
        });
        fnBody += "return obj1";
        var assignFn = new Function('obj1', 'obj2', fnBody);
        return function smartAssigner(obj1, obj2) {
            return assignFn(obj1, obj2);
        };
    };
    return SmartAssigner;
}());

var CesiumProperties = (function () {
    function CesiumProperties(_parser, _jsonMapper) {
        this._parser = _parser;
        this._jsonMapper = _jsonMapper;
        this._assignersCache = new Map();
        this._evaluatorsCache = new Map();
    }
    CesiumProperties.prototype._compile = function (expression) {
        var _this = this;
        var cesiumDesc = {};
        var propsMap = new Map();
        var resultMap = this._jsonMapper.map(expression);
        resultMap.forEach(function (resultExpression, prop) { return propsMap.set(prop, {
            expression: resultExpression,
            get: _this._parser.eval(resultExpression)
        }); });
        propsMap.forEach(function (value, prop) {
            cesiumDesc[prop || 'undefined'] = "cache.get(`" + value.expression + "`, () => propsMap.get('" + prop + "').get(context))";
        });
        var fnBody = "return " + JSON.stringify(cesiumDesc).replace(/"/g, '') + ";";
        var getFn = new Function('propsMap', 'cache', 'context', fnBody);
        return function evaluateCesiumProps(cache, context) {
            return getFn(propsMap, cache, context);
        };
    };
    CesiumProperties.prototype._build = function (expression) {
        var props = Array.from(this._jsonMapper.map(expression).keys());
        var smartAssigner = SmartAssigner.create(props);
        return function assignCesiumProps(oldVal, newVal) {
            return smartAssigner(oldVal, newVal);
        };
    };
    CesiumProperties.prototype.createEvaluator = function (expression) {
        if (this._evaluatorsCache.has(expression)) {
            return this._evaluatorsCache.get(expression);
        }
        var evaluatorFn = this._compile(expression);
        this._evaluatorsCache.set(expression, evaluatorFn);
        return evaluatorFn;
    };
    CesiumProperties.prototype.createAssigner = function (expression) {
        if (this._assignersCache.has(expression)) {
            return this._assignersCache.get(expression);
        }
        var assignFn = this._build(expression);
        this._assignersCache.set(expression, assignFn);
        return assignFn;
    };
    CesiumProperties.decorators = [
        { type: _angular_core.Injectable },
    ];
    CesiumProperties.ctorParameters = function () { return [
        { type: angular2parse.Parse, },
        { type: JsonMapper, },
    ]; };
    return CesiumProperties;
}());

var __extends$29 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcBillboardDescComponent = (function (_super) {
    __extends$29(AcBillboardDescComponent, _super);
    function AcBillboardDescComponent(billboardDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, billboardDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcBillboardDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-billboard-desc',
                    template: ''
                },] },
    ];
    AcBillboardDescComponent.ctorParameters = function () { return [
        { type: BillboardDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcBillboardDescComponent;
}(BasicDesc));

var __extends$30 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcEllipseDescComponent = (function (_super) {
    __extends$30(AcEllipseDescComponent, _super);
    function AcEllipseDescComponent(ellipseDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, ellipseDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcEllipseDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-ellipse-desc',
                    template: '',
                },] },
    ];
    AcEllipseDescComponent.ctorParameters = function () { return [
        { type: EllipseDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcEllipseDescComponent;
}(BasicDesc));

var __extends$31 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolylineDescComponent = (function (_super) {
    __extends$31(AcPolylineDescComponent, _super);
    function AcPolylineDescComponent(dynamicPolylineDrawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, dynamicPolylineDrawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcPolylineDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polyline-desc',
                    template: ''
                },] },
    ];
    AcPolylineDescComponent.ctorParameters = function () { return [
        { type: PolylineDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcPolylineDescComponent;
}(BasicDesc));

var PixelOffsetPipe = (function () {
    function PixelOffsetPipe() {
    }
    PixelOffsetPipe.prototype.transform = function (value, args) {
        return new Cesium.Cartesian2(value[0], value[1]);
    };
    PixelOffsetPipe.decorators = [
        { type: _angular_core.Pipe, args: [{
                    name: 'pixelOffset'
                },] },
    ];
    PixelOffsetPipe.ctorParameters = function () { return []; };
    return PixelOffsetPipe;
}());

var RadiansToDegreesPipe = (function () {
    function RadiansToDegreesPipe() {
    }
    RadiansToDegreesPipe.prototype.transform = function (value, args) {
        return (360 - Math.round(180 * value / Math.PI)) % 360;
    };
    RadiansToDegreesPipe.decorators = [
        { type: _angular_core.Pipe, args: [{
                    name: 'radiansToDegrees'
                },] },
    ];
    RadiansToDegreesPipe.ctorParameters = function () { return []; };
    return RadiansToDegreesPipe;
}());

var __extends$32 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcLabelDescComponent = (function (_super) {
    __extends$32(AcLabelDescComponent, _super);
    function AcLabelDescComponent(labelDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, labelDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcLabelDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-label-desc',
                    template: '',
                },] },
    ];
    AcLabelDescComponent.ctorParameters = function () { return [
        { type: LabelDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcLabelDescComponent;
}(BasicDesc));

var UtilsModule = (function () {
    function UtilsModule() {
    }
    UtilsModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule],
                    providers: []
                },] },
    ];
    UtilsModule.ctorParameters = function () { return []; };
    return UtilsModule;
}());

var GeoUtilsService = (function () {
    function GeoUtilsService(cesiumService) {
        this.cesiumService = cesiumService;
    }
    GeoUtilsService.pointByLocationDistanceAndAzimuth = function (currentLocation, meterDistance, radianAzimuth, isInputCartesian) {
        if (isInputCartesian === void 0) { isInputCartesian = false; }
        var distance = meterDistance / Cesium.Ellipsoid.WGS84.maximumRadius;
        var curLat = isInputCartesian ? Cesium.Cartographic.fromCartesian(currentLocation).latitude : currentLocation.latitude;
        var curLon = isInputCartesian ? Cesium.Cartographic.fromCartesian(currentLocation).longitude : currentLocation.longitude;
        var destinationLat = Math.asin(Math.sin(curLat) * Math.cos(distance) +
            Math.cos(curLat) * Math.sin(distance) * Math.cos(radianAzimuth));
        var destinationLon = curLon + Math.atan2(Math.sin(radianAzimuth) * Math.sin(distance) * Math.cos(curLat), Math.cos(distance) - Math.sin(curLat) * Math.sin(destinationLat));
        destinationLon = (destinationLon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
        return Cesium.Cartesian3.fromRadians(destinationLon, destinationLat);
    };
    GeoUtilsService.prototype.screenPositionToCartesian3 = function (screenPos) {
        var camera = this.cesiumService.getViewer().camera;
        return camera.pickEllipsoid(screenPos);
    };
    GeoUtilsService.decorators = [
        { type: _angular_core.Injectable },
    ];
    GeoUtilsService.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    return GeoUtilsService;
}());

var __extends$33 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcCircleDescComponent = (function (_super) {
    __extends$33(AcCircleDescComponent, _super);
    function AcCircleDescComponent(ellipseDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, ellipseDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcCircleDescComponent.prototype._propsEvaluator = function (context) {
        var cesiumProps = _super.prototype._propsEvaluator.call(this, context);
        cesiumProps.semiMajorAxis = cesiumProps.radius;
        cesiumProps.semiMinorAxis = cesiumProps.radius;
        return cesiumProps;
    };
    AcCircleDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-circle-desc',
                    template: ''
                },] },
    ];
    AcCircleDescComponent.ctorParameters = function () { return [
        { type: EllipseDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcCircleDescComponent;
}(BasicDesc));

var __extends$35 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicStaticPrimitiveDesc = (function (_super) {
    __extends$35(BasicStaticPrimitiveDesc, _super);
    function BasicStaticPrimitiveDesc(_staticPrimitiveDrawer, layerService, computationCache, cesiumProperties) {
        var _this = _super.call(this, _staticPrimitiveDrawer, layerService, computationCache, cesiumProperties) || this;
        _this._staticPrimitiveDrawer = _staticPrimitiveDrawer;
        return _this;
    }
    BasicStaticPrimitiveDesc.prototype.ngOnInit = function () {
        this._layerService.registerDescription(this);
        this._geometryPropsEvaluator = this._cesiumProperties.createEvaluator(this.geometryProps);
        this._instancePropsEvaluator = this._cesiumProperties.createEvaluator(this.instanceProps);
        this._primitivePropsEvaluator = this._cesiumProperties.createEvaluator(this.primitiveProps);
    };
    BasicStaticPrimitiveDesc.prototype.draw = function (context, id, entity) {
        var geometryProps = this._geometryPropsEvaluator(this._computationCache, context);
        var instanceProps = this._instancePropsEvaluator(this._computationCache, context);
        var primitiveProps = this._primitivePropsEvaluator(this._computationCache, context);
        if (!this._cesiumObjectsMap.has(id)) {
            var primitive = this._staticPrimitiveDrawer.add(geometryProps, instanceProps, primitiveProps);
            primitive.acEntity = entity;
            this._cesiumObjectsMap.set(id, primitive);
        }
        else {
            var primitive = this._cesiumObjectsMap.get(id);
            this._staticPrimitiveDrawer.update(primitive, geometryProps, instanceProps, primitiveProps);
        }
    };
    BasicStaticPrimitiveDesc.propDecorators = {
        'geometryProps': [{ type: _angular_core.Input },],
        'instanceProps': [{ type: _angular_core.Input },],
        'primitiveProps': [{ type: _angular_core.Input },],
    };
    return BasicStaticPrimitiveDesc;
}(BasicDesc));

var __extends$34 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcArcDescComponent = (function (_super) {
    __extends$34(AcArcDescComponent, _super);
    function AcArcDescComponent(arcDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, arcDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcArcDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-arc-desc',
                    template: ''
                },] },
    ];
    AcArcDescComponent.ctorParameters = function () { return [
        { type: ArcDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcArcDescComponent;
}(BasicStaticPrimitiveDesc));

var AcEntity = (function () {
    function AcEntity(json) {
        Object.assign(this, json);
    }
    AcEntity.create = function (json) {
        if (json) {
            return Object.assign(new AcEntity(), json);
        }
        return new AcEntity();
    };
    return AcEntity;
}());

var AcNotification = (function () {
    function AcNotification() {
    }
    return AcNotification;
}());

(function (MapLayerProviderOptions) {
    MapLayerProviderOptions[MapLayerProviderOptions["ArcGisMapServer"] = Cesium.ArcGisMapServerImageryProvider] = "ArcGisMapServer";
    MapLayerProviderOptions[MapLayerProviderOptions["WebMapTileService"] = Cesium.WebMapTileServiceImageryProvider] = "WebMapTileService";
    MapLayerProviderOptions[MapLayerProviderOptions["MapTileService"] = Cesium.createTileMapServiceImageryProvider] = "MapTileService";
    MapLayerProviderOptions[MapLayerProviderOptions["WebMapService"] = Cesium.WebMapServiceImageryProvider] = "WebMapService";
    MapLayerProviderOptions[MapLayerProviderOptions["SingleTileImagery"] = Cesium.SingleTileImageryProvider] = "SingleTileImagery";
    MapLayerProviderOptions[MapLayerProviderOptions["OpenStreetMap"] = Cesium.createOpenStreetMapImageryProvider] = "OpenStreetMap";
    MapLayerProviderOptions[MapLayerProviderOptions["BingMaps"] = Cesium.BingMapsImageryProvider] = "BingMaps";
    MapLayerProviderOptions[MapLayerProviderOptions["GoogleEarthEnterpriseMaps"] = Cesium.GoogleEarthEnterpriseMapsProvider] = "GoogleEarthEnterpriseMaps";
    MapLayerProviderOptions[MapLayerProviderOptions["MapBox"] = Cesium.MapboxImageryProvider] = "MapBox";
    MapLayerProviderOptions[MapLayerProviderOptions["UrlTemplateImagery"] = Cesium.UrlTemplateImageryProvider] = "UrlTemplateImagery";
    MapLayerProviderOptions[MapLayerProviderOptions["OFFLINE"] = null] = "OFFLINE";
})(exports.MapLayerProviderOptions || (exports.MapLayerProviderOptions = {}));

var AcMapLayerProviderComponent = (function () {
    function AcMapLayerProviderComponent(cesiumService) {
        this.cesiumService = cesiumService;
        this.options = {};
        this.provider = exports.MapLayerProviderOptions.OFFLINE;
        this.show = true;
        this.alpha = 1.0;
        this.brightness = 1.0;
        this.contrast = 1.0;
        this.imageryLayersCollection = this.cesiumService.getScene().imageryLayers;
    }
    AcMapLayerProviderComponent.prototype.createOfflineMapProvider = function () {
        return Cesium.createTileMapServiceImageryProvider({
            url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
        });
    };
    AcMapLayerProviderComponent.prototype.ngOnInit = function () {
        if (!Checker.present(this.options.url) && this.provider !== exports.MapLayerProviderOptions.OFFLINE) {
            throw new Error('options must have a url');
        }
        switch (this.provider) {
            case exports.MapLayerProviderOptions.WebMapService:
            case exports.MapLayerProviderOptions.WebMapTileService:
            case exports.MapLayerProviderOptions.ArcGisMapServer:
            case exports.MapLayerProviderOptions.SingleTileImagery:
            case exports.MapLayerProviderOptions.BingMaps:
            case exports.MapLayerProviderOptions.GoogleEarthEnterpriseMaps:
            case exports.MapLayerProviderOptions.MapBox:
            case exports.MapLayerProviderOptions.UrlTemplateImagery:
                this.layerProvider = new this.provider(this.options);
                break;
            case exports.MapLayerProviderOptions.MapTileService:
            case exports.MapLayerProviderOptions.OpenStreetMap:
                this.layerProvider = this.provider(this.options);
                break;
            case exports.MapLayerProviderOptions.OFFLINE:
                this.layerProvider = this.createOfflineMapProvider();
                break;
            default:
                console.log('ac-map-layer-provider: [provider] wasn\'t found. setting OFFLINE provider as default');
                this.layerProvider = this.createOfflineMapProvider();
                break;
        }
        if (this.show) {
            this.imageryLayer = this.imageryLayersCollection.addImageryProvider(this.layerProvider, this.index);
            this.imageryLayer.alpha = this.alpha;
            this.imageryLayer.contrast = this.contrast;
            this.imageryLayer.brightness = this.brightness;
        }
    };
    AcMapLayerProviderComponent.prototype.ngOnChanges = function (changes) {
        if (changes['show'] && !changes['show'].isFirstChange()) {
            var showValue = changes['show'].currentValue;
            if (showValue) {
                if (this.imageryLayer) {
                    this.imageryLayersCollection.add(this.imageryLayer, this.index);
                }
                else {
                    this.imageryLayer = this.imageryLayersCollection.addImageryProvider(this.layerProvider, this.index);
                    this.imageryLayer.alpha = this.alpha;
                    this.imageryLayer.contrast = this.contrast;
                    this.imageryLayer.brightness = this.brightness;
                }
            }
            else if (this.imageryLayer) {
                this.imageryLayersCollection.remove(this.imageryLayer, false);
            }
        }
        if (changes['alpha'] && !changes['alpha'].isFirstChange() && this.imageryLayer) {
            this.imageryLayer.alpha = this.alpha;
        }
        if (changes['contrast'] && !changes['contrast'].isFirstChange() && this.imageryLayer) {
            this.imageryLayer.contrast = this.contrast;
        }
        if (changes['brightness'] && !changes['brightness'].isFirstChange() && this.imageryLayer) {
            this.imageryLayer.brightness = this.brightness;
        }
    };
    AcMapLayerProviderComponent.prototype.ngOnDestroy = function () {
        if (this.imageryLayer) {
            this.imageryLayersCollection.remove(this.imageryLayer, true);
        }
    };
    AcMapLayerProviderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-map-layer-provider',
                    template: '',
                },] },
    ];
    AcMapLayerProviderComponent.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    AcMapLayerProviderComponent.propDecorators = {
        'options': [{ type: _angular_core.Input },],
        'provider': [{ type: _angular_core.Input },],
        'index': [{ type: _angular_core.Input },],
        'show': [{ type: _angular_core.Input },],
        'alpha': [{ type: _angular_core.Input },],
        'brightness': [{ type: _angular_core.Input },],
        'contrast': [{ type: _angular_core.Input },],
    };
    return AcMapLayerProviderComponent;
}());

var __extends$36 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPointDescComponent = (function (_super) {
    __extends$36(AcPointDescComponent, _super);
    function AcPointDescComponent(pointDrawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, pointDrawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcPointDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-point-desc',
                    template: ''
                },] },
    ];
    AcPointDescComponent.ctorParameters = function () { return [
        { type: PointDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcPointDescComponent;
}(BasicDesc));

var __extends$37 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcLabelComponent = (function (_super) {
    __extends$37(AcLabelComponent, _super);
    function AcLabelComponent(labelDrawer) {
        return _super.call(this, labelDrawer) || this;
    }
    AcLabelComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-label',
                    template: '',
                },] },
    ];
    AcLabelComponent.ctorParameters = function () { return [
        { type: LabelDrawerService, },
    ]; };
    return AcLabelComponent;
}(EntityOnMapComponent));

var __extends$38 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolylineComponent = (function (_super) {
    __extends$38(AcPolylineComponent, _super);
    function AcPolylineComponent(polylineDrawer) {
        return _super.call(this, polylineDrawer) || this;
    }
    AcPolylineComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polyline',
                    template: '',
                },] },
    ];
    AcPolylineComponent.ctorParameters = function () { return [
        { type: PolylineDrawerService, },
    ]; };
    return AcPolylineComponent;
}(EntityOnMapComponent));

var __extends$39 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcEllipseComponent = (function (_super) {
    __extends$39(AcEllipseComponent, _super);
    function AcEllipseComponent(ellipseDrawer) {
        return _super.call(this, ellipseDrawer) || this;
    }
    AcEllipseComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-ellipse',
                    template: '',
                },] },
    ];
    AcEllipseComponent.ctorParameters = function () { return [
        { type: EllipseDrawerService, },
    ]; };
    return AcEllipseComponent;
}(EntityOnMapComponent));

var __extends$40 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPointComponent = (function (_super) {
    __extends$40(AcPointComponent, _super);
    function AcPointComponent(pointDrawer) {
        return _super.call(this, pointDrawer) || this;
    }
    AcPointComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-point',
                    template: '',
                },] },
    ];
    AcPointComponent.ctorParameters = function () { return [
        { type: PointDrawerService, },
    ]; };
    return AcPointComponent;
}(EntityOnMapComponent));

var AcHtmlComponent = (function () {
    function AcHtmlComponent(cesiumService, elementRef, renderer) {
        this.cesiumService = cesiumService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isDraw = false;
    }
    AcHtmlComponent.prototype.setScreenPosition = function (screenPosition) {
        if (screenPosition) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'top', screenPosition.y + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'left', screenPosition.x + "px");
        }
    };
    AcHtmlComponent.prototype.remove = function () {
        if (this.isDraw) {
            this.isDraw = false;
            this.cesiumService.getScene().preRender.removeEventListener(this.preRenderEventListener);
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', "none");
        }
    };
    AcHtmlComponent.prototype.add = function () {
        var _this = this;
        if (!this.isDraw) {
            this.isDraw = true;
            this.preRenderEventListener = function () {
                var screenPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(_this.cesiumService.getScene(), _this.props.position);
                _this.setScreenPosition(screenPosition);
            };
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', "block");
            this.cesiumService.getScene().preRender.addEventListener(this.preRenderEventListener);
        }
    };
    AcHtmlComponent.prototype.ngDoCheck = function () {
        if (this.props.show === undefined || this.props.show) {
            this.add();
        }
        else {
            this.remove();
        }
    };
    AcHtmlComponent.prototype.ngOnDestroy = function () {
        this.remove();
    };
    AcHtmlComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-html',
                    template: "<ng-content></ng-content>",
                    styles: [":host {\n                position: absolute;\n                z-index: 100;\n\t\t\t\t}"]
                },] },
    ];
    AcHtmlComponent.ctorParameters = function () { return [
        { type: CesiumService, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer2, },
    ]; };
    AcHtmlComponent.propDecorators = {
        'props': [{ type: _angular_core.Input },],
    };
    return AcHtmlComponent;
}());

var __extends$41 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcCircleComponent = (function (_super) {
    __extends$41(AcCircleComponent, _super);
    function AcCircleComponent(ellipseDrawerService) {
        return _super.call(this, ellipseDrawerService) || this;
    }
    AcCircleComponent.prototype.updateEllipseProps = function () {
        this.props.semiMajorAxis = this.props.radius;
        this.props.semiMinorAxis = this.props.radius;
        this.props.rotation = 0.0;
    };
    AcCircleComponent.prototype.drawOnMap = function () {
        this.updateEllipseProps();
        _super.prototype.drawOnMap.call(this);
    };
    AcCircleComponent.prototype.updateOnMap = function () {
        this.updateEllipseProps();
        _super.prototype.updateOnMap.call(this);
    };
    AcCircleComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-circle',
                    template: '',
                },] },
    ];
    AcCircleComponent.ctorParameters = function () { return [
        { type: EllipseDrawerService, },
    ]; };
    return AcCircleComponent;
}(EntityOnMapComponent));

var __extends$42 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcArcComponent = (function (_super) {
    __extends$42(AcArcComponent, _super);
    function AcArcComponent(arcDrawer) {
        return _super.call(this, arcDrawer) || this;
    }
    AcArcComponent.prototype.updateOnMap = function () {
        if (this.selfPrimitiveIsDraw) {
            this.removeFromMap();
            this.drawOnMap();
        }
    };
    AcArcComponent.prototype.drawOnMap = function () {
        this.selfPrimitiveIsDraw = true;
        return this.selfPrimitive = this._drawer.add(this.geometryProps, this.instanceProps, this.primitiveProps);
    };
    AcArcComponent.prototype.ngOnChanges = function (changes) {
        var geometryProps = changes['geometryProps'];
        var instanceProps = changes['instanceProps'];
        var primitiveProps = changes['primitiveProps'];
        if (geometryProps.currentValue !== geometryProps.previousValue ||
            instanceProps.currentValue !== instanceProps.previousValue ||
            primitiveProps.currentValue !== primitiveProps.previousValue) {
            this.updateOnMap();
        }
    };
    AcArcComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-arc',
                    template: '',
                },] },
    ];
    AcArcComponent.ctorParameters = function () { return [
        { type: ArcDrawerService, },
    ]; };
    AcArcComponent.propDecorators = {
        'geometryProps': [{ type: _angular_core.Input },],
        'instanceProps': [{ type: _angular_core.Input },],
        'primitiveProps': [{ type: _angular_core.Input },],
    };
    return AcArcComponent;
}(EntityOnMapComponent));

var __extends$43 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolygonDescComponent = (function (_super) {
    __extends$43(AcPolygonDescComponent, _super);
    function AcPolygonDescComponent(polygonDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, polygonDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcPolygonDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polygon-desc',
                    template: ''
                },] },
    ];
    AcPolygonDescComponent.ctorParameters = function () { return [
        { type: PolygonDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcPolygonDescComponent;
}(BasicDesc));

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var UTM = geodesy.Utm;
var LatLonEllipsoidal$1 = geodesy.LatLonEllipsoidal;
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
        return new LatLonEllipsoidal$1(latitude, longitude, undefined, height).toUtm();
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
        { type: _angular_core.Injectable },
    ];
    CoordinateConverter.ctorParameters = function () { return [
        { type: CesiumService, decorators: [{ type: _angular_core.Optional },] },
    ]; };
    return CoordinateConverter;
}());

var AcDefaultPlonterComponent = (function () {
    function AcDefaultPlonterComponent(plonterService, cd, geoConverter) {
        this.plonterService = plonterService;
        this.cd = cd;
        this.geoConverter = geoConverter;
    }
    AcDefaultPlonterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plonterService.plonterChangeNotifier.subscribe(function () { return _this.cd.detectChanges(); });
    };
    Object.defineProperty(AcDefaultPlonterComponent.prototype, "plonterPosition", {
        get: function () {
            if (this.plonterService.plonterShown) {
                var screenPos = this.plonterService.plonterClickPosition.endPosition;
                return this.geoConverter.screenToCartesian3(screenPos, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    AcDefaultPlonterComponent.prototype.chooseEntity = function (entity) {
        this.plonterService.resolvePlonter(entity);
    };
    AcDefaultPlonterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-default-plonter',
                    template: "\n        <ac-html *ngIf=\"plonterService.plonterShown\" [props]=\"{\n        position: plonterPosition\n      }\">\n            <div class=\"plonter-context-menu\">\n                <div *ngFor=\"let entity of plonterService.entitesToPlonter\">\n                    <div class=\"plonter-item\" (click)=\"chooseEntity(entity)\">{{entity?.name || entity?.id}}\n                    </div>\n                </div>\n            </div>\n        </ac-html>\n    ",
                    styles: ["\n        .plonter-context-menu {\n            background-color: rgba(250, 250, 250, 0.8);\n            box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.15);\n        }\n\n        .plonter-item {\n            cursor: pointer;\n            padding: 2px 15px;\n            text-align: start;\n        }\n\n        .plonter-item:hover {\n            background-color: rgba(0, 0, 0, 0.15);\n        }\n    \n    "],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    providers: [CoordinateConverter],
                },] },
    ];
    AcDefaultPlonterComponent.ctorParameters = function () { return [
        { type: PlonterService, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: CoordinateConverter, },
    ]; };
    return AcDefaultPlonterComponent;
}());

var __extends$44 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolygonComponent = (function (_super) {
    __extends$44(AcPolygonComponent, _super);
    function AcPolygonComponent(polygonDrawer) {
        return _super.call(this, polygonDrawer) || this;
    }
    AcPolygonComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polygon',
                    template: ''
                },] },
    ];
    AcPolygonComponent.ctorParameters = function () { return [
        { type: PolygonDrawerService, },
    ]; };
    return AcPolygonComponent;
}(EntityOnMapComponent));

var __extends$45 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcStaticEllipseDescComponent = (function (_super) {
    __extends$45(AcStaticEllipseDescComponent, _super);
    function AcStaticEllipseDescComponent(ellipseDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, ellipseDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcStaticEllipseDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-static-ellipse-desc',
                    template: ''
                },] },
    ];
    AcStaticEllipseDescComponent.ctorParameters = function () { return [
        { type: StaticEllipseDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcStaticEllipseDescComponent;
}(BasicStaticPrimitiveDesc));

var __extends$46 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcDynamicEllipseDescComponent = (function (_super) {
    __extends$46(AcDynamicEllipseDescComponent, _super);
    function AcDynamicEllipseDescComponent(ellipseDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, ellipseDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcDynamicEllipseDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-dynamic-ellipse-desc',
                    template: '',
                },] },
    ];
    AcDynamicEllipseDescComponent.ctorParameters = function () { return [
        { type: DynamicEllipseDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcDynamicEllipseDescComponent;
}(BasicDesc));

var __extends$47 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcDynamicPolylineDescComponent = (function (_super) {
    __extends$47(AcDynamicPolylineDescComponent, _super);
    function AcDynamicPolylineDescComponent(dynamicPolylineDrawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, dynamicPolylineDrawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcDynamicPolylineDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-dynamic-polyline-desc',
                    template: ''
                },] },
    ];
    AcDynamicPolylineDescComponent.ctorParameters = function () { return [
        { type: DynamicPolylineDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcDynamicPolylineDescComponent;
}(BasicDesc));

var __extends$48 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcStaticPolygonDescComponent = (function (_super) {
    __extends$48(AcStaticPolygonDescComponent, _super);
    function AcStaticPolygonDescComponent(polygonDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, polygonDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcStaticPolygonDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-static-polygon-desc',
                    template: '',
                },] },
    ];
    AcStaticPolygonDescComponent.ctorParameters = function () { return [
        { type: StaticPolygonDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcStaticPolygonDescComponent;
}(BasicStaticPrimitiveDesc));

var __extends$49 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcStaticCircleDescComponent = (function (_super) {
    __extends$49(AcStaticCircleDescComponent, _super);
    function AcStaticCircleDescComponent(staticCircleDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, staticCircleDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcStaticCircleDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-static-circle',
                    template: ''
                },] },
    ];
    AcStaticCircleDescComponent.ctorParameters = function () { return [
        { type: StaticCircleDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcStaticCircleDescComponent;
}(BasicStaticPrimitiveDesc));

var __extends$50 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcDynamicCircleDescComponent = (function (_super) {
    __extends$50(AcDynamicCircleDescComponent, _super);
    function AcDynamicCircleDescComponent(ellipseDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, ellipseDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcDynamicCircleDescComponent.prototype._propsEvaluator = function (context) {
        var cesiumProps = _super.prototype._propsEvaluator.call(this, context);
        cesiumProps.semiMajorAxis = cesiumProps.radius;
        cesiumProps.semiMinorAxis = cesiumProps.radius;
        return cesiumProps;
    };
    AcDynamicCircleDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-dynamic-circle-desc',
                    template: ''
                },] },
    ];
    AcDynamicCircleDescComponent.ctorParameters = function () { return [
        { type: DynamicEllipseDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcDynamicCircleDescComponent;
}(BasicDesc));

var __extends$51 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcStaticPolylineDescComponent = (function (_super) {
    __extends$51(AcStaticPolylineDescComponent, _super);
    function AcStaticPolylineDescComponent(polylineDrawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, polylineDrawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcStaticPolylineDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-static-polyline-desc',
                    template: ''
                },] },
    ];
    AcStaticPolylineDescComponent.ctorParameters = function () { return [
        { type: StaticPolylineDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcStaticPolylineDescComponent;
}(BasicStaticPrimitiveDesc));

var __extends$52 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcModelDescComponent = (function (_super) {
    __extends$52(AcModelDescComponent, _super);
    function AcModelDescComponent(modelDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, modelDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcModelDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
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
        { type: _angular_core.Component, args: [{
                    selector: 'ac-3d-tile-layer',
                    template: '',
                },] },
    ];
    AcTileset3dComponent.ctorParameters = function () { return [
        { type: CesiumService, },
    ]; };
    AcTileset3dComponent.propDecorators = {
        'options': [{ type: _angular_core.Input },],
        'index': [{ type: _angular_core.Input },],
        'show': [{ type: _angular_core.Input },],
    };
    return AcTileset3dComponent;
}());

var __extends$53 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcBoxDescComponent = (function (_super) {
    __extends$53(AcBoxDescComponent, _super);
    function AcBoxDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcBoxDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-box-desc',
                    template: ''
                },] },
    ];
    AcBoxDescComponent.ctorParameters = function () { return [
        { type: BoxDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcBoxDescComponent;
}(BasicDesc));

var __extends$54 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcCylinderDescComponent = (function (_super) {
    __extends$54(AcCylinderDescComponent, _super);
    function AcCylinderDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcCylinderDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-cylinder-desc',
                    template: ''
                },] },
    ];
    AcCylinderDescComponent.ctorParameters = function () { return [
        { type: CylinderDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcCylinderDescComponent;
}(BasicDesc));

var __extends$55 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcCorridorDescComponent = (function (_super) {
    __extends$55(AcCorridorDescComponent, _super);
    function AcCorridorDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcCorridorDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-corridor-desc',
                    template: ''
                },] },
    ];
    AcCorridorDescComponent.ctorParameters = function () { return [
        { type: CorridorDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcCorridorDescComponent;
}(BasicDesc));

var __extends$56 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcEllipsoidDescComponent = (function (_super) {
    __extends$56(AcEllipsoidDescComponent, _super);
    function AcEllipsoidDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcEllipsoidDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-ellipsoid-desc',
                    template: ''
                },] },
    ];
    AcEllipsoidDescComponent.ctorParameters = function () { return [
        { type: EllipsoidDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcEllipsoidDescComponent;
}(BasicDesc));

var __extends$57 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolylineVolumeDescComponent = (function (_super) {
    __extends$57(AcPolylineVolumeDescComponent, _super);
    function AcPolylineVolumeDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcPolylineVolumeDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polyline-volume-desc',
                    template: ''
                },] },
    ];
    AcPolylineVolumeDescComponent.ctorParameters = function () { return [
        { type: PolylineVolumeDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcPolylineVolumeDescComponent;
}(BasicDesc));

var __extends$58 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcWallDescComponent = (function (_super) {
    __extends$58(AcWallDescComponent, _super);
    function AcWallDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcWallDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
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

var __extends$59 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcRectangleDescComponent = (function (_super) {
    __extends$59(AcRectangleDescComponent, _super);
    function AcRectangleDescComponent(drawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, drawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcRectangleDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-rectangle-desc',
                    template: ''
                },] },
    ];
    AcRectangleDescComponent.ctorParameters = function () { return [
        { type: RectangleDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcRectangleDescComponent;
}(BasicDesc));

var __extends$60 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcBillboardPrimitiveDescComponent = (function (_super) {
    __extends$60(AcBillboardPrimitiveDescComponent, _super);
    function AcBillboardPrimitiveDescComponent(billboardPrimitiveDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, billboardPrimitiveDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcBillboardPrimitiveDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-billboard-primitive-desc',
                    template: ''
                },] },
    ];
    AcBillboardPrimitiveDescComponent.ctorParameters = function () { return [
        { type: BillboardPrimitiveDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcBillboardPrimitiveDescComponent;
}(BasicDesc));

var __extends$61 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcLabelPrimitiveDescComponent = (function (_super) {
    __extends$61(AcLabelPrimitiveDescComponent, _super);
    function AcLabelPrimitiveDescComponent(labelPrimitiveDrawer, layerService, computationCache, cesiumProperties) {
        return _super.call(this, labelPrimitiveDrawer, layerService, computationCache, cesiumProperties) || this;
    }
    AcLabelPrimitiveDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-label-primitive-desc',
                    template: '',
                },] },
    ];
    AcLabelPrimitiveDescComponent.ctorParameters = function () { return [
        { type: LabelPrimitiveDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcLabelPrimitiveDescComponent;
}(BasicDesc));

var __extends$62 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcPolylinePrimitiveDescComponent = (function (_super) {
    __extends$62(AcPolylinePrimitiveDescComponent, _super);
    function AcPolylinePrimitiveDescComponent(polylinePrimitiveDrawerService, layerService, computationCache, cesiumProperties) {
        return _super.call(this, polylinePrimitiveDrawerService, layerService, computationCache, cesiumProperties) || this;
    }
    AcPolylinePrimitiveDescComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ac-polyline-primitive-desc',
                    template: ''
                },] },
    ];
    AcPolylinePrimitiveDescComponent.ctorParameters = function () { return [
        { type: PolylinePrimitiveDrawerService, },
        { type: LayerService, },
        { type: ComputationCache, },
        { type: CesiumProperties, },
    ]; };
    return AcPolylinePrimitiveDescComponent;
}(BasicDesc));

var AngularCesiumModule = (function () {
    function AngularCesiumModule() {
    }
    AngularCesiumModule.forRoot = function (config) {
        return {
            ngModule: AngularCesiumModule,
            providers: [{ provide: 'config', useValue: config }]
        };
    };
    AngularCesiumModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        angular2parse.Angular2ParseModule,
                        UtilsModule,
                    ],
                    declarations: [
                        AcMapComponent,
                        AcLayerComponent,
                        AcBillboardComponent,
                        AcBillboardDescComponent,
                        AcBillboardPrimitiveDescComponent,
                        AcLabelDescComponent,
                        AcLabelPrimitiveDescComponent,
                        AcEllipseDescComponent,
                        AcPolylineDescComponent,
                        AcPolylinePrimitiveDescComponent,
                        PixelOffsetPipe,
                        RadiansToDegreesPipe,
                        AcCircleDescComponent,
                        AcArcDescComponent,
                        AcMapLayerProviderComponent,
                        AcPointDescComponent,
                        AcLabelComponent,
                        AcPolylineComponent,
                        AcEllipseComponent,
                        AcPointComponent,
                        AcBillboardComponent,
                        AcHtmlComponent,
                        AcCircleComponent,
                        AcArcComponent,
                        AcPolygonDescComponent,
                        AcPolygonComponent,
                        AcDefaultPlonterComponent,
                        AcModelDescComponent,
                        AcTileset3dComponent,
                        AcBoxDescComponent,
                        AcCylinderDescComponent,
                        AcCorridorDescComponent,
                        AcEllipsoidDescComponent,
                        AcPolylineVolumeDescComponent,
                        AcWallDescComponent,
                        AcRectangleDescComponent,
                        AcStaticEllipseDescComponent,
                        AcDynamicEllipseDescComponent,
                        AcDynamicPolylineDescComponent,
                        AcStaticPolylineDescComponent,
                        AcDynamicCircleDescComponent,
                        AcStaticCircleDescComponent,
                        AcStaticPolygonDescComponent,
                    ],
                    exports: [
                        AcMapComponent,
                        AcBillboardComponent,
                        AcBillboardDescComponent,
                        AcBillboardPrimitiveDescComponent,
                        AcLabelDescComponent,
                        AcLabelPrimitiveDescComponent,
                        AcEllipseDescComponent,
                        AcPolylineDescComponent,
                        AcPolylinePrimitiveDescComponent,
                        AcLayerComponent,
                        AcCircleDescComponent,
                        AcArcDescComponent,
                        AcMapLayerProviderComponent,
                        AcPointDescComponent,
                        AcLabelComponent,
                        AcPolylineComponent,
                        AcEllipseComponent,
                        AcPointComponent,
                        AcBillboardComponent,
                        AcHtmlComponent,
                        AcCircleComponent,
                        AcArcComponent,
                        AcPolygonDescComponent,
                        AcPolygonComponent,
                        AcDefaultPlonterComponent,
                        AcModelDescComponent,
                        AcTileset3dComponent,
                        AcBoxDescComponent,
                        AcCylinderDescComponent,
                        AcCorridorDescComponent,
                        AcEllipsoidDescComponent,
                        AcPolylineVolumeDescComponent,
                        AcWallDescComponent,
                        AcRectangleDescComponent,
                        AcStaticEllipseDescComponent,
                        AcDynamicEllipseDescComponent,
                        AcDynamicPolylineDescComponent,
                        AcStaticPolylineDescComponent,
                        AcDynamicCircleDescComponent,
                        AcStaticCircleDescComponent,
                        AcStaticPolygonDescComponent,
                    ],
                    providers: [JsonMapper, CesiumProperties, GeoUtilsService, ViewerFactory, MapsManagerService, ConfigurationService],
                },] },
    ];
    AngularCesiumModule.ctorParameters = function () { return []; };
    return AngularCesiumModule;
}());

var __extends$63 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DisposableObservable = (function (_super) {
    __extends$63(DisposableObservable, _super);
    function DisposableObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisposableObservable;
}(rxjs_Observable.Observable));

(function (CesiumEventModifier) {
    CesiumEventModifier[CesiumEventModifier["ALT"] = Cesium.KeyboardEventModifier.ALT] = "ALT";
    CesiumEventModifier[CesiumEventModifier["CTRL"] = Cesium.KeyboardEventModifier.CTRL] = "CTRL";
    CesiumEventModifier[CesiumEventModifier["SHIFT"] = Cesium.KeyboardEventModifier.SHIFT] = "SHIFT";
})(exports.CesiumEventModifier || (exports.CesiumEventModifier = {}));

exports.AngularCesiumModule = AngularCesiumModule;
exports.AcEntity = AcEntity;
exports.AcNotification = AcNotification;
exports.AcMapComponent = AcMapComponent;
exports.AcLayerComponent = AcLayerComponent;
exports.AcArcDescComponent = AcArcDescComponent;
exports.AcBillboardComponent = AcBillboardComponent;
exports.AcBillboardDescComponent = AcBillboardDescComponent;
exports.AcBillboardPrimitiveDescComponent = AcBillboardPrimitiveDescComponent;
exports.AcCircleDescComponent = AcCircleDescComponent;
exports.AcEllipseDescComponent = AcEllipseDescComponent;
exports.AcPolylineDescComponent = AcPolylineDescComponent;
exports.AcPolylinePrimitiveDescComponent = AcPolylinePrimitiveDescComponent;
exports.AcLabelComponent = AcLabelComponent;
exports.AcLabelDescComponent = AcLabelDescComponent;
exports.AcLabelPrimitiveDescComponent = AcLabelPrimitiveDescComponent;
exports.AcPolygonDescComponent = AcPolygonDescComponent;
exports.AcPolygonComponent = AcPolygonComponent;
exports.AcPolylineComponent = AcPolylineComponent;
exports.AcPointComponent = AcPointComponent;
exports.AcPointDescComponent = AcPointDescComponent;
exports.AcCircleComponent = AcCircleComponent;
exports.AcArcComponent = AcArcComponent;
exports.AcEllipseComponent = AcEllipseComponent;
exports.AcHtmlComponent = AcHtmlComponent;
exports.AcMapLayerProviderComponent = AcMapLayerProviderComponent;
exports.AcDefaultPlonterComponent = AcDefaultPlonterComponent;
exports.AcBoxDescComponent = AcBoxDescComponent;
exports.AcCorridorDescComponent = AcCorridorDescComponent;
exports.AcCylinderDescComponent = AcCylinderDescComponent;
exports.AcEllipsoidDescComponent = AcEllipsoidDescComponent;
exports.AcPolylineVolumeDescComponent = AcPolylineVolumeDescComponent;
exports.AcWallDescComponent = AcWallDescComponent;
exports.AcRectangleDescComponent = AcRectangleDescComponent;
exports.AcTileset3dComponent = AcTileset3dComponent;
exports.AcDynamicCircleDescComponent = AcDynamicCircleDescComponent;
exports.AcDynamicEllipseDescComponent = AcDynamicEllipseDescComponent;
exports.AcDynamicPolylineDescComponent = AcDynamicPolylineDescComponent;
exports.AcStaticCircleDescComponent = AcStaticCircleDescComponent;
exports.AcStaticEllipseDescComponent = AcStaticEllipseDescComponent;
exports.AcStaticPolygonDescComponent = AcStaticPolygonDescComponent;
exports.AcStaticPolylineDescComponent = AcStaticPolylineDescComponent;
exports.MapEventsManagerService = MapEventsManagerService;
exports.DisposableObservable = DisposableObservable;
exports.CesiumService = CesiumService;
exports.CameraService = CameraService;
exports.CoordinateConverter = CoordinateConverter;
exports.GeoUtilsService = GeoUtilsService;
exports.PlonterService = PlonterService;
exports.ViewerConfiguration = ViewerConfiguration;
exports.MapsManagerService = MapsManagerService;
exports.KeyboardControlService = KeyboardControlService;
exports.PREDEFINED_KEYBOARD_ACTIONS = PREDEFINED_KEYBOARD_ACTIONS;
exports.PixelOffsetPipe = PixelOffsetPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-cesium.umd.js.map
