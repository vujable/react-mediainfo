import MediaInfo from 'mediainfo.js';

export function getMediaInfo() {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
}
