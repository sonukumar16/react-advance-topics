import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  /*   const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        console.log("response------->>", res);
        setPost(res.data);
      })
      .catch(err => console.log("Error----------->>", err));
  }, []); */

  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log("response------->>", res);
        setPost(res.data);
      })
      .catch(err => console.log("Error----------->>", err));
  }, [idFromButtonClick]);

  const handleClick = () => setIdFromButtonClick(id);

  return (
    <div>
      {/*  <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul> */}
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Get Post</button>
      <p style={{ display: "block" }}> {post.title} </p>
    </div>
  );
}

export default DataFetching;
