import React from 'react';

const Comment = (props) => {
   const { name, time, content, img } = props;
   console.log(props);
   return (
      <div className="comment">
         <a href="/" className="avatar">
            <img alt="sup" src={img} />
         </a>
         <div className="content">
            <a href="/" className="author">{name}</a>
            <div className="metadata">
               <span className="date">{time}</span>
            </div>
            <div className="text">{content}</div>
         </div>
      </div>
   );
};

export default Comment;