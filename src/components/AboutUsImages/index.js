import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
    <div>

{
    console.log(data)
}        <h1>
            Hello Images</h1>
            <Img fixed={data.file.childImageSharp.fixed}/>
                </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "gentlemanprogramming.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`