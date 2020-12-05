const Worker = new Worker('./worker.js', { type: 'module' });
const { wasm } = Worker();

export function inspect(file) {
    return new Promise(async (resolve) => {
        wasm(file).then((result) => {
            resolve(result);
        });
    });
}
