'use strict';

import React, { Component, PropTypes } from 'react'
import  ReactTooltip from 'react-tooltip'

export default class PreviewItem extends Component {
    render() {
        const { key, article, onItemClick, onDelete } = this.props;
        return (
            <div className="editor-item">
                <span className="thumbnail">
                </span>
                <div className="editor-item-edit">
                    <a data-tip data-for='icon-preview'><i className="fa fa-eye"></i></a>
                    <a data-tip data-for='icon-edit' href="javascript:void(0)" onClick={() => onItemClick(key)}>
                        <i className="fa fa-pencil"></i></a>
                    <a data-tip data-for='icon-delete' href="javascript:void(0)" onClick={() => onDelete(key)}>
                        <i className="fa fa-trash"></i></a>
                    <ReactTooltip id='icon-preview' type='warning' effect="solid">
                        <span>瀏覽</span>
                    </ReactTooltip>
                    <ReactTooltip id='icon-edit' type='warning' effect="solid">
                        <span>編輯</span>
                    </ReactTooltip>
                    <ReactTooltip id='icon-delete' type='warning' effect="solid">
                        <span>刪改</span>
                    </ReactTooltip>
                </div>
            </div>
        );
    }
}