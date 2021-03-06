import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="All posts"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div className="post-list">
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                        {title}
                                    </Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                {
                                    node.frontmatter.featuredImage &&
                                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                        <Img
                                            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                            className="featuredImage"
                                        />
                                    </Link>
                                }
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
                childImageSharp{
                    fluid(maxWidth: 400, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
    }
  }
`
