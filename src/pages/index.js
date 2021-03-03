import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from './../components/Posts'
import Categories from "../components/Categories"
import styled from 'styled-components';

const CategoryWapper = styled.div`
    margin:15px 0px;
    a{
        display:inline-block;
        padding:3px 9px;
        background:#f7f7f7;
        margin:3px 5px;
        color:#555;
        border-radius:2px;
        text-decoration:none;
        transition:all 0.3s ease;
        &:hover{
            background: #66339930;
            color:rebeccapurple;
            text-decoration:underline;
        }
    }
`;
const IndexPage = ({data}) => {
  const postDataArr = data.allWpPost.edges;
  const allCats = data.allWpCategory.edges;
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <CategoryWapper className="category">
                    <Categories categories={allCats} />
                </CategoryWapper>
                <div className="posts">
                    <Posts posts={postDataArr} />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query MyPostQuery {
    allWpPost {
        edges {
            node {
                title
                slug
                excerpt
                date(formatString: "MMMM DD, YYYY")
                categories {
                nodes {
                    name
                    slug
                }
                }
            }
        }
    }
    allWpCategory {
        edges {
            node {
                name
                slug
                id
                count
            }
        }
    }
}

`

export default IndexPage

