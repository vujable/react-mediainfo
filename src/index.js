import MediaInfo from 'mediainfo.js';

export const getMediaInfo = () => {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
};
