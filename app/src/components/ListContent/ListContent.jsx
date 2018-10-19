import React from 'react';

class ListContent extends React.Component {

    render() {
        return (
            <div>
                {this.props.songs.map(el => <div><img src={el.artworkUrl100} />{el.artistName}{el.trackName}</div>)}
            </div>
        )
    }
};

export { ListContent };