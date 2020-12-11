import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => {
  return <StaticQuery query={query} render={(data) => <Img fluid={data.coverImage.childImageSharp.fluid} />} />;
};

export const query = graphql`
  query {
    coverImage: file(relativePath: { regex: "/rick_and_morty/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
