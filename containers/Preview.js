'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addArticle, editArticle, deleteArticle } from '../actions'
import PreviewItem from '../components/PreviewItem'
import Cover from '../components/Cover'

class Preview extends Component {
    render() {
        const { dispatch, articles } = this.props;
        return (
            <div className="editor-preview">

                <div className="preview-items">
                    <Cover>
                    </Cover>
                    {articles.map(
                        (article, key) =>
                            <PreviewItem
                                key={key}
                                article={article}
                                onItemClick={() => dispatch(editArticle(key))}
                                onDelete={() => dispatch(deleteArticle(key))}
                            />
                    )}
                </div>
                <div className="editor-add" onClick={() => dispatch(addArticle())}>
                    <span className="editor-add-btn">
                        <i className="fa fa-plus"></i>
                    </span>
                </div>
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