import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import SearchBar from '../Components/SearchBar/SearchBar'
import { blogListData } from '../Config/Data'
import BlogList from '../Components/BlogList/BlogList'
import EmptyList from '../Components/EmptyList/EmptyList'

function Home() {
  //states

  const[blogs , setBlogs]=useState(blogListData)
  const [searchKey, setSearchKey]= useState("")
  
 

  const handelSubmitForm=((e)=>{

    e.preventDefault();
    const allBlog=blogListData
    const filterBlog= allBlog.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()))
    setBlogs(filterBlog);
  })
  
  const handleClearSearch=(()=>{
    setBlogs(blogListData);
    setSearchKey("")

  })
 
  return (
    <div>
     {/* header */}
     <Header/>

     {/* searchbar */}
     <SearchBar 
     handleSearchKey={(e)=>setSearchKey(e.target.value)}
     submitForm={handelSubmitForm}
     value={searchKey}
     clearSearch={handleClearSearch}
     />

     {/* Blog list */}
     {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home
