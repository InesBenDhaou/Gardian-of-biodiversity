import React, { useState } from 'react';

import './ProjectTimeline.css';

const ProjectTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleProgressBar = (width) => {
    return {
      width: `${width}%`,
    };
  };

  const sections = [
    { title: 'Educate for Conservation', content: 'is a project close to our hearts. We believe that awareness is the first step toward preservation. Through interactive workshops, school programs, and online resources, we aim to inspire the next generation to become passionate stewards of biodiversity' ,image: require('./ProjectsImages/bird.jpg').default},
    { title: 'Flight to Freedom', content: 'This project focuses on safeguarding the migratory routes of birds facing threats during their journeys. By collaborating with international partners and employing cutting-edge tracking technology, we ensure the safe passage of these majestic creatures across continents.' , image: './ProjectsImages/bird.jpg' },
    { title: 'Green Spaces', content: 'this was our first initiative to create green spaces within urban landscapes. By transforming unused areas into thriving ecosystems, we aim to promote biodiversity in unexpected places, fostering a harmonious coexistence between nature and urban life.' , image: './ProjectsImages/bird.jpg'},
    { title: 'Rare Species', content: 'As part of the "Rare Species Preservation" we collaborate with organizations worldwide to address the challenges facing rare species on a global scale. By sharing knowledge, resources, and expertise, we amplify our impact and contribute to a united front for biodiversity conservation.' , image: './ProjectsImages/bird.jpg'},
    { title: 'Rare Species Preservation', content: 'As part of the "Rare Species Preservation" we collaborate with organizations worldwide to address the challenges facing rare species on a global scale. By sharing knowledge, resources, and expertise, we amplify our impact and contribute to a united front for biodiversity conservation.', image: './ProjectsImages/bird.jpg' },
  ];

  return (
    <div>
      <h1>Our Projects</h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {sections.map((section, index) => (
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
          {sections.map((section, index) => (
            <div
              key={`section${index }`}
              className={`section-content ${activeStep === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${section.image})`, backgroundSize: 'cover' }}

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
