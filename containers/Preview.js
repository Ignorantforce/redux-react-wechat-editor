'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addArticle, editArticle, deleteArticle } from '../actions'
import PreviewItem from '../components/PreviewItem'

class Preview extends Component {
    render() {
        const { dispatch, articles } = this.props;
        return (
            <div className="col-xs-6">
                {articles.map(
                    (article, key) =>
                        <PreviewItem
                            key={key}
                            article={article}
                            onItemClick={() => dispatch(editArticle(key))}
                            onDelete={() => dispatch(deleteArticle(key))}
                            />
                )}
                <a onClick={() => dispatch(addArticle())}>Add</a>
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