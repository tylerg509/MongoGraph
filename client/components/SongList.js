import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
    render() {
        console.log(this.props)
        return(
            <div>Songlist</div>

        )
    }
}

// GraphQl Queries are not valid JS so we use graphql tag
const query = gql`
    {
        songs {
            title
        }
    }
`;

// graphql(query) executes the query. this bonds the query to the component
export default graphql(query)(SongList);
