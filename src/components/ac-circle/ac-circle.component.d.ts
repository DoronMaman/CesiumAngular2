import { EntityOnMapComponent } from '../../services/entity-on-map/entity-on-map.component';
import { EllipseDrawerService } from '../../services/drawers/ellipse-drawer/ellipse-drawer.service';
export declare class AcCircleComponent extends EntityOnMapComponent {
    constructor(ellipseDrawerService: EllipseDrawerService);
    private updateEllipseProps();
    drawOnMap(): void;
    updateOnMap(): void;
}
