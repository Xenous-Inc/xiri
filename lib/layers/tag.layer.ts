import { Layer } from './layer';

export class TagLayer extends Layer {
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
