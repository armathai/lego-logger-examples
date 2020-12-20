import { ObservableModel } from '../ObservableModel';
import { BoardModel } from './board/BoardModel';

export class LevelModel extends ObservableModel {
    private _board: BoardModel = null;

    public constructor() {
        super('LevelModel');

        this.makeObservable();
    }

    public initialize(config: { cells: { score: number }[] }): void {
        this._board = new BoardModel();
        this._board.initialize(config.cells);
    }

    public get board(): BoardModel {
        return this._board;
    }

    public set board(value: BoardModel) {
        this._board = value;
    }
}
