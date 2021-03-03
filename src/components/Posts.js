import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
const LinkWrapper = styled.div`
    background:#f7f7f7;
    padding:15px;
    border:solid 1px #ddd;
    border-radius:2px;
    margin:10px 0px 20px;
    transition:all 0.3s ease;
    
    h3{
        margin-bottom:10px;
        a{
            text-decoration:none;
            transition:all 0.3s ease;
            color:#555;
            &:hover{
                color:rebeccapurple;
                text-decoration:underline;
            }
        }
    }
    .sperator{
        margin:0px 7px;
    }
    .post-meta{}
    &:hover{
        background: #66339930;
        a{
            color:rebeccapurple;
            text-decoration:underline;
        }  
    }
`

export default function Posts(props) {
    const PostsArr = props.posts;
    return (
        <div>
            {
                PostsArr.map( (post, index) => {
                return(
                    <LinkWrapper key={`${index}+${post.node.id}`}>
                        <h3>
                            <Link to={`/${post.node.slug}`} dangerouslySetInnerHTML={{ __html: post.node.title }}/>
                        </h3>
                        <p className="post-meta">
                            <span className="post-author">
                                By - Admin
                            </span>
                            <span className="sperator">|</span>
                            <span className="post-date">
                                Posted on - {post.node.date}
                            </span>
                        </p>
                        <p  dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                    </LinkWrapper>
                    )
                } )
            }
        </div>
    )
}
