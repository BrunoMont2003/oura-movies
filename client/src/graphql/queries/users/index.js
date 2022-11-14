import { gql } from '@apollo/client'

const GET_ME = gql`
  query me {
    me {
      id
      name
      email
    }
  }
`

export default GET_ME
