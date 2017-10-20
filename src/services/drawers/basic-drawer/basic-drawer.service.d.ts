export declare abstract class BasicDrawerService {
    protected _propsAssigner: Function;
    constructor();
    abstract add(cesiumProps: any, ...args: any[]): any;
    abstract update(primitive: any, cesiumProps: any, ...args: any[]): any;
    abstract remove(primitive: any): any;
    abstract removeAll(): any;
    abstract setShow(showValue: boolean): any;
    abstract init(options?: any): any;
    setPropsAssigner(assigner: Function): void;
}
