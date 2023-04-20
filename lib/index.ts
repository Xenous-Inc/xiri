import { DateTimeLayer } from './layers/datetime.layer';
import { XiriBuidler } from './logger';
import { DateTimeType } from './types';

const logger = new XiriBuidler()
    .addLayer(
        new DateTimeLayer({
            dateTimeType: DateTimeType.Iso,
            prefix: 'dr3dnought',
        }),
    )
    .build();

logger.print('Hello, Its Xiri');
