import React from 'react'
import './blogList.css'
import BlogItem from './BlogItem/BlogItem'

function BlogList({blogs}) {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog)=>{
       return <BlogItem blog={blog} key={blog.id}/>
      })}
    </div>
  )
}

export default BlogList
