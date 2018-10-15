import React from 'react';



class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            limit: 6,
        }
    };

    prev = () => {
        if (this.state.limit > 6) {
            this.setState({ limit: this.state.limit - 6 }, () => { this.props.getPaginatedMusic(this.state.limit) });
        }
    };

    next = () => {
        if (this.state.limit < 50) {
            this.setState({ limit: this.state.limit + 6 }, () => { this.props.getPaginatedMusic(this.state.limit) });
        }
    };

    render() {
        return (
            <div>

                <button onClick={this.prev}>Prev</button>
                <button onClick={this.next}>Next</button>
            </div>
        )
    }
}

export { Pagination }; 