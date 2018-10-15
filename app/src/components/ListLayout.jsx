import React from 'react';
import { Form } from './Form';
import { ListContent } from './ListContent';
import { Pagination } from './Pagination';
import { Header } from './Header';

class ListLayout extends React.Component {
    state = {
        songs: [],
        value: "",
    };

    getMusic = (e, value) => {
        this.setState({
            value: value
        })
        e.preventDefault();
        fetch(`https://itunes.apple.com/search?term=${value}&limit=6`, { method: 'GET', })
            .then(r => r.json())
            .then(data => this.setState({
                songs: data.results,
            }));
    };

    getPaginatedMusic = (limit) => {
        fetch(`https://itunes.apple.com/search?term=${this.state.value}&limit=${limit}`, { method: 'GET', })
            .then(r => r.json())
            .then(data => this.setState({
                songs: data.results.slice(data.results.length - 6, data.results.length),
            }));
    };


    render() {

        return (
            <div>
                <Header />
                <Form getMusic={this.getMusic} />
                <ListContent songs={this.state.songs} />
                <Pagination getPaginatedMusic={this.getPaginatedMusic} />
            </div>
        )
    }
}

export { ListLayout };