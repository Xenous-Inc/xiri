export interface ILayer<T = object> {
    buildString(): string;

    defaultConfig(): T;
}
