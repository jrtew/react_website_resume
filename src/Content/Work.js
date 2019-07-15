import React from 'react';

const listStyle = {
    listStyle: 'inside'
}
const listStyle2 = {
    textAlign: 'left',
    marginLeft: '46px',
    marginTop: '-12px',
    marginBottom: '36px'
}

const work = (
    <div>
        <h3>React Resume Site</h3>
        <p>This website is my current side-project I have been working on as I refresh 
            my React.js skills while taking Maximilian Schwarzmuller's <i>React - The Complete 
            Guide (incl Hooks, React Router, Redux)</i> course on Udemy. This has been a fun 
            way to brush up on my skills and create a site that has a little bit of info about 
            myself, along with my resume. I am using GitHub to host and the repo can be viewed 
            here: <a href="https://github.com/jrtew/react_website_resume">React Resume Site</a>.
        </p>
        <p>As I work through Max's Udemy course, I plan to continue adding on to this site. 
            Some of the things in the works are:
        </p>
        <ul style={listStyle}>
            <li>A theme switching option</li>
            <li>Animations for the hero text</li>
            <li>Make the whole site mobile responsive</li>
            <li>More content</li>
        </ul>
        <br/>
        <hr/>
        <h3>School Projects</h3>
        <p>I have 3 projects on my GitHub from when I was working on my master's degree at CSU:</p>
        <h5>Movie Selector:</h5>
        <ul style={listStyle2}>
            <li>Window's application that chooses a movie based on the user's mood</li>
            <li>Final project for Intelligent Systems course</li>
            <li>Built with Java</li>
            <li>GitHub repo at: <a href="https://github.com/jrtew/MovieSelector-V1.6">Movie Selector</a></li>
        </ul>
        <h5>TAT Simulator</h5>
        <ul style={listStyle2}>
            <li>Game that simulates a cross country motorcycle trip
                on the Trans-America Trail (TAT)
            </li>
            <li>Final project for Simulation and Gaming course</li>
            <li>Built with C#</li>
            <li>GitHub repo at: <a href="https://github.com/jrtew/TAT-Simulator">TAT Simulator</a></li>
        </ul>
        <h5>Vehicle Maintenance Log</h5>
        <ul style={listStyle2}>
            <li>Final project for OOD course</li>
            <li>Allows multiple users to log in and add/remove/edit maintenance
                logs for their different vehicles
            </li>
            <li>Built with Java</li>
            <li>GitHub repo at: <a href="https://github.com/jrtew/Virtual_Garage_Maintenance_Log">Virtual Garage</a></li>
        </ul>
    </div>
    );

export default work;