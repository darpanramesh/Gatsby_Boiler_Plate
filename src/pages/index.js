
import React from 'react';
import { graphql , Link } from 'gatsby'

//all query in graphql is below in perameter (data)

export const query = graphql`
  {
   posts: allContentfulPost {
      nodes {
        title
        slug
        author {
          name
        }
      }
    }
  }
`;

export default ({data})=>
<div>
  {/* <h1>Umar First Gatsby Site</h1> */}

  {data.posts.nodes.map(post => ( 
  <div key={`post-${post.slug}`}>
    <h2>
      <Link to={`/${post.slug}`}>
       {post.title} (with {post.author.name})
       </Link>
       </h2>
  </div>
  ))}
</div>










// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <h2>Welcome to your new Gatsby site</h2>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage
