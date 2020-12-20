import { ObservableModel } from '../ObservableModel';

export class PlayerModel extends ObservableModel {
    private _score: number | null = null;

    public constructor() {
        super('PlayerModel');

        this.makeObservable();
    }

    public get score(): number {
        return this._score;
    }

    public set score(value: number) {
        this._score = value;
    }
}
