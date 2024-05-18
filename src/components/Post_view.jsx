import React from "react";

function Post_view({ key, post }) {
  return (
    <div key={key}>
      {console.log(post)}
      <h1>{post.title}</h1>
    </div>
  );
}

export default Post_view;
