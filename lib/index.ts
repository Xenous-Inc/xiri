import { XiriLogger } from './logger';
import { Colorize, DefaultColor } from './utils/colorizer';

const logger = new XiriLogger();
logger.print('Hello, Its Xiri - Modern JS Logger');
console.log(Colorize('Papapap', { isBold: true, isItalic: true, isUnderlined: true, color: DefaultColor.White }));
