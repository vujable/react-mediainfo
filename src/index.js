import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaInfo from 'mediainfo.js';


export function getMediaInfo() {
    return new Promise((resolve) => {
        MediaInfo().then((mediainfo) => {
            resolve(mediainfo);
        });
    });
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

ReactDOM.render(<App />, document.getElementById('root'));
