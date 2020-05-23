import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: payload };
    case "FETCH_ERROR":
      return { error: "Something went wrong!", loading: false, post: {} };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, post, error } = state;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch(err => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingTwo;
