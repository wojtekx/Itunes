import React from 'react';
import './Header.css';
import { ListLayout } from './ListLayout';


class Layout extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <ListLayout />
                </div>
            </div>
        )
    }
}

export { Layout };