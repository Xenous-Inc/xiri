import emoji from 'node-emoji';
import { Layer } from './layer';

export enum EmojiEnum {
    X = emoji.emojify(':x:'),
    Tick = emoji.emojify(':heavy_check_mark:'),
    Loupe = emoji.emojify(':mag_right:'),
    Warning = emoji.emojify(':warning:'),
    Ok = emoji.emojify(':ok:'),
}
export class EmojiLayer extends Layer {
    constructor(props) {
        super(props);
    }
    buildString(): string {
        return this.str;
    }

    defaultConfig(): object {
        return {};
    }
}
