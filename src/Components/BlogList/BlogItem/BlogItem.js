import React from 'react'
import './blogItem.css'
import { Link } from 'react-router-dom'

function BlogItem({
    blog: {
        id,
        description,
        title,
        createdAt,
        authorName,
        authorAvatar,
        category,
        cover
    } }) {
    return (
        <div className='blogItem-wrap'>
            <img src={cover} alt="cover" className='cover-wrap' />
            <p className='blogItem-lable'>{category}</p>
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer className='footer-wrap'>
                <div className='authorAvatar-wrap'>
                    <img src={authorAvatar} alt="author" />

                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link to={`/blog/${id}`} className='link-wrap'  >&rarr; </Link>
            </footer>
        </div>
    )
}

export default BlogItem
