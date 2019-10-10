import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  const data = useStaticQuery(
    graphql`
    query {
      file(relativePath: { eq: "images/me.png" }) {
          childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
              }
          }
      }
  }
    `
  )

  return <Img {...normalizedProps} fluid={data.file.childImageSharp.fluid} />
}

// const Image = () => {
//   const data = useStaticQuery(
//     graphql`
//     query {
//       file(relativePath: { eq: "images/me.png" }) {
//           childImageSharp {
//               fluid(maxWidth: 175, maxHeight: 175, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                   presentationWidth
//               }
//           }
//       }
//   }
//     `
//   )

//   return (
//     <Img fluid={data.file.childImageSharp.fluid} />
//   )
// }

export default Image