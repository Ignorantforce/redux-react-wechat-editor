'use strict';

import React, { Component } from 'react'
import Preview from './Preview'
import Form from './Form'
import ActiveArrow from '../components/ActiveArrow'

class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <Preview/>
                <Form />
            </div>
        )
    }
}


export default Editor
