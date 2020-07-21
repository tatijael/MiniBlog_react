import React from 'react'

const PostAuthor = ({user,date}) =>{
    return( <header className="post-info">
    <img
      className="user-avatar"
      src="https://www.stylist.co.uk/images/app/uploads/2018/10/09155947/ada-lovelace-day-2018-quotes-facts-biography-crop-1539097197-1366x1366.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
      alt="Ada Lovelace Avatar"
    />
    <div className="container">
      <h3 className="username">{user.username}</h3>
      <p className="post-date">
Publicado el <time>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</time>
      </p>
    </div>
  </header>)
}

export default PostAuthor
