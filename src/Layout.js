import React, { Fragment, Component } from 'react'
import Header from './Components/Header'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {{ ...this.props.children }}
                <h2>static footer</h2>
            </Fragment>
        )
    }
}
