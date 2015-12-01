'use strict';

import React, { Component, PropTypes } from 'react'

export default class PreviewItem extends Component {
    render() {
        var style ={
            top:'230px'
        }
        //const { key, article, onItemClick, onDelete } = this.props;
        return (
            <div className="active-arrow"  style={style}>

            </div>
        );
    }
}