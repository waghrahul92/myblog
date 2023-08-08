import React, { useEffect, useState } from 'react'
import './blog.css'
import { Link, useParams } from 'react-router-dom'
import { blogListData } from '../Config/Data';
import EmptyList from '../Components/EmptyList/EmptyList';


function Blog() {
  const {id}=useParams();
  const [blog, setBlog]= useState(null)

  useEffect(()=>{
  let blog= blogListData.find(blog=>blog.id===parseInt(id))
  if (blog) {
    setBlog(blog)
  }
  },[id])
console.log(blog)
  return (
    <div >
     <Link to="/" className='link-wrap'><span>&larr; </span> Go back</Link>

     { blog? <div className="blog-wrap">
      <header>
        <p className='publishedDate-wrap'>Published {blog.createdAt} </p>
        <h1>{blog.title}</h1>
        <div>
          <p className='categoryLable-wrap'> {blog.category}</p>
        </div>
      </header>
      <img src={blog.cover} alt="" />
      <p className="desc-wrap">{blog.description}</p>
     </div> 
     : <EmptyList /> } 
    
    </div>
  )
}

export default Blog

