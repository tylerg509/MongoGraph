import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: {
                id: id
            },
            optimisticResponse: {
                __typename: 'Mutation',
                    id: id,
                    lyrics: {
                        id: id,
                        likes: likes + 1,
                        __typename: 'LyricType',
                    },
                
            },
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className='collection-item'>
                    {content}
                    <div className='vote-box'>
                        <i className='material-icons' onClick={() => this.onLike(id)}>
                            thumb_up
                        </i>
                        <div className='likes'>{likes}</div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return <ul className='collection'>{this.renderLyrics()}</ul>;
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
