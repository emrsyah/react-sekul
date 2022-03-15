import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import "../style.scss";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const resp = res.data;
      const data = resp.slice(0, 10);
      setPosts(data);
    });
  }, []);

  console.log(posts);

  return (
    <div className="post-page">
      <h3>Post Page</h3>
      <div className="post-link" style={{ cursor: "pointer" }} onClick={() => navigate("/form")}>
        Go to login page
      </div>
      {/* {json.map(user=>(
          <h1>{user.nama}</h1>
      ))} */}
      <div className="post-container">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
