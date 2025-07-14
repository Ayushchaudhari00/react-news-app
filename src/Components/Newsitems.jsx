import React from 'react';

function Newsitems({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light m-2" style={{ maxWidth: "345px" }}>
      <img
        src={src || "https://via.placeholder.com/345x200.png?text=No+Image"}
        className="card-img-top"
        alt="News"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title"}</h5>
        <p className="card-text">{description || "No Description Available"}</p>
        <a
          href={url}
          className="btn btn-outline-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsitems;
