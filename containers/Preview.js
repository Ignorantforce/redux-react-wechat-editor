'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions'

class Preview extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <div onClick={() => dispatch(addArticle())}>Add</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.article['articles']
    }
};

export default connect(
    mapStateToProps
)(Preview)