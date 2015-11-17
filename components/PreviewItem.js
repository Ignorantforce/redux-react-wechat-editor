'use strict';

import React, { Component, PropTypes } from 'react'

export default class PreviewItem extends Component {
    render() {
        const { key, article, onItemClick, onDelete } = this.props;
        return (
            <div className="editor-preview-edit">
                <h5>test</h5>
                <a href="javascript:void(0)" onClick={() => onItemClick(key)}>Edit</a>
                <a href="javascript:void(0)" onClick={() => onDelete(key)}>Delete</a>
            </div>
        );
    }
}