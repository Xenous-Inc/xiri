import { DateTimeLayer } from './layers/datetime.layer';
import { DateTimeType } from './types';

export class XiriLogger {
    print(str: string) {
        const o = new DateTimeLayer({
            dateTimeType: DateTimeType.Epoch,
            prefix: 'dr3dnought',
        });
        console.log(o.buildString());
    }
}
