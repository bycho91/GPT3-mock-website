import React from "react";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./import";
import "./blog.css";

const articleData = [
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: blog2,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: blog3,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: blog4,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: blog5,
  },
];

const Blog = () => {
  return (
    <div className="ai__blog section__padding" id="blog">
      <div className="ai__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it
        </h1>
      </div>
      <div className="ai__blog-container">
        <div className="ai__blog-container_groupA">
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is."
            imgUrl={blog1}
          />
        </div>

        <div className="ai__blog-container_groupB">
          {articleData.map((article, index) => (
            <Article
              date={article.date}
              title={article.title}
              imgUrl={article.imgUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
