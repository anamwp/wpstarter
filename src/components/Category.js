import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from './Posts'
import styled from 'styled-components'

const CatNameWrapper = styled.h3`
    display:block;
    font-weight:normal;
    b{
        margin:0px 5px;
    }
    span{
        padding:3px 9px;
        margin:0px 5px;
        background:#66339930;
        border-radius:3px
    }
`

export default function Category({data}) {
    const postDataArr = data.allWpPost.edges;
    const singleCatData = data.wpCategory;
    return (
        <Layout>
            <SEO title='category' />
            <div>
                <button style={{marginBottom:'20px'}}>
                    <Link to="/">Back</Link>
                </button>
                <CatNameWrapper>
                    Category: 
                    <b>{singleCatData.name}</b> 
                    - 
                    <span>{singleCatData.count}</span>
                </CatNameWrapper>
                <Posts posts={postDataArr} />
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($id: String){
        allWpPost(filter: {categories: {nodes: {elemMatch: {id: {eq: $id }}}}}) {
            edges {
                node {
                    title
                    slug
                    excerpt
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
        wpCategory(id: {eq: $id }) {
            name
            count
            id
        }
    }
`