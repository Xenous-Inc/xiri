import { ILayer } from './types';

export class XiriBuidler {
    private layers: ILayer[] = [];

    addLayer(layer: ILayer): XiriBuidler {
        this.layers.push(layer);

        return this;
    }

    build(): XiriLogger {
        return new XiriLogger(this.layers);
    }
}

class XiriLogger {
    constructor(private readonly layers: ILayer[]) {}

    print(str: string) {
        let preStr = '';
        this.layers.forEach(e => {
            preStr += e.buildString() + ' ';
        });

        console.log(`${preStr}${str}`);
    }
}
