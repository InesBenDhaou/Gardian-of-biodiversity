import './TeamSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import React, { useState ,useEffect} from 'react';

import {TeamMembersApi} from '../../api/teamMember.api';

import 'bootstrap/dist/css/bootstrap.min.css';
function TeamSection() {
  
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    TeamMembersApi.getTeamMembers().then((newMember)=>{
      setTeamMembers(newMember);
    });
    
  }, []);

  
  
    return(
    <section id="team" className="team">
   
      <div class="row">
      <div className="col-md-12">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2 style={{color:" #df6622",paddingTop:"40px"}}>Our Team</h2>
          <p>Meet the dedicated individuals behind our mission — a passionate team united by a shared commitment to safeguarding rare species and preserving the delicate balance of our planet. Together, we strive to make a positive impact on biodiversity conservation through our collective expertise, unwavering dedication, and a shared love for the natural world.</p>
        </div>
    </div>
    </div>
    <div class="row">
          
    {teamMembers.map(member => (
            <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up">
              <div className="pic"><img src={'data:image/png;base64,' +member.image} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <span>{member.position}</span>
                <div className="social">
                  <a href={member.twitterlink}><i className="bi bi-twitter"></i></a>
                  <a href={member.facebooklink}><i className="bi bi-facebook"></i></a>
                  <a href={member.instagramlink}><i className="bi bi-instagram"></i></a>
                  <a href={member.linkedinlink}><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))} 
    
    </div>

    </section>
    );
}
export default TeamSection;