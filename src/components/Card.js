import React from "react";
import "../App.css";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function Card({ title, body, id }) {
  const [judul, setJudul] = useState('')

  useEffect(() =>{
    const newTitle = title.split(' ');
    const ar = newTitle.slice(0,2).join(' ');
    setJudul(ar);
  })

  return (
    <div className="card">
      <img src="http://ristek.link/image-book" alt="" />
      <div className="tulisan t-judul">
        {/* <h5>Title: {title}</h5> */}
        <h5 className="">{judul}</h5>
      </div>
      <div className="tulisan">
        {/* <h5>Desc: {description}</h5> */}
        <p className="description">
          {body}
        </p>
      </div>
      <div>
        <Link to={`detail/${id}`}>
          <p>Link</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
