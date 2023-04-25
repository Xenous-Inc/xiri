import { pipeline } from 'stream/promises';

interface IXiriConfig {
    filename: string;
}
export class XiriStreamHandler {
    private abortController: AbortController;
    private stream: NodeJS.ReadableStream;
    constructor(stream: NodeJS.ReadableStream) {
        this.stream = stream;
        this.abortController = new AbortController();
    }
    start() {
        const signal = this.abortController.signal;
        setImmediate(() => this.abortController.abort);
        await pipeline(this.stream);
    }
    // write(data: any) {
    //     this.filehandle.createWriteStream(this.config.filename);
    // }
}
