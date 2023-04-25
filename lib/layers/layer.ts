import chalk from 'chalk';
import { ILayer } from '../types';

const styles = ['red', 'yellow', 'blue', 'bold', 'magenta', 'underline', 'italic', 'black', 'gray', 'green'] as const;
type TColors = (typeof styles)[number];
type TColoredLayers = {
    [key in TColors]: () => TLayer;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class _Layer implements ILayer {
    private constructor(protected str: string) {
        for (const style of styles) {
            (this as any)[style] = () => {
                this.str = chalk[style](this.str);
                return this;
            };
        }
    }

    abstract buildString(): string;

    abstract defaultConfig(): object;
}
export const Layer: new (str: string) => _Layer & TColoredLayers = _Layer as any;
export type TLayer = _Layer & TColoredLayers;
