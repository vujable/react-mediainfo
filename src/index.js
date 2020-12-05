import MediaInfo from 'mediainfo.js';

export function test() {
    console.warn('testing package');
}
export function getMediaInfo() {
    console.warn('starting getMediaInfo');
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
}
