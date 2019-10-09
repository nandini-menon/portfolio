import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(
    graphql`
    query {
      file(relativePath: { eq: "images/me.png" }) {
          childImageSharp {
              fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
  }
    `
  )

  return (
    <Img fixed={data.file.childImageSharp.fixed} />
  )
}

export default Image