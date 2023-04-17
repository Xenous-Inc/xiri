import chalk from 'chalk';

export enum DefaultColor {
    Red,
    Cyan,
    Yellow,
    Black,
    White,
    Green,
    Blue,
    Gray,
}
interface IColorizerConfig {
    isBold: boolean;
    isItalic: boolean;
    isUnderlined: boolean;
    color: DefaultColor;
}
const defaultConfig: IColorizerConfig = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    color: DefaultColor.White,
};
export function Colorize(str: string, config: IColorizerConfig = defaultConfig) {
    switch (config.color) {
        case DefaultColor.Red: {
            str = chalk.red(str);
            break;
        }
        case DefaultColor.Cyan: {
            str = chalk.cyan(str);
            break;
        }
        case DefaultColor.Yellow: {
            str = chalk.yellow(str);
            break;
        }
        case DefaultColor.Black: {
            str = chalk.black(str);
            break;
        }
        case DefaultColor.White: {
            str = chalk.white(str);
            break;
        }
        case DefaultColor.Green: {
            str = chalk.green(str);
            break;
        }
        case DefaultColor.Blue: {
            str = chalk.blue(str);
            break;
        }
        case DefaultColor.Gray: {
            str = chalk.gray(str);
            break;
        }
        default: {
            str = chalk.white(str);
            break;
        }
    }
    if (config.isBold) {
        str = chalk.bold(str);
    }
    if (config.isItalic) {
        str = chalk.italic(str);
    }
    if (config.isUnderlined) {
        str = chalk.underline(str);
    }
    return str;
}
