import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>
                    {song.title}
                </li>
            )
        })
    }
    render() {
        if(this.props.data.loading) {return <div>Loading...</div>}
        return(
            <ul className="collection">
                {this.renderSongs()}
            </ul>

        )
    }
}

// GraphQl Queries are not valid JS so we use graphql tag
const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

// graphql(query) executes the query. this bonds the query to the component
export default graphql(query)(SongList);
