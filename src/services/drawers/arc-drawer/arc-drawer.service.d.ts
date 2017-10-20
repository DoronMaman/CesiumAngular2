import { CesiumService } from '../../cesium/cesium.service';
import { StaticPrimitiveDrawer } from '../static-dynamic/static-primitive-drawer/static-primitive-drawer.service';
export declare class ArcDrawerService extends StaticPrimitiveDrawer {
    constructor(cesiumService: CesiumService);
    add(geometryProps: any, instanceProps: any, primitiveProps: any): any;
    private generatePositions(cesiumProps);
    update(primitive: any, geometryProps: any, instanceProps: any, primitiveProps: any): any;
}
