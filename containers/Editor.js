'use strict';

import React, { Component } from 'react'
import Preview from './Preview'
import Form from './Form'

class Editor extends Component {
    render() {
        return (
            <div className="editor-preview">
                <Preview/>
                <Form />
            </div>
        )
    }
}


export default Editor