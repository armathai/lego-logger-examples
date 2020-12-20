import { lego } from '@armathai/lego';
import { BOARD_TRANSFORM } from '../../../constants/constants';
import { ViewEvents } from '../../../view/ViewEvents';
import { ObservableModel } from '../../ObservableModel';
import { CellModel } from './CellModel';

export class BoardModel extends ObservableModel {
    private _cells: CellModel[] = null;

    public constructor() {
        super('BoardModel');

        this.makeObservable();
    }

    public get cells(): CellModel[] {
        return this._cells;
    }

    public removeCell(uuid: string): void {
        const cell = this.getCellByUUID(uuid);
        this._cells.splice(this._cells.indexOf(cell), 1);
        lego.event.emit(ViewEvents.CellModel.Destroy, uuid);
    }

    public getCellByUUID(uuid: string): CellModel {
        return this._cells.find((cell) => cell.uuid === uuid);
    }

    public initialize(rawCells: { score: number }[]): void {
        const cells = [];
        const l = rawCells.length;
        const { y: rowCount } = BOARD_TRANSFORM;

        for (let i = 0; i < l; ++i) {
            const cellConfig = rawCells[i];
            const cellModel = new CellModel(cellConfig);
            cellModel.position = new Phaser.Geom.Point(i % rowCount, Math.floor(i / rowCount));
            cells.push(cellModel);
        }

        this._cells = cells;
    }
}
