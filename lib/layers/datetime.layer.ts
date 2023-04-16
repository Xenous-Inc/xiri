import { DateTimeType, ILayer } from 'lib/types';

export interface IDateTimeLayerConfig {
    readonly prefix?: string;

    readonly dateTimeType?: DateTimeType;

    readonly build?: (...args) => string;
}

export class DateTimeLayer implements ILayer<IDateTimeLayerConfig> {
    constructor(private config?: IDateTimeLayerConfig) {
        if (!config) {
            this.config = this.defaultConfig();
        }
    }

    defaultConfig(): IDateTimeLayerConfig {
        return {
            prefix: '',
            dateTimeType: DateTimeType.None,
        };
    }

    buildString(): string {
        if (this.config.build) {
            return this.config.build();
        }

        return `${this.config.prefix}${this.buildTimestamp(this.config.dateTimeType)}`;
    }

    private buildTimestamp(type: DateTimeType) {
        switch (type) {
            case DateTimeType.None:
                return '';
            case DateTimeType.Epoch:
                return `${Date.now()}`;
            case DateTimeType.Unix:
                return `${Math.round(Date.now() / 1000.0)}`;
            case DateTimeType.Iso:
                return `${new Date(Date.now()).toISOString()}`;
            default:
                return '';
        }
    }
}
