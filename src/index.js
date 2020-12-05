//import MediaInfo from 'mediainfo.js';
import worker from './mediainfo.worker.js';
const { wasm } = worker();

export function inspect(file) {
    return new Promise(async (resolve) => {
        wasm(file).then((result) => {
            resolve(result);
        });
    });
}
