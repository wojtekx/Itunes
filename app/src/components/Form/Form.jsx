import React from 'react';
import './Form.scss'

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
                <form onChange={e => this.props.getMusic(e, this.state.value)}>
                    <input type="text" placeholder="Search songs" onChange={e => this.setState({ value: e.target.value })} />

                </form>
            </div >
        )
    }
}

export { Form }; 