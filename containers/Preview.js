'use strict';

import React, { Component, PropTypes } from 'react'

export default class Preview extends Component {
    render() {
        const { onAddArticleClick } = this.props;
        return (
            <div>
                <div onClick={onAddArticleClick}>Add</div>
            </div>
        )
    }
}

Preview.propTypes = {

};