import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BasicDrawerService } from '../drawers/basic-drawer/basic-drawer.service';
export declare class EntityOnMapComponent implements OnInit, OnChanges, OnDestroy {
    protected _drawer: BasicDrawerService;
    props: any;
    protected selfPrimitive: any;
    protected selfPrimitiveIsDraw: boolean;
    constructor(_drawer: BasicDrawerService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    drawOnMap(): any;
    removeFromMap(): any;
    updateOnMap(): any;
    ngOnDestroy(): void;
}
