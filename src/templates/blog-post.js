import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ShareButtons from '../components/ShareButtons';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const { previous, next } = this.props.pageContext

        return (
            <Layout
                location={this.props.location}
                title="Home"
            >
                <SEO title={post.frontmatter.title} description={post.excerpt} />
                <div className="post-content">
                    <h1>{post.frontmatter.title}</h1>
                    <span className="post-date">
                        {post.frontmatter.date}
                    </span>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr/>
                    <ShareButtons/>
                    <ul className="post-nav">
                        {previous && (
                            <li>
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            </li>
                        )}
                        {next && (
                            <li>
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            </li>
                        )}

                    </ul>
                </div>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
