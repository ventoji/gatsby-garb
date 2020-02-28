import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
const getMarkDownPosts = graphql`
{
    allMarkdownRemark {
      totalCount
      edges {
        node {
            fields {
                slug
            }
            id
          frontmatter {
            date(formatString: "")
            title
          }
          excerpt
        }
      }
    }
  }
`
export default () => (
   <Layout>
    <div>
        <h1 style={{display: 'inlineBlock', borderBottom: '1px solid'}}> 
        Gatbsy Garb Blog </h1>

    <StaticQuery
        query={getMarkDownPosts}
        render= { data => (
            <>
            <h1> {data.allMarkdownRemark.totalCount}</h1>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                <Link to={`/posts${node.fields.slug}`}> <h3> { node.frontmatter.title}
                </h3></Link> <span style={{color: '#bbb'}}> -{node.frontmatter.date}</span>
                <p> {node.excerpt} </p>
            </div> 
            ))}
            </>
        )
    }

    />
    </div>
   
   </Layout> 
)