import React, { useState ,useEffect} from 'react';

import { ProjetsApi } from '../../api/projet.api';
import './ProjectTimeline.css';

const ProjectTimeline = () => {
  

  const [projets, setprojets] = useState([]);

  useEffect(() => {
    ProjetsApi.getProjets().then((newProjet)=>{
      setprojets(newProjet);
    });
        
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleProgressBar = (width) => {
    return {
      width: `${width}%`,
    };
  };

  return (
    <div className='Timeline_body '>
      {/*<h1>Our Projects</h1>*/}
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {projets.map((section, index) => (
              <li
                key={`step${index }`}
                className={`step step0${index } ${activeStep === index ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-inner">{section.title}</div>
              </li>
            ))}
          </ul>

          <div id="line">
            <div id="line-progress" style={handleProgressBar((activeStep ) * 25)}></div>
          </div>
        </div>

        <div id="progress-content-section">
          {projets.map((section, index) => (
            <div
              key={`section${index }`}
              className={`section-content ${activeStep === index ? 'active' : ''}`}
              
            >
            <div style={{alignItems:"right"}}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
