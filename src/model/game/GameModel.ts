import { ObservableModel } from '../ObservableModel';
import { LevelModel } from './LevelModel';

export class GameModel extends ObservableModel {
    private _level: LevelModel = null;

    public constructor() {
        super('GameModel');

        this.makeObservable();
    }

    public initializeLevel(config: { cells: { score: number }[] }): void {
        this._level = new LevelModel();
        this._level.initialize(config);
    }

    public get level(): LevelModel {
        return this._level;
    }

    public set level(value: LevelModel) {
        this._level = value;
    }
}
