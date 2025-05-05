import styles from "../styles/blog.module.css"

const BlogModal = ({ post, onClose }) => {
  if (!post) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalBanner}>
          <img src={post.images?.[0] || "/placeholder.svg"} alt={post.title} />
        </div>
        <div className={styles.modalBody}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className={styles.gallery}>
            {post.images?.slice(1).map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogModal
