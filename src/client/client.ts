import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  "https://instaq-films.hasura.app/v1/graphql",
  {
    headers: {
      'x-hasura-admin-secret':
        "4WooI5TACU0ZgAqLxOQOY8sPyuW7mmdXMgRBv3O7O77HOuEICOTD6RMdR4Fb5P3k",
    },
  }
);

export default graphQLClient;
