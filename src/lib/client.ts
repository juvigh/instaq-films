import authMiddleware from "@/app/graphql/middleware";
import { ApolloClient, HttpLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {

    const link = createHttpLink({
        uri: "https://instaq-films.hasura.app/v1/graphql",
    });
    
  return new ApolloClient({
    cache: new InMemoryCache({ resultCaching: false}),
    link: authMiddleware.concat(link),
  });
});