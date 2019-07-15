import React from 'react';
import ResumePNG from '../Images/Ross_Tew_Resume.png';
import ResumePDF from '../Documents/Ross_Tew_Resume.pdf';

const resumeStyle = {
    marginTop: '24px',
    width: '80%',
    border: '3px solid lightgray'
};

const resume = (
    <div>
        <p>Below you can find my resume. I created it in a program called Affinity 
            Designer - an alternative to Adobe's Illustrator/Photoshop. Click on it 
            to open/download a PDF version.
        </p>
        <a href={ResumePDF} target="_blank">
            <img src={ResumePNG} alt="Resume" style={resumeStyle} />
        </a>
    </div>
);

export default resume;