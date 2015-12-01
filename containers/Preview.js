'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addArticle, editArticle, deleteArticle,changePosition,onEditing } from '../actions'
import PreviewItem from '../components/PreviewItem'
import Cover from '../components/Cover'


class Preview extends Component {
    render() {
        const { dispatch, articles } = this.props;
        var style = {
            top: '230px'
        }
        return (
            <div>
                <div className="active-arrow" style={style}>

                </div>
                <div className="editor-preview">

                    <div className="preview-items">
                        <Cover>
                        </Cover>
                        {articles.map(
                            (article, key) =>
                                <PreviewItem
                                    key={key}
                                    article={article}
                                    onEditingClick={() => dispatch(onEditing(key))}
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
