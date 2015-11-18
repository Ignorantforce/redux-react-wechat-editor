'use strict';

import React, { Component, PropTypes } from 'react'

export default class PreviewItem extends Component {
    render() {
        const { key, article, onItemClick, onDelete } = this.props;
        return (
            <div className="editor-item">
                <span className="thumbnail">
                </span>
                <div className="editor-item-edit">
                    <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                    <a href="javascript:void(0)" onClick={() => onItemClick(key)}><i className="fa fa-pencil"></i></a>
                    <a href="javascript:void(0)" onClick={() => onDelete(key)}><i className="fa fa-trash"></i></a>
                </div>
            </div>
        );
    }
}