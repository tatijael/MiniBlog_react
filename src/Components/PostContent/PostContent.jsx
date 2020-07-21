import React from 'react'

const PostContent = ({info, content,title}) =>{
    return (
    <section className="post-content">
        <img
        className="post-img"
        src={info.src}
        alt={info.altText}
        />
        <div className="post-text-container">
            <h1 className="post-title">{title}</h1>
            <p className="post-text">
            {content}
             </p>
        <a href="/" className="read-more">
          Ver más
        </a>
    </div>
    </section>
    )
}

export default PostContent