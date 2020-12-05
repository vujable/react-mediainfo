import worker from 'workerize-loader?inline!./worker.js'
const { wasm } = worker();

export function inspect(file) {
    return new Promise(async (resolve) => {
        wasm(file).then((result) => {
            resolve(result);
        });
    });
}
