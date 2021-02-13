import React from 'react';

// CSS
import'../css/ComingShows.css';

class ComingShows extends React.Component {


    render() {
        return(
            <div className="container">
                <div className="comingContainer">
                    <img className="showPicture" src={this.props.image} alt={this.props.artiste}/>
                        <div>
                            <p className="date" >{this.props.date}</p>
                            <p className="artist">{this.props.artiste}</p>
                            <div>
                                <p className="type"><strong>{this.props.type1}</strong></p>
                                <p className="type"><strong>{this.props.type2}</strong></p>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ComingShows;