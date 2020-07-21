import React from 'react'
import PostAuthor from '../PostAuthor/PostAuthor'


const Comment = ({user, date, content}) =>{
    return (
        <article className="comment">
            <p className="comment-content">{content}</p>
            <PostAuthor user={user} date={date}></PostAuthor>
        </article>

    )
}

export default Comment