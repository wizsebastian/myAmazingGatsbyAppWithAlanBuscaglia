import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <div>
          <h1>Hello Images</h1>
          <Img fluid={data.coverImage.childImageSharp.fluid} />
        </div>
      )}
    />
  );
};

export const query = graphql`
  query {
    coverImage: file(relativePath: { regex: "/gentlemanprogramming/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
