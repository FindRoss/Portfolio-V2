import React from "react"
import Layout from "../components/layout";

const BlogLayout = ({ children }) => {

  return (
    <Layout>
      <div className="cont">
        <div className="post">
          {children}
        </div>
      </div>
    </Layout>
  )
}



export default BlogLayout
