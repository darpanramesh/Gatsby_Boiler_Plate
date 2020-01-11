import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query ($slug: String!){
    post: contentfulPost(slug: {eq: $slug}) {
      title
      video
      author {
        name
        twiiter
      }
      seo {
        title
        description {
          description
        }
      }
    }
  }
 
`



const PostTemplate = ({ data : {post} }) => (
 <div>
 <h1>{post.title}</h1>
 <p>
     Author: {post.author.name}  
 </p>
 <a href={post.author.twitter}>Twitter</a>


</div>

)

export default PostTemplate