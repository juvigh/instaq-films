import { setContext } from '@apollo/client/link/context';

const authMiddleware = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': "4WooI5TACU0ZgAqLxOQOY8sPyuW7mmdXMgRBv3O7O77HOuEICOTD6RMdR4Fb5P3k"
    },
  };
});

export default authMiddleware;
