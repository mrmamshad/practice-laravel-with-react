import React, { useState, useEffect } from "react";
import Post_view from "./Post_view";

function Post() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const filerData = data.filter((post) => post.userId == 1);
        setData(filerData);
      })
      .catch((err) => {
        console.log(err);
        console.log("error is happend");
      });
  },[]);

  return (
    <div>
      {data.map((post) => (
        <Post_view key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Post;
