import React from 'react'
import "./BlogDetail.css"
import Header from "../../component/header/Header"
import Footer from "../../pages/footer/Footer"

const BlogDetail = () => {
  return (
   <>
   <Header />
    <div className='BlogDetail-main'>
          <div className="blog-detail-content">
                    <div className="b-detail-top">
                               <h5>Blog Detail</h5>
                    </div>
                    <div className="b-detail-btm">
                    <div className="b-detail-box">

                              <div className="b-detail-img">
                                  <img src="https://images.unsplash.com/photo-1601751839329-dd71d6428a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwcGN8fDB8fHx8MTYyNzQ0OTE0OQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />       
                              </div> 
                              <span>13 Feb, 2016 / 2 Comments</span> 
                              <h6>How to Become a Best Sales Marketer in a few Years</h6>  
                              <p>Bar none, the biggest objection a customer ever raises is price. Often they don’t comprehend the value of your solution, therefore concluding that the number you’ve quoted is completely arbitrary, maybe even greed-based. It’s true that today’s customers exist in a climate of global competition; they know how to “Google it,” etc. But information isn’t always knowledge, so they’re not nece...</p>
                              <small>Lorem ipsum dolor sit amet, tota aliquip vel eu, cum cu velaccumsa molestiae ius etiam erant appellantur vel ei. Ad volutpat necessitatibus vis oite.</small>
                              <h6 className='mt-4'>Real World Example</h6>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ullam at quos provident explicabo qui labore impedit libero minima accusamus neque, facere modi ad placeat dolorem eaque recusandae? Sapiente, veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta ratione placeat odit, aliquam officia nam, laudantium et id fugiat fugit exercitationem cumque animi vel eius inventore reprehenderit at voluptates.</p>
                              
                              <p>Bar none, the biggest objection a customer ever raises is price. Often they don’t comprehend the value of your solution, therefore concluding that the number you’ve quoted is completely arbitrary maybe even greed-based. It’s true that today’s customers exist in a climate of global competition</p>

                    </div>  
                    </div>
          </div>
    </div>
    <Footer />
   </>
  )
}

export default BlogDetail