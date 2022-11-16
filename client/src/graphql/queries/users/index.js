import { gql } from '@apollo/client'

const GET_ME = gql`
  query me($token: String!) {
    me(token: $token) {
      id
      name
      email
    }
  }
`

export default GET_ME
