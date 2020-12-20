import { store } from '../../model/Store';

export function cellAliveGuard(cellUUID: string): boolean {
    const { board } = store.gameModel.level;
    const cellModel = board.getCellByUUID(cellUUID);

    return cellModel.score > 0;
}
