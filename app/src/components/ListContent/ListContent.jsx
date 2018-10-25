import React from 'react';
import './ListContent.scss';

class ListContent extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.songs.map(el => <div className="content">
                    <div className="img">
                        <img src={el.artworkUrl100} />
                    </div>
                    <div className="text">
                        <h5>{el.artistName}</h5>
                        <h5>{el.trackName}</h5>
                    </div>

                </div>)}
            </div>
        )
    }
};

export { ListContent };