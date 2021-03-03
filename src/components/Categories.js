import { Link } from 'gatsby';
import React from 'react'

export default function Categories(props) {
    const allCats = props.categories;
    return (
        <>
            {
                allCats.map( (cat, index) => {
                    return (
                        <Link key={`${index}+${cat.id}`} to={`category/${cat.node.slug}`}>
                            {cat.node.name} - {cat.node.count}
                        </Link>
                    )
                } )      
            }
        </>
    )
}
