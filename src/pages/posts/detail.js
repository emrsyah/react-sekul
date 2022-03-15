import React from "react";
import { useParams } from "react-router";

function DetailPost() {
  const { id } = useParams();

  return <div>
      <h2>Detail pages ke - {id}</h2>
  </div>;
}

export default DetailPost;
