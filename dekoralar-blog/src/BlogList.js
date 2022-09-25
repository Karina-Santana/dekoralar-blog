import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, image }) => {
  return (
    <div className="blog-list">
      <h2 className="all-articles">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <div className="img-author">
              <img src={blog.image} alt="" />
              <p>
                Written by <span>{blog.author}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
