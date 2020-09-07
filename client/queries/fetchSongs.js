import gql from 'graphql-tag';

// GraphQl Queries are not valid JS so we use graphql tag
const query =  gql`
    {
        songs {
            id
            title
        }
    }
`;

export default query;