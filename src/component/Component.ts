import { Class, Functions, Types, Generator  }  from "wasabi-common";
import * as React from "react";
import Compare from "./Compare";

export interface Props {
    [key: string]: any
}

export interface State {
    [key: string]: any
}

/**
 * Base component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */
export default class Component <P extends Props, S extends State> extends React.Component <any, any> {
    refs: Props;
    /**
     *
     * @type {string}
     */
    protected componentId: string = Generator.guid();

    /**
     *
     * @param props
     * @param context
     */
    constructor(props?: P, context?: any) {
        super(props, context);
        Class.bindAll(this);
    }

    getId(){
        return this.componentId;
    }

    /**
     * Decides ant update is necessary for re-rendering.
     * Compares old props and state objects with the newer ones without going deep.
     * @param {Object} nextProps
     * @param {Object} nextState
     * @returns {boolean} "true" component shoud update ,"false" otherwise.
     */
    public shouldComponentUpdate(nextProps: Object, nextState: Object): boolean {
        return Compare(this, nextProps, nextState);
    }

    /**
     * Returns class name of the component.
     * @return {string} name.
     */
    public getName (): string {
        return Functions.getName(this.constructor);
    }

    /**
     *
     * @return {JSX.Element}
     */
    public render(): JSX.Element {
        return this.props.children;
    }

    /**
     *
     * @return {any}
     */
    public cloneState(): S {
        return Types.getClone(this.state);
    }
}
