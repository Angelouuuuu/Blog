import React from "react";
import styles from "../styles/blog.module.css";
import { FaCalendarAlt, FaUser } from "react-icons/fa"; // Assuming you're using these icons

const BlogCard = ({ post, onClick }) => {
  // Define the function to get image URL
  const getImageUrl = () => {
    if (post && post.image) {
      // Assuming post.image has the file name and it's in the 'public/assets/images/' folder
      return `/assets/images/${post.image}`; // Adjust to the correct path
    }
    return "/placeholder.svg"; // Fallback to placeholder if image is not available
  };

  return (
    <div className={styles.blogCard} onClick={() => onClick && onClick(post)}>
<img
  src={post.image}
  alt={post.title}
  className="responsiveImage"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/placeholder.svg";
  }}
/>


      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{post.title}</h3>

        <div className={styles.cardMeta}>
          {post.date && (
            <div className={styles.metaItem}>
              <FaCalendarAlt />
              <span>{post.date}</span>
            </div>
          )}
          {post.author && (
            <div className={styles.metaItem}>
              <FaUser />
              <span>{post.author}</span>
            </div>
          )}
        </div>

        <p className={styles.cardSummary}>{post.summary}</p>

        <div className={styles.cardFooter}>
          <span className={styles.readMore}>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
