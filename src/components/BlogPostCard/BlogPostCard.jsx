import React from "react";

export default function BlogPostCard({ image, id, p, title }) {
  return (
    <div className="blogPostCardGlass overflow-hidden rounded-3xl">
      <img src={image} alt={title} />
      <div className="px-10 py-5">
        <h1 className="mb-5 mt-4 text-2xl font-semibold">{title}</h1>
        <p className="text-justify">{p}</p>
      </div>
    </div>
  );
}
