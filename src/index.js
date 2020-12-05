import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaInfo from 'mediainfo.js';

export const getMediaInfo = () => {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
};

class Index extends Component {
    constructor(props) {
        super(props);
        this.Factory = getMediaInfo();
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.Factory)
                }}>Hello</button>
            </div>
        );
    }
}
export default Index;
ReactDOM.render(<Index />, document.getElementById('root'));
