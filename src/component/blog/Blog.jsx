import React from 'react'
import "./Blog.css"
import Header from "../../component/header/Header"
import Footer from "../../pages/footer/Footer"

const Blog = () => {
    
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8ZnJlZWxhbmNpbmd8fDB8fHx8MTYyNjk1NTYyNA&ixlib=rb-1.2.1&q=80&w=1080",
      date: "13 Feb, 2016",
      category: "Tax Planning",
      title: "Smart Tax Planning for Small Businesses",
      description: "Tax planning is vital for the success of small businesses. Learn how to minimize tax liabilities and optimize your tax savings with strategic planning. This guide will help you understand tax-efficient strategies for your business.",
      link: "/ca-project/blog-detail"
    },
    {
      img: "https://www.marketingmetricscorp.com/wp-content/uploads/2020/04/sales-and-marketing-scaled.jpeg",
      date: "13 Feb, 2016",
      category: "Financial Insights",
      title: "Understanding GST Compliance for Your Business",
      description: "GST can be a complex subject for business owners. This article provides a detailed guide on how to navigate GST compliance, avoid common mistakes, and stay updated with the latest rules and regulations.",
      link: "/ca-project/blog-detail"
    },
    {
      img: "https://images.unsplash.com/photo-1601751839329-dd71d6428a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwcGN8fDB8fHx8MTYyNzQ0OTE0OQ&ixlib=rb-1.2.1&q=80&w=1080",
      date: "13 Feb, 2016",
      category: "Taxation",
      title: "How to File Your Tax Returns With Ease",
      description: "Filing tax returns can be an overwhelming process. This blog provides essential tips and best practices to help you manage your tax filing efficiently, avoid errors, and maximize deductions.",
      link: "/ca-project/blog-detail"
    }
  ];

  return (
   <>
   <Header />
    <div className='Blog-main'>
          <div className="blog-content">
                
                <div className="blog-top">
                    <h5>Latest Insights</h5>
                </div>
                <div className="blog-btm">
                  {blogs.map((blog, index) => (
                    <div className='blog-box' key={index}>
                      <div className="blog-img">
                         <img src={blog.img} alt={blog.title} />
                     </div>
                     <span>{blog.date} / {blog.category}</span>
                     <h6>{blog.title}</h6>
                     <p>{blog.description}</p>
                     <a href={blog.link}>Read More</a>
                    </div>
                  ))}
                </div>
          </div>
    </div>
    <Footer />
   </>
  )
}

export default Blog
