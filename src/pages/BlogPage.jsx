"use client"

import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard"
import { blogPosts } from "../data/blogData"
import styles from "./BlogPage.module.css"

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState(null)

  // Categories for filtering
  const categories = ["all", "technology", "events", "tutorials", "news"]

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      // Make sure each post has the required properties
      const processedPosts = blogPosts.map((post) => ({
        ...post,
        // Ensure images is an array if it exists
        images: post.images || (post.image ? [post.image] : []),
      }))
      setPosts(processedPosts)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter posts based on category and search term
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = filter === "all" || post.category === filter
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Handle post click
  const handlePostClick = (post) => {
    setSelectedPost(post)
    // Navigate to post detail page
    window.location.href = `/blog/${post.id}`
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.pageTitle}>Blog & Events</h1>
        <p className={styles.pageSubtitle}>
          Explore our latest articles and upcoming events. Click on any post to view more details.
        </p>
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${filter === category ? styles.active : ""}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading blog posts...</p>
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className={styles.blogGrid}>
          {filteredPosts.map((post) => (
            <div key={post.id} className={styles.cardLink}>
              <BlogCard post={post} onClick={handlePostClick} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noPosts}>
          <h3>No posts found</h3>
          <p>Try changing your search criteria or category filter.</p>
        </div>
      )}
    </div>
  )
}

export default BlogPage
