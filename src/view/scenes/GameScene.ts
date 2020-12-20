import { lego } from '@armathai/lego';
import { SceneKey } from '../../constants/constants';
import { ModelEvents } from '../../events/ModelEvents';
import { BoardView } from '../components/BoardView';
import { PlayerView } from '../components/PlayerView';
import { ViewEvents } from '../ViewEvents';

export class GameScene extends Phaser.Scene {
    private _playerView: PlayerView | null = null;
    private _boardView: BoardView | null = null;

    public constructor() {
        super(SceneKey.Game);
        lego.event.on(ModelEvents.Store.PlayerModelUpdate, this._buildPlayerView, this);
        lego.event.on(ModelEvents.LevelModel.BoardUpdate, this._buildBoardView, this);
    }

    public create(): void {
        lego.event.emit(ViewEvents.GameScene.Ready);
    }

    private _buildPlayerView(): void {
        this._playerView = new PlayerView(this);

        this.add.existing(this._playerView);
    }

    private _buildBoardView(): void {
        const { width, height } = this.scale;
        this._boardView = new BoardView(this);
        this._boardView.setPosition((width - this._boardView.width) * 0.5, (height - this._boardView.height) * 0.5);
        this.add.existing(this._boardView);
    }
}
