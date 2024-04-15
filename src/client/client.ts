import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(process.env.HASURA_API_URL || '', {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || ''
    },
  })

export default graphQLClient