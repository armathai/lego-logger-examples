import { ObservableModel } from '../../ObservableModel';

export class CellModel extends ObservableModel {
    private _position: Phaser.Geom.Point = null;
    private _score: number = null;

    public constructor(rawCell: { score: number }) {
        super('CellModel');

        const { score } = rawCell;

        this.createObservable('_score', score);
    }

    public get score(): number {
        return this._score;
    }

    public set score(value: number) {
        this._score = value;
    }

    public get position(): Phaser.Geom.Point {
        return this._position;
    }

    public set position(value: Phaser.Geom.Point) {
        this._position = value;
    }
}
