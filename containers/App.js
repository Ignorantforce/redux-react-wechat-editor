'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions';
import Preview from './Preview'
import Form from './Form'

class App extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Preview />
                <Form />
            </div>
        )
    }
}

export default connect(

)(App)