import React , {Component} from 'react';
import MediaInfo from 'mediainfo.js';

export function getMediaInfo() {
    MediaInfo();
}

export class App extends Component {
    constructor(props){
        super(props)
        this.mediaInfo = getMediaInfo();
    }
    render(){
        return(
            <div>
                <button onClick={() =>{
                    console.log(this.mediaInfo);
                }}>
                    Click
                </button>
            </div>
        )
    }
}

