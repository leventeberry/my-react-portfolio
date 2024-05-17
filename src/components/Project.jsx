export default function Project() {
    const projects = [
        {
          id: 1,
          title: "Cryptoverse Blog",
          imgSrc: "src\\assets\\cryptoverse.png",
          deployedLink: "https://cryptoverse-blog-5710e4b7a1ef.herokuapp.com/home",
          githubLink: "https://github.com/hokage-216/cryptoverse-blog?tab=readme-ov-file"
        },
        {
          id: 2,
          title: "Urban Bassoon",
          imgSrc: "src\\assets\\jate.png",
          deployedLink: "https://github.com/hokage-216/urban-bassoon",
          githubLink: "https://github.com/hokage-216/urban-bassoon"
        },
        {
          id: 3,
          title: "J.A.T.E.",
          imgSrc: "",
          deployedLink: "",
          githubLink: ""
        },
        {
          id: 4,
          title: "Project 4",
          imgSrc: "path/to/image4.jpg",
          deployedLink: "https://deployedproject4.com",
          githubLink: "https://github.com/username/project4"
        },
        {
          id: 5,
          title: "Project 5",
          imgSrc: "path/to/image5.jpg",
          deployedLink: "https://deployedproject5.com",
          githubLink: "https://github.com/username/project5"
        }
      ];

    return (
        <div className="mt-5">
      <h3 className="text-center">My Portfolio</h3>
      <div className='mt-5'>
        <h4>Projects</h4>
        <div id="project-container" className='mt-5'>
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="project border">
              <img src={project.imgSrc} alt={project.title} className="img-fluid" />
              <div className="overlay">
                <h5>{project.title}</h5>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  Deployed Application
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
};