import React, { useState, useRef, useEffect } from 'react';
import "./Faq.css";
 
const faqData = [
          {
            question: "What are the benefits of hiring a Chartered Accountant for tax planning?",
            answer: "A Chartered Accountant provides expert advice to optimize your tax liabilities, ensure compliance with tax laws, and help you make informed financial decisions while maximizing tax savings."
          },
          {
            question: "How do you ensure that my financial information remains confidential?",
            answer: "We prioritize confidentiality by using secure, encrypted platforms for data exchange and strictly adhering to the ethical guidelines of the Institute of Chartered Accountants of India (ICAI)."
          },
          {
            question: "What are the compliance requirements for businesses under GST?",
            answer: "Businesses must ensure timely GST registration, accurate return filing, and proper documentation of sales and purchases to avoid penalties. We ensure complete GST compliance for your business."
          },
          {
            question: " Do you offer services for startup businesses?",
            answer: "Yes, we provide comprehensive services including business registration, tax planning, and regulatory compliance tailored to the needs of startups, helping them grow while ensuring legal and financial stability."
          },
          {
            question: "Why should I conduct regular audits for my business?",
            answer: "Regular audits ensure the accuracy of your financial records, help identify inefficiencies or risks, and maintain transparency and compliance with regulatory standards."
          },
          {
            question: "Can you assist with intellectual property registrations such as trademarks or patents?",
            answer: "Yes, we handle the entire process of registering intellectual property, including trademarks, patents, and copyrights, ensuring your assets are legally protected."
          },
        
        ];
        

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px"; 
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  return (
   <>
    <div className='Faq-main'>
      <div className="faq-content">
        <div className="faq-top">
          <h5>FAQ</h5>
          <h3>We Ensure Trusted Chartered Accounting Guidance for You</h3>
          </div>
        <div className="faq-btm">
          {faqData.map((item, index) => (
            <div className={`faq-line ${openIndex === index ? 'active' : ''}`} key={index}>
              <div className="f-line-top" onClick={() => toggleFaq(index)}>
                <h6>{item.question}</h6>
                <i className={openIndex === index ? "ri-arrow-down-double-line" : "ri-arrow-right-double-line"}></i>
              </div>
              <div 
                ref={(el) => (contentRefs.current[index] = el)} 
                className="f-line-btm"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  );
};

export default Faq;
