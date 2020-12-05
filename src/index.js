import React, { Component } from 'react';
import MediaInfo from 'mediainfo.js';

export const getMediaInfo = () => {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
};

class Index extends Component {
    constructor(props){
        super(props)
        this.Factory = getMediaInfo();
    }
}
Index.Factory = getMediaInfo();
export default Index;
