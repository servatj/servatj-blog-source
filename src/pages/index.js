import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  return <Layout data={data} />;
};
