import { CesiumService } from '../cesium/cesium.service';
export declare class CoordinateConverter {
    private cesiumService;
    constructor(cesiumService?: CesiumService);
    screenToCartesian3(screenPos: {
        x: number;
        y: number;
    }, addMapCanvansBoundsToPos?: boolean): any;
    screenToCartographic(screenPos: {
        x: number;
        y: number;
    }, ellipsoid?: any): any;
    cartesian3ToCartographic(cartesian: any, ellipsoid?: any): any;
    degreesToCartographic(longitude: number, latitude: number, height?: number): any;
    radiansToCartographic(longitude: number, latitude: number, height?: number): any;
    degreesToUTM(longitude: number, latitude: number, height?: number): any;
    UTMToDegrees(zone: number, hemisphere: string, easting: number, northing: number): {
        longitude: any;
        latitude: any;
        height: any;
    };
    private geodesyToCesiumObject(geodesyRadians);
}
