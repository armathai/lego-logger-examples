import { GameModel } from './game/GameModel';
import { ObservableModel } from './ObservableModel';
import { PlayerModel } from './player/PlayerModel';

class Store extends ObservableModel {
    private _gameModel: GameModel = null;
    private _playerModel: PlayerModel = null;

    public constructor() {
        super('Store');

        this.makeObservable();
    }

    public get gameModel(): GameModel {
        return this._gameModel;
    }

    public set gameModel(value: GameModel) {
        this._gameModel = value;
    }

    public get playerModel(): PlayerModel {
        return this._playerModel;
    }

    public set playerModel(value: PlayerModel) {
        this._playerModel = value;
    }
}

export const store = new Store();
