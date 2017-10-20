import { LayerService } from '../../services/layer-service/layer-service.service';
import { CesiumProperties } from '../../services/cesium-properties/cesium-properties.service';
import { ComputationCache } from '../../services/computation-cache/computation-cache.service';
import { ArcDrawerService } from '../../services/drawers/arc-drawer/arc-drawer.service';
import { BasicStaticPrimitiveDesc } from '../../services/basic-primitive-desc/basic-static-primitive-desc.service';
export declare class AcArcDescComponent extends BasicStaticPrimitiveDesc {
    constructor(arcDrawer: ArcDrawerService, layerService: LayerService, computationCache: ComputationCache, cesiumProperties: CesiumProperties);
}
