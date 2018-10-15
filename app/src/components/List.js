import React from "react"



class List extends React.Component {

    constructor() {
        super();
        this.state = {
            songs: [],
        };
    }

    getMusic = (el) => {
        el.preventDefault();
        fetch(`https://itunes.apple.com/search?term=${this.props.val}&limit=6`, { method: 'GET', })
            .then(r => r.json())
            .then(data => this.setState({
                song: data.results,
            }));
    };

    render() {

        return (
            <div>
                <div id="songs">
                    {this.state.song.map(el => <div><img src={el.artworkUrl100} />{el.artistName}{el.trackName}</div>)}
                </div>
            </div>
        )
    }

}
export { List };