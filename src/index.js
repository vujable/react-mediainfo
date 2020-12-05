
import Worker from "workerize-loader!./mediainfo.worker.js";
const { wasm } = Worker();

export function inspect(file) {
    return new Promise(async (resolve) => {
        wasm(file).then((result) => {
            resolve(result);
        });
    });
}
