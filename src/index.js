import React , {Component} from 'react'
import MediaInfo from 'mediainfo.js';

export const test = () => {
    return "test success"
}
export const getMediaInfo = () => {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
};

class Index extends Component {
    
}
export default Index;
