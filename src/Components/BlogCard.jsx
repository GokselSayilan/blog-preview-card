import React from "react";
import "./blogCard.css";

function BlogCard() {
  return (
    <div className="blogCard bgWhite">
      <header className="blogCardHeader">
        <img
          src="assets/illustration-article.svg"
          alt="headerImage"
          className="headerImg"
        />
        <div className="headerLearning bgYellow">
          <p className="textSmall textBold textBlack">Learning</p>
        </div>
        <p className="headerDate textSmall textBlack">Published 21 Dec 2023</p>
      </header>
      <div className="blogCardContent">
        <h1 className="blogCardContentTitle textLarge textBlack">
          HTML & CSS foundations
        </h1>
        <p className="blogCardContentDesc textGrey textMedium">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="blogCardContentProfile">
          <img src="assets/image-avatar.webp" alt="profileImg" className="profileImg" />
          <p className="profileFullName textSmall textBold textBlack">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
