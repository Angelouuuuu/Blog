import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { blogPosts } from "../data/blogData"
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft } from "react-icons/fa"
import styles from "./BlogPostDetail.module.css"

const BlogPostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      const foundPost = blogPosts.find((post) => post.id === parseInt(id))
      setPost(foundPost)
      
      // Find related posts (same category, excluding current post)
      if (foundPost) {
        const related = blogPosts
          .filter((p) => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3)
        setRelatedPosts(related)
      }
      
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [id])

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h2>Post not found</h2>
        <Link to="/blog" className={styles.backLink}>
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.postDetail}>
      <div className="container">
        <Link to="/blog" className={styles.backLink}>
          <FaArrowLeft /> Back to Blog
        </Link>
        
        <div className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          
          <div className={styles.postMeta}>
            <div className={styles.metaItem}>
              <FaCalendarAlt />
              <span>{post.date}</span>
            </div>
            <div className={styles.metaItem}>
              <FaUser />
              <span>{post.author}</span>
            </div>
            <div className={styles.metaItem}>
              <FaTags />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.postImageContainer}>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.postImage} />
        </div>
        
        <div className={styles.postContent}>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {post.gallery && post.gallery.length > 0 && (
  <div className={styles.gallerySection}>
    <h3>Image Gallery</h3>
    <div className={styles.galleryGrid}>
      {post.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery image ${index + 1}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.svg";
          }}
        />
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  )
}

export default BlogPostDetail
