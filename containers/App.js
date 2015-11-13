'use strict';

import React, { Component } from 'react'
import Preview from './Preview'
import Form from './Form'

export default class App extends Component {
    render() {
        return (
            <div>
                <Preview />
                <Form />
            </div>
        )
    }
}