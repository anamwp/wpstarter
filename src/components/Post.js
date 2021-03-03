import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const PostMetaWrapper = styled.div`
    .seperator{
        margin:0px 7px;
    }
`

export default function Post({data}) {
    const singlePost = data.wpPost;
    const singlePostCats = data.wpPost.categories.nodes;
    return (
        <Layout>
            <SEO title={singlePost.title}/>
            <div>
                <button style={{marginBottom:'20px'}}>
                    <Link to="/">Back</Link>
                </button>
                <h1>{singlePost.title}</h1>
                <PostMetaWrapper style={{marginBottom:'20px'}}>
                    <span>
                        <b>
                            Categories:
                        </b>
                    </span>
                    {
                        singlePostCats.map( (cat, index) => {
                            return(
                                <Link key={cat.id} style={{margin:'0px 5px'}} to={`/${cat.slug}`}>
                                    {cat.name}
                                </Link>
                            )
                        } )
                    }
                    <span className="seperator">|</span>
                    <span>
                        <b>Posted on</b> - {singlePost.date} 
                    </span>
                </PostMetaWrapper>
                <div dangerouslySetInnerHTML={{ __html: singlePost.content }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($id: String){
        wpPost(id: { eq: $id }) {
            title
            slug
            content
            date(formatString: "MMMM DD, YYYY")
            categories {
                nodes {
                    name
                    slug
                    id
                }
            }
        }
    }
`