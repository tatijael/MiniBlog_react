import React from 'react'
import Comment from "../Comment/Comment"


const Comments = ({comments}) =>{
    return(
        <section className="comments">
            <h2 className="comments-title">comentarios</h2>

            <ul className="comment-list">
            {
                comments.map(comment => {
                    return <li className="comment-item">
                        <Comment user={comment.user} date={comment.date} content={comment.content}/>
                    </li> 
                })
            }
            </ul> 
        </section>
    )
}

export default Comments