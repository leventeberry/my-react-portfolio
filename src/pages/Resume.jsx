export default function Resume() {
    return (
      <div className="mt-5 mb-5 container">
        <h3 className="text-center page-title mb-5">Resume</h3>
        <div id="resume-container">
          <div className="mt-3 d-flex flex-column">
            <h4>Objective</h4>
            <p>
            Highly motivated and newly educated full stack web developer seeking to leverage my skills and knowledge in React, Node.js, and other modern web technologies to contribute to innovative and impactful web development projects.
            </p>
          </div>
          <div className="mt-3 d-flex flex-column">
            <h4>Skills</h4>
            <ul>
              <li><b>Front-End: </b><span>HTML, CSS, JavaScript, React (State Management, useEffect)</span></li>
              <li><b>Back-End: </b><span>Node.js, Express.js</span></li>
              <li><b>Databases: </b><span>SQL (MySQL), NoSQL(MondoDB, GraphQL)</span></li>
              <li><b>Tools & Technologies: </b><span>Git, Web API, Third-Party APIs, Server-Side APIs, ORM, MVC, PWAs, MERN Stack</span></li>
            </ul>
          </div>
          <div className="mt-3 d-flex flex-column">
            <h4>Education</h4>
            <b>Full Stack Web Development Certificate</b>
            <span>Ohio State Bootcamp</span>
          </div>
          <div className="mb-3 mt-3 d-flex flex-column">
            <h4>Additional Information</h4>
            <ul>
              <li>Strong problem-solving skills and attention to detail.</li>
              <li>Excellent communication and teamwork abilities.</li>
              <li>Passionate about continuous learning and staying updated with the latest web development trends and technologies.</li>
            </ul>
          </div>
          <a href="/LeVente-Berry-Resume.pdf" download className="p-2 col-3 mb-4" id="download-btn">Download Resume</a>
        </div>
      </div>
    );
  }