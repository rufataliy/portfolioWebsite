import React, { useState, useEffect } from "react";

interface PageThumbnailProps {
  page: {
    name: string;
    image: string;
  };
}

export default ({ page }: PageThumbnailProps) => {
  return (
    <div>
      <h1>{page.name}</h1>
      <img src={`/img/${page.image}`} alt="" />
    </div>
  );
};
