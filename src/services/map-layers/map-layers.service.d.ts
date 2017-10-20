import { CesiumService } from '../cesium/cesium.service';
export declare class MapLayersService {
    private cesiumService;
    private layersDataSources;
    constructor(cesiumService: CesiumService);
    registerLayerDataSources(dataSources: any, zIndex: any): void;
    drawAllLayers(): void;
    updateAndRefresh(dataSources: any, newZIndex: any): void;
    removeDataSources(dataSources: any): void;
}
