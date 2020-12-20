import { lego } from '@armathai/lego';
import { ViewEvents } from '../ViewEvents';

export class CellView extends Phaser.GameObjects.Container {
    private _uuid: string;
    private _bg: Phaser.GameObjects.Image;
    private _score: Phaser.GameObjects.Text;

    public constructor(scene: Phaser.Scene, uuid: string) {
        super(scene);

        this._uuid = uuid;

        this.add((this._bg = this._buildBg()));
        this.add((this._score = this._buildScore()));
    }

    public get uuid(): string {
        return this._uuid;
    }

    public updateScore(value: number): void {
        this._score.setText(`${value}`);
    }

    private _buildBg(): Phaser.GameObjects.Image {
        const bg = this.scene.add.image(0, 0, 'pixel');
        bg.setTint(0xa88f32);
        bg.setScale(60, 60);
        bg.setOrigin(0);
        bg.setInteractive();
        bg.on('pointerup', this._onClick, this);

        return bg;
    }

    private _buildScore(): Phaser.GameObjects.Text {
        const { x, y } = this._bg.getCenter();

        const text = this.scene.add.text(x, y, ' ', {
            fontSize: '35',
            wordWrap: { width: 60, useAdvancedWrap: true },
        });
        text.setOrigin(0.5);

        return text;
    }

    private _onClick(): void {
        lego.event.emit(ViewEvents.CellView.Click, this._uuid);
    }
}
