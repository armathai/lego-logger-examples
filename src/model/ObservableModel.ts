/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lego } from '@armathai/lego';
import { getUUID } from '../utils/utils';

export class ObservableModel {
    private _uuid?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private __name__: string;

    public constructor(name?: string) {
        this.__name__ = name;
        this._uuid = getUUID(this.__name__);
    }

    public get uuid(): string {
        return this._uuid;
    }

    protected makeObservable(...props: string[]): void {
        lego.observe.makeObservable(this, ...props);
    }

    protected removeObservable(...props: string[]): void {
        lego.observe.removeObservable(this, ...props);
    }

    protected createObservable(prop: string, value: unknown): void {
        lego.observe.createObservable(this, prop, value);
    }
}
