import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        setLoading(false);
        setPost(res.data);
      })
      .catch(err => {
        setLoading(false);
        setError("Something went wrong.");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
