export default function Resume() {
    return (
      <div className="">
        <h3 className="">Resume</h3>
        <div id="resume-container">
          <div className="">
            <h4>Objective</h4>
            <p>
            Highly motivated and newly educated full stack web developer seeking to leverage my skills and knowledge in React, Node.js, and other modern web technologies to contribute to innovative and impactful web development projects.
            </p>
          </div>
          <div className="">
            <h4>Skills</h4>
            <ul>
              <li><b>Front-End: </b><span>HTML, CSS, JavaScript, React (State Management, useEffect)</span></li>
              <li><b>Back-End: </b><span>Node.js, Express.js</span></li>
              <li><b>Databases: </b><span>SQL (MySQL), NoSQL(MondoDB, GraphQL)</span></li>
              <li><b>Tools & Technologies: </b><span>Git, Web API, Third-Party APIs, Server-Side APIs, ORM, MVC, PWAs, MERN Stack</span></li>
            </ul>
          </div>
          <div className="">
            <h4>Education</h4>
            <b>Full Stack Web Development Certificate</b>
            <span>Ohio State Bootcamp</span>
          </div>
          <div className="">
            <h4>Additional Information</h4>
            <ul>
              <li>Strong problem-solving skills and attention to detail.</li>
              <li>Excellent communication and teamwork abilities.</li>
              <li>Passionate about continuous learning and staying updated with the latest web development trends and technologies.</li>
            </ul>
          </div>
          <a href="/LeVente-Berry-Resume.pdf" download className="" id="download-btn">Download Resume</a>
        </div>
      </div>
    );
  }