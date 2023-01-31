import React from "react";
import BlogHeroSec from "../components/BlogHeroSec/BlogHeroSec";
import BlogPostContainerSec from "../components/BlogPostContainerSec/BlogPostContainerSec";

export default function Blog() {
  return (
    <div className="text-black">
      <BlogHeroSec />
      <BlogPostContainerSec />
    </div>
  );
}
