import React from "react";

interface PageThumbnailProps {
  page: page;
}

export default ({ page }: PageThumbnailProps) => {
  return (
    <React.Fragment>
      <h1>{page.name}</h1>
      <img src={`https://portfoliorufat.herokuapp.com/${page.image}`} alt="" />
    </React.Fragment>
  );
};
