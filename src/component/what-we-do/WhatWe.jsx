import React from 'react'
import "./WhatWe.css"

import Header from "../../component/header/Header"
import Footer from "../../pages/footer/Footer"
import AboutService from '../home/AboutService'

const WhatWe = () => {
  return (
<>
<Header/>
<div className='WhatWe-main'>
<div className="What-we-content">
   
<div className="what-we-topp">
          <h5>What We Do</h5>
</div>
<div className="what-we-btmm">
   <div className="wwd-image">
          <img src="https://blog.bridgebetween.com/wp-content/uploads/2018/11/meeting-business-team-strategy-session-.jpg"
           alt="" />
   </div>
   <section className="about-title">
          <div className="gggg">
          <div className="d-flex toppp mb-4">
            	<div className="column col-md-4 col-sm-12 col-xs-12">
                	<h2>Now you <br/> Can take your business <br/> Good to great</h2>
                    {/* <a href="about-us.html">More About Us</a> */}
                </div>
                <div className="column col-md-8 col-sm-12 col-xs-12">
                	<h3>Commune nominavi at ius, vix delectus deterruisset cu. Quis dico legendos dicta qsu pedit nam ne. Cibo debitis interpretaris et eum, ei augue rect quo.</h3>
                    <div className="text">Commune nominavi at ius, vix delectus deterruisset cu. Quis dico legendos ei ius, dictas peditern  nam ne. Cibo debitis interpretaris et eum, ei augue recteque quo. Ei cum modo fuger rcipit. At ferri inimicus voluptaria sit, tota nostro mediocrem sit in, ut impetus eripuit qsuemoriatur sed dsu estime ullum vivendo dissentiet, sea ut novum erroribus accommodare.</div>
                </div>
            </div>
          </div>
    </section>
    <AboutService />
</div>
          


</div>
</div>
<Footer />
</>
  )
}

export default WhatWe