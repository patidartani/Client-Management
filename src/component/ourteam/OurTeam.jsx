import React from 'react';
import './OurTeam.css';
import Header from '../header/Header';
import Footer from "../../pages/footer/Footer"

const teamMembers = [
  {
    img: "https://media.istockphoto.com/id/825083358/photo/businessman-wearing-eyeglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=G29fVVD9i3fZ5Flr2ODNs752N1pp62KO29KJBRc_Xsw=",
    name: 'Rashed Kabir',
    role: 'Chartered Accountant & Tax Consultant',
    description: 'With over 10 years of experience in tax planning and auditing, Rashed provides expert financial strategies for businesses to thrive.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/1248769041/photo/portrait-of-man-in-glasses-and-white-shirt.jpg?s=612x612&w=0&k=20&c=5iXRmDEALdJYaVwsTxZmd3rsnpnPANKb7kNHOS2wExA=",
    name: 'Meera Joshi',
    role: 'Financial Analyst & Auditor',
    description: 'Meera specializes in financial reporting and analysis. Her insights help businesses streamline operations and maintain compliance.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/1386833459/photo/portrait-of-smiling-mature-man-standing-on-white-background.jpg?s=612x612&w=0&k=20&c=ynWGtd-JV3bv64tB9J5a2mQHz8HYzS1w4Coa0EnrR6Q=",
    name: 'Amit Verma',
    role: 'Audit Partner',
    description: 'Amit has a deep understanding of audit processes and helps clients meet regulatory requirements with ease and accuracy.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/482100240/photo/happy-to-be-at-work.jpg?s=612x612&w=0&k=20&c=ObhAjacfuKKOPb6VZmaoSaBJMgT6MxN-zr4nGphXRhw=",
    name: 'Neha Kapoor',
    role: 'Taxation Specialist',
    description: 'Neha offers expert guidance in personal and corporate tax strategies, ensuring maximum tax savings and compliance.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/590241416/photo/theres-a-few-steps-left-on-my-ladder-of-success.jpg?s=612x612&w=0&k=20&c=la6wIcJD_9SNkV__z2sFhjdZ4o-ysxKRryqzlyJRmfw=",
    name: 'Vikram Sethi',
    role: 'Business Advisory Consultant',
    description: 'Vikram provides strategic business advice, helping clients navigate financial challenges and seize growth opportunities.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/2153052418/photo/man-with-glasses-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=fcH441fy83nLVKFFMcNne48wzbYmrZr4Z10kCum8rAg=",
    name: 'Sonal Desai',
    role: 'Senior Consultant – Accounting & Compliance',
    description: 'Sonal is an expert in accounting and compliance, providing businesses with insights into financial regulations and optimal practices.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/825083358/photo/businessman-wearing-eyeglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=G29fVVD9i3fZ5Flr2ODNs752N1pp62KO29KJBRc_Xsw=",
    name: 'Rashed Kabir',
    role: 'Chartered Accountant & Tax Consultant',
    description: 'With over 10 years of experience in tax planning and auditing, Rashed provides expert financial strategies for businesses to thrive.',
    profileLink: '#',
  },
  {
    img: "https://media.istockphoto.com/id/1248769041/photo/portrait-of-man-in-glasses-and-white-shirt.jpg?s=612x612&w=0&k=20&c=5iXRmDEALdJYaVwsTxZmd3rsnpnPANKb7kNHOS2wExA=",
    name: 'Meera Joshi',
    role: 'Financial Analyst & Auditor',
    description: 'Meera specializes in financial reporting and analysis. Her insights help businesses streamline operations and maintain compliance.',
    profileLink: '#',
  },
];



const OurTeam = () => {
  return (
    <>
      <Header />
      <div className='OurTeam-main'>
        <div className="our-team-content">
          <div className="team-topp">
            <h5>Our Expert</h5>
          </div>
          <div className="team-btmm">
            {teamMembers.map((member, index) => (
              <div className="team-box" key={index}>
                <div className="team-img">
                <img src={member.img} alt=''/>

                </div>
                <div className="team-name">
                  <h4>{member.name}</h4>
                  <small>{member.role}</small>
                </div>
                <p>{member.description}</p>
                <a href={member.profileLink}>SEE PROFILE</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;
