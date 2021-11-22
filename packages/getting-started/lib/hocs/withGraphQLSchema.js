import { graphql } from '@apollo/client/react/hoc';

import gql from 'graphql-tag';

const withGraphQLSchema = graphql(
  gql`
    query SchemaContents {
      schemaContents
    }
  `,
  {
    alias: 'withGraphQLSchema',
  }
);

export default withGraphQLSchema;
