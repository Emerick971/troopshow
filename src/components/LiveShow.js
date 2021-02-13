import React from 'react';

// CSS
import '../css/LiveShow.css';

class LiveShow extends React.Component {

    render() {
        return(
            <div className="TitleLive">
                <h2>ON LIVE</h2>
                <div className="LiveContainer">
                    <div>
                    <video width="320" height="240" controls>
                        <source src="movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                    </video>
                    </div>
                    <div className="LiveDescription">
                        <h4>Title Show</h4>
                        <p>Description Show<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveShow;