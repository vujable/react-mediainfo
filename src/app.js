import worker from './app.worker';
let instance = worker();

export function getInfo(file) {
    return instance.getInfo(file);
}
