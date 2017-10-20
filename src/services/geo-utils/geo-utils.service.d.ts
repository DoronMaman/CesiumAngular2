import { CesiumService } from '../cesium/cesium.service';
export declare class GeoUtilsService {
    private cesiumService;
    static pointByLocationDistanceAndAzimuth(currentLocation: any, meterDistance: any, radianAzimuth: any, isInputCartesian?: boolean): any;
    constructor(cesiumService: CesiumService);
    screenPositionToCartesian3(screenPos: {
        x: number;
        y: number;
    }): any;
}
