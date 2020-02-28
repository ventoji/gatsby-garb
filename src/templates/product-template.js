import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const ProductTemplate = ({ data: { contentfulProducy }, location }) => (
  <Layout>
    <div
      style={{
        marginLeft: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      {/* Product Info */}
      <h2>
        {contentfulProducy.name} -{' '}
        <span style={{ color: '#ccc' }}>
          Added on {contentfulProducy.createdAt}
        </span>
      </h2>
      <h4>${contentfulProducy.price}</h4>
      <p>{contentfulProducy.description}</p>
      <button
        style={{
          background: 'darkorange',
          color: 'white',
          padding: '0.3em',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProducy.slug}
        data-item-price={contentfulProducy.price}
        data-item-image={contentfulProducy.image.file.url}
        data-item-name={contentfulProducy.name}
        data-item-url={location.pathname}
      >
        Add to Cart
      </button>
      <Img
        style={{ margin: '0 auto', maxWidth: 600 }}
        fluid={contentfulProducy.image.fluid}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProducy(slug: { eq: $slug }) {
      slug
      name
      price
      description
      createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
