import { DateTimeLayer } from './layers/datetime.layer';
import { XiriBuidler } from './logger';
import { DateTimeType } from './types';
import { TagLayer } from './layers/tag.layer';
import { EmojiLayer, EmojiEnum } from './layers/emoji.layer';

const logger = new XiriBuidler()
    .addLayer(
        new DateTimeLayer({
            dateTimeType: DateTimeType.Iso,
            prefix: 'dr3dnought',
        }),
    )
    .addLayer(new EmojiLayer(EmojiEnum.X).red())
    .addLayer(new TagLayer('SUCCESS').green().bold())
    .build();
logger.print('Hello, Its Xiri');
