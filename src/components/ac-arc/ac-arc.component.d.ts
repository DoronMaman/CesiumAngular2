import { OnChanges, SimpleChanges } from '@angular/core';
import { EntityOnMapComponent } from '../../services/entity-on-map/entity-on-map.component';
import { ArcDrawerService } from '../../services/drawers/arc-drawer/arc-drawer.service';
export declare class AcArcComponent extends EntityOnMapComponent implements OnChanges {
    geometryProps: any;
    instanceProps: any;
    primitiveProps: any;
    constructor(arcDrawer: ArcDrawerService);
    updateOnMap(): void;
    drawOnMap(): any;
    ngOnChanges(changes: SimpleChanges): void;
}
