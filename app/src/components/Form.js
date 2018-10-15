import React from 'react';
import { List } from './List';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            value: "",
        };
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.props.getMusic(e, this.state.value)}>
                    <input type="text" placeholder="Search songs" onChange={e => this.setState({ value: e.target.value })} />
                    <button type="submit">Search</button>
                </form>
            </div >
        )
    }
}

export { Form }; 