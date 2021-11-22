import { graphql } from '@apollo/client/react/hoc';

import gql from 'graphql-tag';

const withApplicationsCount = (component) => {
  return graphql(
    gql`
      query ApplicationsCount {
        applicationsCount
      }
    `,
    {
      alias: 'withApplicationsCount',
      options: {
        pollInterval: 2000,
      },
      props(props) {
        return {
          loading: props.data.loading,
          applicationsCount: props.data.ApplicationsCount,
        };
      },
    }
  )(component);
};

export default withApplicationsCount;
