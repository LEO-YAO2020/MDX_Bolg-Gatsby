import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          category
          date(formatString: "Do ,MMMM YYYY")
          slug
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          author
        }
        excerpt
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}


export default IndexPage
