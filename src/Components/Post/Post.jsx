import React from 'react'
import PostAuthor from '../PostAuthor/PostAuthor'
import PostContent from '../PostContent/PostContent'
import Comments from '../Comments/Comments'

const Post = ({info}) =>{
return (
<div className="column">
    <section className="post">
      <PostAuthor user={info.user} date={info.date}/>
  
      <PostContent info={info.img} content={info.content} title={info.title}/>  
      <Comments comments={info.comments}/>  
  
    </section>
</div>



)}

export default Post



