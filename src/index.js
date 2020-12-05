import Worker from 'worker-loader!./worker.js';
const worker = new Worker();

export function inspect(file) {
    return new Promise(async (resolve) => {
        worker.wasm(file).then((result) => {
            resolve(result);
        });
    });
}
